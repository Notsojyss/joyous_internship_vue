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
.toggle-buttons {
    margin-bottom: 20px;
}
.toggle-buttons button {
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 10px 15px;
    margin: 5px;
    cursor: pointer;
}
.toggle-buttons button.active {
    background-color: #2E7D32;
}
.sell-container {
    align-items: center; /* Centers content horizontally */
    padding: 0px;
    min-width: 1000px;
    min-height: 600px;
    justify-items: center;
    overflow-y: auto;
    overflow-x: hidden;
    max-height: 600px;
    max-width: 1200px;

}

.sell-grid {
    display: flex;
    flex-direction: column; /* Ensures items are stacked vertically */
    justify-items: center;
    gap: 10px; /* Adds spacing between items */
    min-width: 1000px;
    max-width: 1000px;
    max-height: 800px;
    min-height: 800px;

}

.sell-slot {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #f8f9fa;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    text-align: center;
    width: 100%;

    //min-height: 100px;
    //max-height: 100px;
}

.item-image {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 5px;
}

.place-button {
    background-color: #FF9800;
    color: white;
    border: none;
    padding: 10px 15px;
    margin-top: 20px;
    cursor: pointer;
}

button:hover {
    opacity: 0.9;
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
    .sell-slot {
        width: 120px;
        height: 120px;
        border: 2px dashed #ccc;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #f9f9f9;
    }
    .sell-grid {
        display: flex;
        gap: 10px;
        justify-content: center;
        margin-top: 20px;
    }
}
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
}

/* Modal container */
.modal-content {
    background: white;
    padding: 20px;
    border-radius: 8px;
    width: 50%;
    max-width: 600px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
}

/* Flex container for each item */
.item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
    padding: 10px;
    border-bottom: 1px solid #ccc;
}

/* Item image styling */
.item-image {
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 5px;
}

/* Details container */
.item-details {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    align-items: center;
}

/* Individual item details */
.item-name {
    font-size: 1rem;
    font-weight: bold;
    flex: 1;
}

.item-rarity {
    flex: 1;
    text-align: center;
    font-size: 0.9rem;
    color: #777;
}

.item-quantity {
    flex: 1;
    text-align: right;
    font-weight: bold;
}

/* Close button */
button {
    margin-top: 15px;
    padding: 8px 15px;
    background: #d9534f;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background: #c9302c;
}
</style>
<script setup lang="ts">
</script>
