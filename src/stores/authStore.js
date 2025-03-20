import { defineStore } from "pinia";
import { ref } from "vue";
import axios from 'axios'
export const useAuthStore = defineStore("auth", {
    state: () => ({
        user: JSON.parse(localStorage.getItem("user")) || null,
        money: 0
    }),
    actions: {
        login(userData, token) {
            this.user = userData;
            localStorage.setItem("auth_token", token);
            localStorage.setItem("user", JSON.stringify(userData));
        },
        async logout(router) { // Accept router as a parameter
            const confirmLogout = confirm("Are you sure you want to log out?");
            if (!confirmLogout) return;

            const token = localStorage.getItem("auth_token");

            if (!token) {
                alert("No active session found.");
                return;
            }

            try {

                const response = await fetch("http://joyous-internship-api-local.com/api/user/logout", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    }
                });

                if (!response.ok) {
                    throw new Error("Logout failed");
                }

                this.user = null;

                localStorage.removeItem("auth_token");
                localStorage.removeItem("user");
                console.log("Token successfully deleted from API.");
                alert("User has logged out.");
                console.log("User has logged out.");


                router.push("/loginform");

            } catch (error) {
                console.error("Logout error:", error);
                alert("Error logging out. Please try again.");
            }
        }
        ,
        checkLoginStatus() {
            const storedUser = localStorage.getItem("user");
            this.user = storedUser ? JSON.parse(storedUser) : null;
        },

        async fetchMoney() {
            try {
                const token = localStorage.getItem("auth_token");
                const response = await axios.get("http://joyous-internship-api-local.com/api/user/getMoney", {
                    headers: { Authorization: `Bearer ${token}` }
                });

                 this.money = response.data.money;
                 console.log("Updated Money", this.money);
            } catch (error) {
                console.error("Error fetching money:", error.response?.data || error.message);
            }
        },



    }
});
