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
    getters: {
        fullname: (state) => `${state.user.first_name} ${state.user.last_name}`,
        
    },
    actions: {
        logout () {
            // update state
            this.$patch((state) => {
              (state.isAuthenticated = false),(state.user = {});
            });
        },
        async login () {
            const res = await fetch("https://reqres.in/api/users/2?delay=2");
            const {data} = await res.json();
            this.user = data;
            console.log(data);
            this.isAuthenticated = true;
        }
    }
})