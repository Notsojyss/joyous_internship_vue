<script setup>
import {RouterLink} from "vue-router";
import Loginregister from "@/components/Headers/loginregister.vue";

defineProps({
    header: {
        type: String,
        default: 'common',
    },
    login: {
        type: String,
        default: 'Login'
    },
    computed: {

    },
    methods: {

    }
})
</script>

<template>
    <div class="header">
        <img alt="Vue logo" class="logo" src="../../assets/gtmarketlogo.png" width="80" height="85" />
        <h1>{{ header }}</h1>

        <loginregister />


        <div class="navigation">
            <RouterLink to="/calculatorApp">Calculator</RouterLink>
            <RouterLink to="/landingpage">Home</RouterLink>
            <RouterLink to="/market" class="nav-item">
                <img src="../../assets/gtmarket.png" alt="Market" class="nav-icon" />
                Marketplace
            </RouterLink>
            <RouterLink to="/shop"> $ Shop</RouterLink>
            <RouterLink to="/pvp">PVP Battle</RouterLink>
        </div>
    </div>

</template>

<style scoped>
.header{
    margin: 0;
    position: absolute;
    width: 100% ;
    background-color: #aaefce;
    top: 0px;
    left: 0px;
    min-height: 100px;
    border: #2c3e50 solid 0.5px;
}

.logo {
    margin-top: 0px;
    margin-left: 30px;/* Move the image down */
    padding: 4px;
}

.header h1 {
    font-weight: bold;
    color:#2c3e50;
    font-family: "MS Gothic";
    font-size: 32px;
    margin-top: -70px;
    margin-left: 110px ;
    letter-spacing: -2px;
    height: 60px;
}

.navigation {
    position: absolute;

    left: 50%;
    transform: translateX(-50%);
    background: #94cca9;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    margin-top: 17px;
    width: 100.1%; /* Adjust width as needed */
    border: #2c3e50 solid 0.5px;

    text-align: center;
    display: flex;
    justify-content: center;
}


.nav-link {
    color: #dc0202;
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: bold;
    padding: 12px 20px;
    border-radius: 5px;
    transition: background 0.3s ease-in-out, transform 0.2s ease;
}
.register {
    position: absolute;
    top: 45px;
    right: 20px;
}
.login {
    position: absolute;
    top: 45px;
    right: 100px;
}
.btn {
    background: #34495e;
    color: #fff;
    border: none;
    padding: 8px;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
}
.btn:hover {
    background: #1abc9c;
}
.buttons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
}
.nav-link:hover {
    background: #1abc9c;
    transform: scale(1.1);
}

.nav-link:active {
    background: #16a085;
}

.navigation a {

    color: #24684c;
    font-weight: bold;
    font-size: 16px;
    margin-right: 40px;
    width: auto;
    text-align: center;
    padding: 5px;
}
.navigation a:hover {

    background: #1abc9c;
    transform: scale(1.1);
}
.router-link-active {
    background-color: #294034;
    color: #24684c;



}
.nav-item {
    display: flex;
    align-items: center;
    gap: 8px; /* Space between icon and text */
    text-decoration: none;
    color: black;
}

.nav-icon {
    width: 24px; /* Adjust size */
    height: 24px;
}

</style>
