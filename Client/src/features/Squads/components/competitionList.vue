<template>
  <div class="squads-wrapper" v-if="squads.length > 0">
    <squadItem v-for="squad in squads" :squad="squad" :competition="true" :rating="false" :key="squad.id" />
  </div>

  <h2 class="mt-10" v-else>Отряд не найден...</h2>
</template>
<script setup>
import { ref } from 'vue';
import { squadItem } from '@entities/Squads';
const props = defineProps({
  squads: {
      type: Array,
      required: true,
  },
});
</script>
<style lang="scss"></style>