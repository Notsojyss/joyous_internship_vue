<script setup>
import leftheader from './components/Unnecessary/leftheader.vue'
import rightheader from './components/Headers/rightheader.vue'
import OptionsAPI from './components/Unnecessary/OptionsAPI.vue'
import Counter from './components/Unnecessary/counter.vue'
import { useCounterStore } from '@/stores/counter'

import { RouterLink, RouterView } from 'vue-router'

</script>

<template>

<div>
    <rightheader
        header = "GT MARKET HUB"
    ></rightheader></div>

    <RouterView />
</template>

<style scoped>
.counter{
    position: fixed;
    margin-top: -80px;
    margin-left: -140px;
    padding: 20px;
    height: 200px;
    width: 600px;
    border: #2c3e50 solid 2px;
}
.ctr-position{

    margin-top: 40px;
    margin-left: 210px;


}
</style>

