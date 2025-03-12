import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import calculatorApp from "@/components/calculatorApp.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            name: "Calculator",
            path: "/calculatorApp",
            component: ()=>import('@/components/calculatorApp.vue')
        },
        {
            name: "About",
            path: "/about",
            component: ()=>import('@/views/AboutView.vue')
        }
    ],
})

export default router
