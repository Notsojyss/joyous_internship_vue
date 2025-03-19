<script>
import axios from "axios";
import { useAuthStore } from "@/stores/authStore.js"; // Import Pinia store

export default {
    name: "ShopView",
    data() {
        return {
            items: [],
            user: null, // Initialize user
        };
    },
    mounted() {
        this.fetchItems();
        this.user = useAuthStore().user; // Get user from Pinia store
    },
    methods: {
        async fetchItems() {
            try {
                const response = await axios.get(
                    "http://joyous-internship-api-local.com/api/item/get-shopitems"
                );
                this.items = response.data;
            } catch (error) {
                console.error("Error fetching items:", error);
            }
        },async buyItem(item) {
            try {
                const token = localStorage.getItem("auth_token"); // Retrieve token from localStorage
                const user = JSON.parse(localStorage.getItem("user")); // Retrieve user data
                const userId = user?.id; // Ensure user exists

                if (!userId) {
                    alert("Please log in to purchase an item.");
                    return;
                }

                const response = await axios.post(
                    "http://joyous-internship-api-local.com/api/user/buy-item",
                    {
                        item_id: item.id,
                        quantity: 1 // ✅ Ensure quantity is sent
                    },
                    {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`
                        }
                    }
                );

                alert(response.data.message);
            } catch (error) {
                console.error("Error buying item:", error);
                alert("Failed to buy item: " + (error.response?.data?.error || error.message));
            }
        }


    },
};
</script>

<template>
    <div class="shop-container">
        <h1 class="shop-title">Item Shop</h1>
        <div class="item-list">
            <div v-for="item in items" :key="item.id" class="item">
                <img :src="item.image" :alt="item.name" class="item-image" />
                <h3> <br />{{ item.item_name }}</h3>
                <p>Description: {{ item.description }}</p>
                <p><strong>Rarity:</strong> {{ item.rarity }}</p>
                <p><strong>Price:</strong> {{ item.price }}</p>
                <br />
                <button @click="buyItem(item)">Buy</button> <!-- ✅ Fixed button event -->
            </div>
        </div>
    </div>
</template>

<style scoped>
.shop-container {
    padding: 20px;
    text-align: center;
    width: 1000px;
    margin-right: 125px;
    margin-top: 120px;
}

.shop-title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
    margin-left: 40px;
}

.item-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    width: 1000px;
}

.item {
    border: 2px solid black;
    padding: 15px;
    border-radius: 10px;
    width: 200px;
    text-align: center;
    background: #f9f9f9;
}

.item img {
    width: 80px;
    height: 80px;
    border-radius: 8px;
    margin-bottom: -20px;
}

.item p {
    margin: 5px 0;
    font-size: 14px;
    min-height: 25px;
    height: auto;
}
</style>
