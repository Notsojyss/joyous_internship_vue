<script setup>
import { useAuthStore } from '@/stores/authStore.js'; // Import the store if needed
const authStore = useAuthStore();
</script>

<template>

    <div class="landing">
        <h1>Welcome to GT Trading Hub</h1>
        <p>Trade, buy, and sell game items in a thriving virtual marketplace!</p>
        <br>

        <div class="features">
            <div class="feature-card">
                <h2>🌟 Marketplace</h2>
                <ul>
                    <li>List items for sale with name, rarity, price, and image.</li>
                    <li>Browse and buy items from other users.</li>
                    <li>See item listings with various price options.</li>
                    <li>View purchase history with buyer details.</li>
                </ul>
            </div>

            <div class="feature-card">
                <h2>💰 Currency System</h2>
                <ul>
                    <li>Trade using virtual coins.</li>
                    <li>Earn coins through daily login and PvP battles.</li>
                    <li>Spend coins in the marketplace or official shop.</li>
                </ul>
            </div>

            <div class="feature-card">
                <h2>⚔️ Earn Coins with PvP</h2>
                <ul>
                    <li>Challenge players in Coin Flip and Rock-Paper-Scissors.</li>
                    <li>Win battles to earn more coins!</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>
body{
    background-color: #2c3e50;
}
.landing {
    margin-right: 80px;
    width: 90%;
    margin-top: 135px;
    height: 643px;
    background: #94cca9;
    border: #2c3e50 solid 2px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 160px 240px;
}

.features {
    display: flex;
    justify-content: center;
    gap: 10px;
    width: 850px;

}

.feature-card {
    background: #f8f9fa;
    border-radius: 8px;
    padding: 10px 20px;
    width: auto;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
.feature-card ul{
        display: block;
        list-style-type: disc;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 10px;
        padding-inline-start: 20px;
        unicode-bidi: isolate;
}.feature-card h2{
         display: block;
         font-size: 1.5em;
         margin-block-start: 0.83em;
         margin-block-end: 0.83em;
         margin-inline-start: 0px;
         margin-inline-end: 10px;
         font-weight: bold;
         unicode-bidi: isolate;
        width: 100%;

}

.cta {
    margin-top: 30px;
}

button {
    background: #4CAF50;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 18px;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background: #45a049;
}
</style>
