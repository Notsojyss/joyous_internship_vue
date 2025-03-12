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
        <div class = "navigation"> <nav>
            <RouterLink to="/">HOME</RouterLink>
            <RouterLink to="/about">ABOUT US</RouterLink>
        </nav></div>

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
    margin-left: 140px;
    letter-spacing: -2px;
}
.navigation{
    width: 100% ;
    margin-top: -12px;
    height: 84.9%;
    text-align: center;
    color: #2c3e50;

}
.navigation {
    width: 100% ;
    margin-top: -12px;
    height: 84.9%;
    text-align: center;
    color: #2c3e50;

}

</style>
