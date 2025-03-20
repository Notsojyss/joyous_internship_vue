<script>
import axios from "axios";

export default {
    name: "Market",
    data() {
        return {
            listings: [],
            groupedListings: [],
            showModal: false,
            selectedItem: null,
            filteredListings: [],
        };
    },
    mounted() {
        this.fetchListings();
    },
    methods: {
        async fetchListings() {
            try {
                const token = localStorage.getItem("auth_token");
                if (!token) {
                    console.error("No authentication token found");
                    return;
                }

                const response = await axios.get("http://joyous-internship-api-local.com/api/market/get-activelisting", {
                    headers: { Authorization: `Bearer ${token}`, Accept: "application/json" }
                });

                this.listings = response.data;
                this.groupListings();
            } catch (error) {
                console.error("Error fetching listings:", error);
            }
        },

        groupListings() {
            const uniqueItems = {};
            this.listings.forEach(listing => {
                if (!uniqueItems[listing.item_name]) {
                    uniqueItems[listing.item_name] = {
                        item_name: listing.item_name,
                        description: listing.description,
                        rarity: listing.rarity,
                        image: listing.image
                    };
                }
            });
            this.groupedListings = Object.values(uniqueItems);
        },

        openModal(itemName) {
            this.selectedItem = itemName;
            this.filteredListings = this.listings.filter(listing => listing.item_name === itemName);
            this.showModal = true;
        },

        closeModal() {
            this.showModal = false;
            this.selectedItem = null;
            this.filteredListings = [];
        },

        async buyItem(listingId) {
            try {
                const token = localStorage.getItem("auth_token");
                if (!token) {
                    console.error("No authentication token found");
                    return;
                }

                const response = await axios.post(
                    "http://joyous-internship-api-local.com/api/market/buy",
                    { listing_id: listingId },
                    { headers: { Authorization: `Bearer ${token}`, Accept: "application/json" } }
                );

                alert(response.data.message);
                this.fetchListings(); // Refresh listings after purchase
                this.closeModal();
            } catch (error) {
                console.error("Error purchasing item:", error);
            }
        }
    }
};
</script>

<template>
    <div class="market-container">
        <h1>Market Listings</h1>

        <div v-if="groupedListings.length > 0" class="listing-grid">
            <div v-for="item in groupedListings" :key="item.item_name" class="listing-card">
                <img :src="item.image" :alt="item.item_name" class="listing-image" />
                <h3 class="itemNameH3">ITEM</h3>
                <h2 class = "itemNametext">{{ item.item_name }}</h2>
                <button @click="openModal(item.item_name)">View Listings</button>
            </div>
        </div>

        <p v-else>No active listings available.</p>

        <!-- 🛒 Pop-up Modal -->
        <div v-if="showModal" class="modal-overlay">
            <div class="modal-content">
                <h2>Listings for {{ selectedItem }}</h2>
                <div class="listings-container">
                    <div v-for="listing in filteredListings" :key="listing.id" class="listing-row">
                        <img :src="listing.image" :alt="listing.item_name" class="listing-image-small" />
                        <div class="listing-details">
                            <h3 class="listItemname">{{ listing.item_name }}</h3>
                            <p class="listRarity"><strong>Rarity:</strong> {{ listing.rarity }}</p>
                            <p class = "listDescription">{{ listing.description }}</p>
                            <p class = "listQuantity"><strong>Quantity:</strong> {{ listing.quantity }}</p>
                            <p class = "listPrice"><strong>Price:</strong> {{ listing.price }} coins</p>
                            <p class = "listSeller"><strong>Seller:</strong> {{ listing.username }}</p>
                            <button @click="buyItem(listing.id)">Buy</button>
                        </div>
                    </div>
                </div>
                <button class="close-btn" @click="closeModal">Close</button>
            </div>
        </div>
    </div>
</template>

<style scoped>

.market-container {
    text-align: center;
    background-color: whitesmoke;
    padding: 20px;
    margin-top: 140px;
    min-width: 1200px;
    max-width: 1200px;
    min-height: 800px;
    max-height: 800px;

}

.listing-grid {
    display: flex;
    flex-direction: column;
    gap: 8px;
    justify-content: center;
}

.listing-card {
    border: 1px solid #ddd;
    padding: 15px;
    border-radius: 5px;
    width: 1160px;
    text-align: center;
    background-color: white;
    min-height: 80px;
    max-height: 100px;
}

.listing-image {
    position: relative;
    left: -500px;
    top: 0px;
    width: 70px;
    height: 70px;
    border-radius: 5px;
}

button {
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 8px 12px;
    cursor: pointer;
}

button:hover {
    background-color: #45a049;
}

/* Modal Styling */
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal-content {
    background: white;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
    margin-top: 140px;
    margin-left: 15px;
    max-width: 1200px;
    min-width: 1200px;
    min-height: auto;
    max-height: 800px;
}

.listings-container {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 10px;
    overflow-y: auto;
    max-height: 800px;
    min-height: auto;
    overflow-x: hidden;

}

.listing-row {
    display: flex;
    align-items: center;
    gap: 15px;
    border: 1px solid #ddd;
    padding: 10px;
    border-radius: 5px;
    background: #f9f9f9;
    width: 100%;
    min-width: 0;
    min-height: 100px;
    max-height: 100px;

}

.listing-image-small {
    width: 80px;
    height: 80px;
    border-radius: 5px;
}

.listing-details {
    flex: 1;
    text-align: left;
    min-width: 0;
}

.close-btn {
    background-color: red;
    color: white;
    padding: 8px 12px;
    margin-top: 15px;
}
.listing-card .itemNameH3 {
    position: relative;
    top: -95px;
    font-weight: bold;
}
.listing-card .itemNametext {
    position: relative;
    top: -90px;
    font-weight: bold;
}
.listing-card button {
    position: relative;
    top: -125px;
    right: -500px;
    font-weight: bold;
}
.listing-details .listItemname{
    position: relative;
    top: 90px;
    right: -10px;


}
.listing-details .listRarity{
    position: relative;
    top: 63px;
    right: -150px;

}
.listing-details .listDescription{
    position: relative;
    top: 25px;
    right: -270px;
    width: 200px;
}
.listing-details .listQuantity{
    position: relative;
    top: -8px;
    right: -500px;
}.listing-details .listPrice{
     position: relative;
     top: -33px;
     right: -625px;
}
.listing-details .listSeller{
    position: relative;
    top: -58px;
    right: -800px;
}
.listing-details button{
    position: relative;
    top: -85px;
    right: -950px;
}
.listing-row .listing-image-small{
    height: auto;
    max-width: 80px;

}
</style>
