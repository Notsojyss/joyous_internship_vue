<script setup>
import leftheader from './components/leftheader.vue'
import rightheader from './components/rightheader.vue'
import OptionsAPI from './components/OptionsAPI.vue'
import Counter from './components/counter.vue'
import { useCounterStore } from '@/stores/counter'

import { RouterLink, RouterView } from 'vue-router'

</script>

<template>

<div> <leftheader></leftheader>
    <rightheader
        header = "VUE2 LOGO"
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

