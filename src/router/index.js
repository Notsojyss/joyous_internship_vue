import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import calculatorApp from "@/components/Unnecessary/calculatorApp.vue";
import { useAuthStore } from '@/stores/authStore.js';
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            name: "Calculator",
            path: "/calculatorApp",
            component: ()=>import('@/components/Unnecessary/calculatorApp.vue')
        },
        {
            name: "About",
            path: "/about",
            component: ()=>import('@/views/AboutView.vue')
        },
        {
            name: "registrationform",
            path: "/registrationform",
            component: ()=>import('@/components/Forms/registrationform.vue')
        },
        {
            name: "loginform",
            path: "/loginform",
            component: ()=>import('@/components/Forms/loginform.vue'),
             meta: { requiresGuest: true }
        },
        {
            name: "LandingPage",
            path: "/landingpage",
            component: ()=>import('@/views/LandingPage.vue'),
            meta: { requiresAuth: true }
        },
        {
            name: "Shop",
            path: "/shop",
            component: ()=>import('@/views/ShopView.vue'),
            meta: { requiresAuth: true }
        }
    ],
})
router.beforeEach((to, from, next) => {
    const authStore = useAuthStore();
    const isAuthenticated = !!localStorage.getItem("auth_token"); // Check token presence

    console.log("Navigating to:", to.path);
    console.log("Requires Auth?", to.meta.requiresAuth);
    console.log("Requires Guest?", to.meta.requiresGuest);
    console.log("Is User Authenticated?", isAuthenticated);

    if (to.meta.requiresAuth && !isAuthenticated) {
        console.log("User is NOT authenticated. Redirecting to /loginform...");
        next('/loginform');
    } else if (to.meta.requiresGuest && isAuthenticated) {
        console.log("User is already logged in. Redirecting to /landingpage...");
        next('/landingpage');
    } else if (to.meta.requiresGuest && isAuthenticated) {
        console.log("User is already logged in. Redirecting to /landingpage...");
        next('/shop');
    } else {
        console.log("User allowed to proceed.");
        next(); // Allow navigation
    }
});
export default router
