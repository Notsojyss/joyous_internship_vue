<script>
import {useAuthStore} from "@/stores/authStore.js";
import {usePvpStore} from "@/stores/pvpStore.js";
import { computed, onMounted } from "vue";
import axios from 'axios';
import { ref } from "vue";
export default {
name: "PvpBattle",
    setup() {
        const authStore = useAuthStore();
        const pvpStore = usePvpStore();
        const pvpbattles = computed(() => pvpStore.pvpbattles);


        onMounted(() => {
            pvpStore.fetchPvpBattles();

        });
        return { authStore,pvpStore, pvpbattles  };
    },
    computed: {
        user() {
            return this.authStore.user;
        },

    }

}
</script>

<template>
    <div class="container">
        <h2 class="title">PVP BATTLES</h2>
        <div v-if="pvpbattles.length > 0" class="listing-grid">
            <div v-for="pvp in pvpbattles" :key="pvp.id" class="listing-card">
                <div class="listing-header">
                    <h2 class="host-name">Host: {{ pvp.username }}</h2>

                </div>
                <div>  <img src="../assets/pvpgame.png" alt="Market" class="nav-icon" /></div>
                <div class="listing-body">
                    <p class="wager">💰 Money Wager: <strong>{{ pvp.money_betted }}</strong></p>
                    <button class="join-btn">Join Battle</button>
                </div>
            </div>
        </div>
        <p v-else class="no-listing">No active listings available.</p>
    </div>
</template>

<style scoped>
    /* Main Container */
.container {
    text-align: center;
    background-color: whitesmoke;
    padding: 20px;
    text-align: center;
    min-width: 1200px;
    margin-right: 125px;
    margin-top: 120px;
    border: #2c3e50 2px solid;
    max-height: 650px;
    min-height: 650px;
    max-width: 1200px;
    background-color: whitesmoke;
}

/* Title */
.title {
    font-size: 24px;
    color: #ffcc00;
    margin-bottom: 20px;
}

/* Grid layout for battles */
.listing-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr); /* Maximum 5 per row */
    gap: 20px;
    padding: 20px;
    justify-content: center;
}

/* Battle Card */
    .listing-card {
        background: linear-gradient(135deg, #222, #444);
        border-radius: 12px;
        padding: 15px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        color: white;
        transition: transform 0.2s ease-in-out;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 220px; /* Adjust size if needed */
    }

.listing-card:hover {
    transform: translateY(-5px);
}

/* Header */
.listing-header {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
}

.nav-icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
}

/* Battle Info */
.host-name {
    font-size: 18px;
    font-weight: bold;
}

.wager {
    font-size: 16px;
    margin: 10px 0;
}

/* Button */
.join-btn {
    background: #ffcc00;
    color: #222;
    padding: 10px 15px;
    border: none;
    border-radius: 6px;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.2s;
}

.join-btn:hover {
    background: #ffdb4d;
}

/* No Listings Message */
.no-listing {
    text-align: center;
    font-size: 18px;
    color: gray;
    margin-top: 20px;
}
.nav-icon{
    height: 60px;
    width: 120px;
    object-fit: contain;
}
</style>

