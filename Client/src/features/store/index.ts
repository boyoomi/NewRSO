import { defineStore } from 'pinia';
import { HTTP } from '@app/http';
// import { useRoute } from 'vue-router';

export const useUserStore = defineStore('user', {
    state: () => ({
        user: {},
        privateUser: {},
        currentUser: {},
        isLoading: false,
    }),
    actions: {
        async getUser() {
            try {
                this.isLoading = true;
                setTimeout(async () => {
                    const responseUser = await HTTP.get('rsousers/me', {
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization:
                                'Token ' + localStorage.getItem('Token'),
                        },
                    });
                    this.currentUser = responseUser.data;
                    this.isLoading = false;
                }, 500);
            } catch (error) {
                console.log('an error occured ' + error);
                this.isLoading = false;
            }
        },

        async getUserId(id: String) {
            try {
                this.isLoading = true;
                setTimeout(async () => {
                    const responseUserId = await HTTP.get(`users/${id}/`, {
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization:
                                'Token ' + localStorage.getItem('Token'),
                        },
                    });
                    this.user = responseUserId.data;
                    this.isLoading = false;
                }, 500);
            } catch (error) {
                this.isLoading = false;
                console.log('an error occured ' + error);
            }
        },
        async getPrivateUserId(id: String) {
            const responsePrivate = await HTTP.get(`rsousers/${id}/`, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Token ' + localStorage.getItem('Token'),
                },
            });
            this.privateUser = responsePrivate.data;
        },
    },
});
