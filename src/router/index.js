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
        },
        {
            name: "registrationform",
            path: "/registrationform",
            component: ()=>import('@/components/registrationform.vue')
        },
        {
            name: "loginform",
            path: "/loginform",
            component: ()=>import('@/components/loginform.vue')
        },
        {
            name: "LandingPage",
            path: "/landingpage",
            component: ()=>import('@/views/LandingPage.vue')
        }
    ],
})

export default router
