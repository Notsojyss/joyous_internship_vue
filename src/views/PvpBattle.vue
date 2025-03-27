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
        const winMessage = computed(() => pvpStore.winMessage);
        const showWinMessage = computed(() => pvpStore.showWinMessage);


        onMounted(() => {
            pvpStore.fetchPvpBattles();


        });
        return {authStore, pvpStore, pvpbattles, winMessage, showWinMessage};
    },
    data() {
        return {
            showPickPlayModal: false,
            selectedPvpId: null,
            showCreateBattleModal: false,
            selectedPlay: null, // Stores selected play
            selectedBet: null,
        }
    },
    computed: {
        user() {
            return this.authStore.user;
        },
        money(){
            return this.authStore.user?.money || 0;
        }
    },
    methods: {
        async handleJoin(user_id, pvpId) {

            const canJoin = await this.checkUserisNotHost(user_id, pvpId);
            if (!canJoin) {
                alert("You cannot join your own battle.");
                return;
            }

            const hasEnoughMoney = await this.checkUserHasEnoughMoney(user_id, pvpId);
            if (!hasEnoughMoney) {
                alert("You do not have enough money to join this battle.");
                return;
            }

            this.showPickPlayModal = true;
            this.selectedPvpId = pvpId;
        },

        async checkUserisNotHost(   user_id, pvpId) {
            const battle = this.pvpStore.pvpbattles.find(battle => battle.id === pvpId);
            if (!battle) {
                console.warn("Battle not found.");
                return false; // Avoid joining a non-existent battle
            }
            return battle.host_id !== user_id;
        },

        async checkUserHasEnoughMoney(user_id, pvpId) {
            await this.authStore.fetchMoney(); // Ensure the latest data is fetched

            const battle = this.pvpStore.pvpbattles.find(battle => battle.id === pvpId);
            if (!battle) {
                console.warn("Battle not found.");
                return false;
            }

            if (!this.authStore.user || this.authStore.user.id !== user_id) {
                console.warn("User not found or ID mismatch.");
                return false;
            }

            console.log(`User Money (after fetch): ${this.authStore.money}, Required Bet: ${battle.money_betted}`);

            return this.authStore.money >= battle.money_betted;
        }







        ,
        handleSelectPlay(play) {
            if (confirm(`Are you sure you want to select "${play}"?`)) {
                this.pvpStore.selectPlay(play, this.selectedPvpId);

            }
        },
        async handleMessage() {

            await this.pvpStore.clearWinMessage();
            await this.authStore.fetchMoney();
            this.showPickPlayModal = false;
            await this.pvpStore.fetchPvpBattles();
        },
       async handleCreateBattle(play,money_betted) {
            if (!this.selectedPlay || !this.selectedBet) {
                alert("Please select both a play and a bet amount.");
                return;
            }
            console.log(`Creating battle with move: ${this.selectedPlay} and bet: ${this.selectedBet}`);
            this.pvpStore.createBattle(play,money_betted);
            await this.pvpStore.fetchPvpBattles();
            this.showCreateBattleModal = false;
           await this.authStore.fetchMoney();


        }


    }
}



</script>

<template>
    <div class="container">
        <h2 class="title">PVP BATTLES</h2>
        <button class="join-btn"  @click="showCreateBattleModal = true">Create Battle</button>
        <div v-if="pvpbattles.length > 0" class="listing-grid">
            <div v-for="pvp in pvpbattles" :key="pvp.id" class="listing-card">
                <div class="listing-header">
                    <h2 class="host-name">Host: {{ pvp.username }}</h2>

                </div>
                <div>  <img src="../assets/pvpgame.png" alt="Market" class="nav-icon" /></div>
                <div class="listing-body">
                    <p class="wager">💰 Money Wager: <strong>{{ pvp.money_betted }}</strong></p>
                    <button class="join-btn" @click= "handleJoin(user.id,pvp.id)">Join Battle</button>
                </div>
            </div>
        </div>
        <p v-else class="no-listing">No active listings available.</p>
    </div>



    <!-- Modal For Picking a Play & Bet (Create Battle) -->
    <div v-if="showCreateBattleModal" class="modal-create-battle">
        <div class="modal-create-battle-header">
            <h3>CREATING A PVP BATTLE </h3>
            <button class="modal-create-battle-close-btn" @click="showCreateBattleModal = false">Close</button>
        </div>

        <!-- Play Selection -->
        <div class="modal-create-battle-options">
            <button @click="selectedPlay = 'Rock'" class="play-option" :class="{ selected: selectedPlay === 'Rock' }">
                <img src="../assets/rock.png" alt="Rock" />
            </button>
            <button @click="selectedPlay = 'Paper'" class="play-option" :class="{ selected: selectedPlay === 'Paper' }">
                <img src="../assets/paper.png" alt="Paper" />
            </button>
            <button @click="selectedPlay = 'Scissor'" class="play-option" :class="{ selected: selectedPlay === 'Scissor' }">
                <img src="../assets/scissor.png" alt="Scissors" />
            </button>
        </div>

        <h3 class="bet-header">Select Your Bet:</h3>
        <!-- Bet Selection -->
        <div class="bet-selection-list">
            <button @click="selectedBet = 100" class="bet-option" :class="{ selected: selectedBet === 100 }">100</button>
            <button @click="selectedBet = 500" class="bet-option" :class="{ selected: selectedBet === 500 }">500</button>
            <button @click="selectedBet = 1000" class="bet-option" :class="{ selected: selectedBet === 1000 }">1000</button>
            <button @click="selectedBet = 2000" class="bet-option" :class="{ selected: selectedBet === 2000 }">2000</button>
        </div>

        <button class="confirm-btn-create" @click="handleCreateBattle(this.selectedPlay,this.selectedBet)">Confirm Battle</button>
    </div>

    <!--          Modal For Picking a Play              -->
    <div v-if="showPickPlayModal" class="modal-pick-play">
            <div class="modal-pick-play-header">
                <h3>Select your Play:</h3>
                <button class="modal-play-close-btn" @click="showPickPlayModal = false">Close</button>
            </div>

            <!-- Play Selection List -->
            <div class="play-selection-list">
                <button @click="handleSelectPlay('Rock',this.selectedPvpId) "class="play-option">
                    <img src="../assets/rock.png" alt="Rock" />

                </button>
                <button @click="handleSelectPlay('Paper') "class="play-option">
                    <img src="../assets/paper.png" alt="Paper" />
                </button>
                <button @click="handleSelectPlay('Scissor')" class="play-option">
                    <img src="../assets/scissor.png" alt="Scissors" />
                </button>
            </div>
        </div>
     <p v-else hidden></p>

    <div v-if="this.pvpStore.showWinMessage" class="win-message">
        <p>{{ this.pvpStore.winMessage }}</p>
        <button @click="handleMessage()">Close</button>
    </div>


</template>

<style scoped>
.modal-create-battle{
    position: fixed;
    top: 30%;
    left: 22.5%;
    border: black solid;
    border-radius: 12px;
    justify-content: center;
    background: whitesmoke;
    max-height: 360px;
    min-height: 360px;
    min-width: 800px;
    max-width: 800px;
    display: flex;
    align-items: center;
    overflow-y: auto;
    overflow-x: hidden;
}
.modal-create-battle-header{
    position: fixed;
    margin-top: -300px;

}

.modal-create-battle-options{

    margin-left: 20px;

    display: flex;
    margin-top: -110px;
    justify-content: space-evenly;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    width: 1000px;

}

.modal-pick-play{
    position: fixed;
    top: 35%;
    left: 22.5%;
    border: black solid;
    border-radius: 12px;
    justify-content: center;
    background: whitesmoke;
    max-height: 300px;
    min-height: 300px;
    min-width: 800px;
    max-width: 800px;
    display: flex;
    align-items: center;
    overflow-y: auto;
    overflow-x: hidden;
}
.modal-pick-play-header{
    position: fixed;
    margin-top: -240px;

}
.modal-play-close-btn{
    display: block;
    position: fixed;
    top: 520px;
    left:600px ;
    padding: 10px 20px;
    font-size: 16px;
    background-color: #fd0101;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width: 150px;

}
.bet-selection-list {
    display: flex;
    position: relative;
    justify-content: center;
    gap: 10px;
    top: 450px;

}

.bet-option {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    border: 1px solid #000;
    border-radius: 5px;
    transition: all 0.2s;
}

.bet-option:hover {
    background-color: #ddd;
}

.confirm-btn-create {
    display: block;
    position: fixed;
    top: 520px;
    left:760px ;
    padding: 10px 20px;
    font-size: 16px;
    background-color: #28a745;
    color: white;
    border: none;
    width: 150px;
    border-radius: 5px;
    cursor: pointer;
}
.modal-create-battle-close-btn{
    display: block;
    position: fixed;
    top: 520px;
    left:600px ;
    padding: 10px 20px;
    font-size: 16px;
    background-color: #fd0101;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width: 150px;
}

.confirm-btn:hover {
    background-color: #218838;
}



.play-selection-list {

        margin-left: 20px;
        display: flex;
        justify-content: space-evenly;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
         width: 1000px;

}
.play-option {

    background: none;
    border: black 6px double;
    border-radius: 5px 5px 20px 20px;
    cursor: pointer;
    padding: 50px;
    max-height: 150px;
    min-height: 150px;
    min-width: 150px;
    max-width: 150px;
}

.play-option img {
    margin: -50px;
    justify-content: center;
    object-fit: cover; ;
    width: 100px; /* Adjust size */
    height: 100px;
    transition: transform 0.2s ease-in-out;

}

.play-option img:hover {
    transform: scale(1.1);
}

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
    grid-template-columns: repeat(6, 4fr);
    gap: 10px;
    padding: 20px;
    justify-items: center;
    max-width: 1160px;
    min-width: 1160px;
    overflow-x: hidden;
    overflow-y: auto;
    min-height: 500px;
    max-height: 500px;
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
        min-height: 240px;
        max-height: 240px;
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
.win-message {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    z-index: 1000;
}
/* Selected Play & Bet Highlight */
.selected {
    border: 2px solid green;
    background-color: lightgreen;
}
.bet-header {
    position: fixed;
    top:    430px;
}

/* Styling for Bet Selection */
.bet-selection-list {
    display: flex;
    position: fixed;
    justify-content: center;
    gap: 10px;
    margin-top: 10px;
}

.bet-option {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    border: 1px solid #000;
    border-radius: 5px;
    transition: all 0.2s;
}

.bet-option:hover {
    background-color: #ddd;
}



</style>

