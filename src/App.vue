<script setup>
import leftheader from './components/leftheader.vue'
import rightheader from './components/rightheader.vue'
import Counter from './components/counter.vue'
import { useCounterStore } from '@/stores/counter'

const counterStore = useCounterStore()
</script>

<template>
    <div>
        <div>
            <rightheader
            :header = "'VUE2 LOGO'"
            >

            </rightheader>
        </div>

        <div>

            <leftheader
                :msg = "'side'"
            >

            </leftheader>
            </div>
        <div class =" counter">
            <div class = "ctr-position">
                <p>Count: {{ counterStore.count }}</p>
                <p>Double Count: {{ counterStore.doubleCount }}</p>
                <button @click="counterStore.increment">Increment</button></div>
        </div>
            </div>



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

