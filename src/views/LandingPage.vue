<script setup>
import { useAuthStore } from '@/stores/authStore.js'; // Import the store if needed
const authStore = useAuthStore();
</script>

<template>
    <div class="landing">
        <h1>Welcome to Our Website</h1>
        <p>Your journey starts here.</p>
    </div>
</template>

<style scoped>
.landing {
    text-align: center;
    margin-top: 50px;
}
</style>
