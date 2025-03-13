<script setup>
import {RouterLink} from "vue-router";
import Loginregister from "@/components/loginregister.vue";

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
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="70" height="90" />
        <h1>{{ header }}</h1>

        <loginregister />


        <div class="navigation">
            <RouterLink to="/calculatorApp">Calculator</RouterLink>
            <RouterLink to="/landingpage">Home</RouterLink>
        </div>
    </div>

</template>

<style scoped>
.header{
    margin: 0;

    position: absolute;
    width: 100% ;
    background-color: #a4d6bd;
    top: 5px;
    left: 0px;
    height: 100px;

}
.logo {
    margin-top: 0px;
    margin-left: 30px;/* Move the image down */
}

.header h1 {
    font-weight: bold;
    color:#2c3e50;
    font-family: "MS Gothic";
    font-size: 50px;
    margin-top: -95px;
    margin-left: 140px ;
    letter-spacing: -2px;
}

.navigation {
    display: flex;
    justify-content: center;
    background: #679c7c;
    padding: 0px 0;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    margin-top: 17px;
    width: 100%;
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
    width: 100px;
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
</style>
