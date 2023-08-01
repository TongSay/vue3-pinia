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
})