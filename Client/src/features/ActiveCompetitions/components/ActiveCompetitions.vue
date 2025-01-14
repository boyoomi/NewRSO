<template>
    <div class="competitions__container">
        <p v-if="loading">Загрузка...</p>
        <p v-else-if="!loading && !competitionsList.length">
            Список заявок на конкурсы пуст
        </p>

        <template v-else>
            <div class="competitions__actions">
                <v-select
                    variant="outlined"
                    class="form__field competitions__actions-select"
                    :items="actionsList"
                    v-model="action"
                    placeholder="Выберите действие"
                />
            </div>
            <div class="competitions__list">
                <template
                    v-for="(competition, index) in competitionsList"
                    :key="competition.id"
                >
                    <active-competition-item
                        v-if="
                            competition.is_confirmed_by_junior ||
                            (competition.junior_detachment.id ==
                                commanderIds.detachment_commander &&
                                !competition.is_confirmed_by_junior)
                        "
                        :competition="competition"
                        :commander-ids="commanderIds"
                        :position="index"
                        @select="onToggleSelectCompetition"
                    />
                </template>
                <p class="text_total">
                    Итого: {{ selectedCompetitionsList.length }}
                </p>

                <active-competition-item-select
                    v-for="competition in selectedCompetitionsList"
                    :key="competition.id"
                    :competition="competition"
                    :action="action"
                    :commander-ids="commanderIds"
                    @select="onToggleSelectCompetition"
                />
            </div>

            <div class="competitions__btns">
                <Button
                    class="save"
                    type="button"
                    :label="action"
                    @click="onAction"
                ></Button>
            </div>
        </template>
    </div>
</template>

<script setup>
import { Button } from '@shared/components/buttons';
import { HTTP } from '@app/http';
import { ref, onMounted, onActivated } from 'vue';
import ActiveCompetitionItem from './ActiveCompetitionItem.vue';
import ActiveCompetitionItemSelect from './ActiveCompetitionItemSelect.vue';

const competitionsList = ref([]);
const commanderIds = ref();
const selectedCompetitionsList = ref([]);
const allCompetition = ref([]);

const loading = ref(false);
const action = ref('Одобрить');
const actionsList = ref(['Одобрить', 'Отклонить']);

const getMeCommander = async () => {
    try {
        const { data } = await HTTP.get('/rsousers/me_commander/', {
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Token ' + localStorage.getItem('Token'),
            },
        });
        commanderIds.value = data;
    } catch (e) {
        console.log('error getMeCommander', e);
    }
};

const getAllCompetition = async () => {
    try {
        const { data } = await HTTP.get(
            `https://rso.sprint.1t.ru/api/v1/competitions/`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Token ' + localStorage.getItem('Token'),
                },
            },
        );
        allCompetition.value = data;
    } catch (e) {
        console.log('error getAllCompetition', e);
    }
};

const getCompetitionsJunior = async () => {
    for (const competitionId of allCompetition.value) {
        try {
            loading.value = true;
            console.log(commanderIds.value.detachment_commander);
            const { data } = await HTTP.get(
                `/competitions/${competitionId.id}/applications/me`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: 'Token ' + localStorage.getItem('Token'),
                    },
                },
            );
            if (!data.is_confirmed_by_junior)
                competitionsList.value = [...competitionsList.value, data];
        } catch (e) {
            console.log('error getCompetitionsJunior', e);
        } finally {
            loading.value = false;
        }
    }
};

const getCompetitions = async () => {
    for (const competitionId of allCompetition.value) {
        try {
            loading.value = true;
            const { data } = await HTTP.get(
                `/competitions/${competitionId.id}/applications/`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: 'Token ' + localStorage.getItem('Token'),
                    },
                },
            );

            competitionsList.value = data.filter(
                (c) => c.is_confirmed_by_junior,
            );
        } catch (e) {
            console.log('error getCompetitions', e);
        } finally {
            loading.value = false;
        }
    }
};

const onToggleSelectCompetition = (competition, isChecked) => {
    if (isChecked) {
        competition.selected = isChecked;
        selectedCompetitionsList.value.push(competition);
    } else {
        competition.selected = isChecked;
        selectedCompetitionsList.value = selectedCompetitionsList.value.filter(
            (c) => c.id !== competition.id,
        );
    }
};

const confirmApplication = async (id, competitionId) => {
    if (commanderIds.value.regionalheadquarter_commander == null) {
        await HTTP.put(
            `/competitions/${competitionId}/applications/${id}/`,
            {
                is_confirmed_by_junior: true,
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Token ' + localStorage.getItem('Token'),
                },
            },
        );
    } else {
        await HTTP.post(
            `/competitions/${competitionId}/applications/${id}/confirm/`,
            {},
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Token ' + localStorage.getItem('Token'),
                },
            },
        );
    }
};

const cancelApplication = async (id, competitionId) => {
    await HTTP.delete(
        `/competitions/${competitionId}/applications/${id}`,
        {
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Token ' + localStorage.getItem('Token'),
            },
        },
        {},
    );
};

const onAction = async () => {
    try {
        for (const application of selectedCompetitionsList.value) {
            if (action.value === 'Одобрить') {
                console.log(application.id);
                await confirmApplication(
                    application.id,
                    application.competition.id,
                );
            } else {
                await cancelApplication(
                    application.id,
                    application.competition.id,
                );
            }
            competitionsList.value = competitionsList.value.filter(
                (competition) => competition.id != application.id,
            );
            selectedCompetitionsList.value =
                selectedCompetitionsList.value.filter(
                    (competition) => competition.id != application.id,
                );
        }

        if (commanderIds.value.regionalheadquarter_commander == null)
            await getCompetitionsJunior();
        else await getCompetitions();
    } catch (e) {
        console.log('error action', e);
    }
};

onMounted(async () => {
    await getAllCompetition();
    await getMeCommander();
    console.log();
    if (commanderIds.value.regionalheadquarter_commander == null)
        await getCompetitionsJunior();
    else await getCompetitions();
});

onActivated(async () => {
    await getAllCompetition();
    await getMeCommander();
    if (commanderIds.value.regionalheadquarter_commander == null)
        await getCompetitionsJunior();
    else await getCompetitions();
});
</script>

<style scoped lang="scss">
.competitions__actions {
    display: grid;
    width: 100%;
    justify-content: flex-end;
    margin-bottom: 40px;
}

.competitions__actions-select {
    background-color: inherit;
    min-width: 224px;
}

.competitions__btns {
    display: flex;
    width: 100%;
    justify-content: center;
    margin-top: 60px;
}
.text_total {
    width: 1180px;
    height: 26px;
    margin: 40px 0;
    font-family: Bert Sans;
    font-size: 20px;
    font-weight: 600;
    line-height: 26px;
    letter-spacing: 0em;
    text-align: left;
    color: #35383f;
}
</style>
