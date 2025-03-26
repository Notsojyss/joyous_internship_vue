import { defineStore } from "pinia";
import axios from 'axios';

export const usePvpStore = defineStore("pvp", {
    state: () => ({
        pvpbattles: []

    }),
    actions: {
        async fetchPvpBattles() {
            try {
                const token = localStorage.getItem("auth_token");
                if (!token) {
                    console.error("No authentication token found");
                    return;
                }

                const apiUrl = "http://joyous-internship-api-local.com/api/pvp/get-pvpbattles"; // Ensure it's an absolute URL
                const response = await axios.get(apiUrl, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        Accept: "application/json",
                    },
                });

                console.log("Fetched PVP Battles:", response.data); // ✅ Debugging log
                this.pvpbattles = response.data;

            } catch (error) {
                console.error("Error fetching PVP battles:", error);
                if (error.response) {
                    console.error("Response Status:", error.response.status);
                    console.error("Response Data:", error.response.data);
                }
            }
        }

    }







});
