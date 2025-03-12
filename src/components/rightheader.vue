<script setup>
import {RouterLink} from "vue-router";

defineProps({
    header: {
        type: String,
        default: 'common',
    },
})
</script>

<template>
    <div class = "header"><img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="100" height="100" /><h1>
        {{ header }}</h1>
        <div class = "navigation">
            <a><RouterLink to="/calculatorApp">Calculator</RouterLink></a>
            <RouterLink to="/about">About</RouterLink>
        </div>

    </div>

</template>

<style scoped>
.header{
    margin: 0;
    border: solid 2px;
    position: absolute;
    width: 100% ;
    background-color: #a4d6bd;
    top: 5px;
    left: 0px;
    height: 125px;

}
.logo {
    margin-top: 15px;
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
    padding: 20px;
}
.router-link-active {
    background-color: #294034;
    color: #24684c;



}
</style>
