import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
    state: () => ({
        user: JSON.parse(localStorage.getItem("user")) || null
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
                // Send logout request to Laravel API
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

                // Clear user data
                this.user = null;
                localStorage.removeItem("auth_token");
                localStorage.removeItem("user");
                console.log("Token successfully deleted from API.");
                alert("User has logged out.");
                console.log("User has logged out.");

                // Redirect to login page using the passed router instance
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
        }
    }
});
