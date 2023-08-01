import { defineStore } from 'pinia'

export const useAuthStore = defineStore("auth", {
    state: () => ({
        isAuthenticated: true,
        user: {
            name: "Say Tong",
            email: "saytong@prasac.com.kh",
        }
    }
    ),
    actions: {
        logout () {
            // update state
            this.$patch((state) => {
              (state.isAuthenticated = false),(state.user = {});
            });
        },
        login () {
            this.$reset();
        }
    }
})