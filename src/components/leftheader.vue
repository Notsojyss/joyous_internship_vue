<script setup>
defineProps({
    msg: {
        type: String,
        default: 'common',
    },
})
</script>

<template>
    <div class ="navigation">

        <ul>
            <li><a href="default.asp">{{msg}}</a></li>
            <li><a href="news.asp">News</a></li>
            <li><a href="contact.asp">Contact</a></li>
            <li><a href="about.asp">About</a></li>
        </ul></div>

</template>

<style scoped>

.navigation{
    left: 0px;
    margin: auto;
    border: #282828 solid 3px;
    padding: 8px;
    position: absolute;
    width: 250px ;
    background-color: #2c3e50;
    top: 130px;
    height: 84.9%;

}
.navigation ul{
    margin: auto;

}
ul li{
    text-align: Center;
    background-color: white;
    border: #282828 solid 3px;
    padding: 10px;
    position: relative;
    font-weight: bold;
    margin: auto;
    font-size: 15px;
    width: 250px;
    left: -50px;

}

</style>
