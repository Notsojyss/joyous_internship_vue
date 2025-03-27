import { defineStore } from "pinia";
import axios from 'axios';
import { useAuthStore } from "@/stores/authStore";

export const usePvpStore = defineStore("pvp", {
    state: () => ({
        pvpbattles: [],
        winMessage: "",
        showWinMessage: false,

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

        },
        async selectPlay(play, pvpId) {
            try {
                const token = localStorage.getItem("auth_token");
                if (!token) {
                    console.error("No authentication token found");
                    return;
                }

                const apiUrl = `http://joyous-internship-api-local.com/api/pvp/join-battle/${pvpId}`;
                const response = await axios.post(apiUrl,
                    { play: play },
                    {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        Accept: "application/json",
                    },
                });
                if (response.data.message) {
                    this.winMessage = response.data.message;
                    this.showWinMessage = true;
                }


            } catch (error) {
                console.error("Error joining:", error);
            }
        },
        clearWinMessage() {
            this.winMessage = "";
            this.showWinMessage = false;

        },
        async createBattle(play, money_betted){
                try {
                    const token = localStorage.getItem("auth_token");
                    if (!token) {
                        console.error("No authentication token found");
                        return;
                    }

                    const apiUrl = `http://joyous-internship-api-local.com/api/pvp/assignPlay`;
                    const response = await axios.post(apiUrl,
                        {
                        play: play,
                        money_betted: money_betted
                        },
                        {
                            headers: {
                                Authorization: `Bearer ${token}`,
                                Accept: "application/json",
                            },
                        });
                    alert("Battle created successfully:", response.data);
                    console.log("Battle created successfully:", response.data);

                } catch (error) {
                    console.error("Error creating battle:", error);
                    if (error.response) {
                        console.error("Response Status:", error.response.status);
                        console.error("Response Data:", error.response.data);
                    }
                }
            }

    }







});
