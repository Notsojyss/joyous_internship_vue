<script>
import axios from "axios";

export default {
    name: "Inventory",
    data() {
        return {
            items: [] // Initialize items as an empty array
        };
    },
    methods: {
        async fetchUserItems() {
            try {
                const token = localStorage.getItem("auth_token");
                if (!token) {
                    console.error("No authentication token found.");
                    return;
                }

                const response = await axios.get("http://joyous-internship-api-local.com/api/user/getUsersitem", {
                    headers: { Authorization: `Bearer ${token}` }
                });

                if (response.data.length > 0) {
                    this.items = response.data[0].items; // Assign fetched items
                } else {
                    this.items = [];
                }
            } catch (error) {
                console.error("Error fetching user items:", error);
            }
        }
    },
    mounted() {
        this.fetchUserItems(); // Fetch items when the component mounts
    }
};
</script>

<template>
    <div class="inventory-container">
        <h1>My Inventory</h1>
        <div v-if="items.length > 0" class="item-list">
            <div v-for="item in items" :key="item.item_name" class="item">
                <img :src="item.image" :alt="item.item_name" class="item-image" />
                <h3>{{ item.item_name }}</h3>
                <div class = "itemcontainerheader">
                    <p class = "Description">Description</p>
                    <p class = "itemname">Item Name</p>
                    <p class = "quantity">Quantity</p>
                </div>
                <div class = "itemtext">
                    <p>{{ item.description }}</p>
                    <p><strong>Rarity:</strong> {{ item.rarity }}</p>
                </div>
                <div class = "qtytext">
                    <p><strong> {{item.quantity}}</strong></p>
                </div>

            </div>
        </div>
        <p v-else>No items found.</p>
    </div>
</template>

<style scoped>
.inventory-container {
    min-width: 1200px;
    margin: 0 0;
    margin-top: 100px;
    padding: 20px;
    border: black 2px solid;
    text-align: center;
    background-color: whitesmoke;
    max-height: 800px;
    overflow-y: auto;
    overflow-x: hidden;
}
.item-list {
    display: flex;
    flex-direction: column;
    gap: 10px;

    //display: grid;
    //grid-template-columns: repeat(1, 1fr);
    //grid-auto-rows: auto;
    //gap: 10px;

}
.item {
    border: 1px solid #ddd;
    padding: 20px;
    max-height: 150px;
    border-radius: 5px;
    width: 1160px;
    text-align: left;

    //grid-column-start: 1;
    //grid-column-end: 4;
    //grid-row-start: 1;
    //grid-row-end: 3;
}
.item-image {
    position:relative;
    bottom: -25px;
    width: 70px;
    height: 70px;
    border-radius: 5px;
}
.item h3{
    position: relative;
    top: -30px;
    left: 200px;
    min-width: 100px;
    max-width: 150px;
    text-align: center;
}
.itemtext{
    position: relative;
    margin-top: -135px;
    left: 400px;
}
.item .Description{
    position: relative;
    top: -117px;
    left: 500px;
    font-weight: bold;
}.item .itemname{
    position: relative;
    top: -140px;
    left: 235px;
    font-weight: bold;
}.item .qtytext{
    position: relative;
    top: -45px;
    left: 825px;
    font-weight: bold;
}
.item .quantity{
    position: relative;
    top: -165px;
    left: 800px;
    font-weight: bold;
}
</style>
