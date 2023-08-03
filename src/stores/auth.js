import { defineStore } from 'pinia'

export const useAuthStore = defineStore("auth", {
    state: () => ({
        isAuthenticated: false,
        user: {}
    }
    ),
    getters: {
        fullname: (state) => `${state.user.first_name} ${state.user.last_name}`,
        name: (state) => state.user.name,
        
    },
    actions: {
        logout () {
            // update state
            this.$patch((state) => {
              (state.isAuthenticated = false),(state.user = {});
            });
        },
        async login () {
            const res = await fetch("https://reqres.in/api/users/1?delay=2");
            const {data} = await res.json();
            this.user = data;
            console.log(data);
            this.isAuthenticated = true;
        }
    }
})