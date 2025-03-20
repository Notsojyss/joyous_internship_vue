<script>
import { useAuthStore } from "@/stores/authStore.js";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import axios from 'axios'

export default {
    name: "loginregister",
    data() {
        return {
            authStore: useAuthStore(),
            router: useRouter()
        };
    },
    computed: {
        user() {
            return this.authStore.user;
        },
        money() {
            return this.authStore.money;
        }
    },
    methods: {
        handleLogout() {
            this.authStore.logout(this.router);
        }
    },
    mounted() {
        if (this.user) {
            this.authStore.fetchMoney(); // Fetch money when component is mounted
        }
    }
};
</script>


<template>
    <div>
            <div class = "moneyVal">
                <a  v-if="!user"  hidden>  </a>
                <a v-else> Money: {{money}} </a>
            </div>


        <RouterLink v-if="!user" to="/loginform" class="btn login-btn">Login</RouterLink>

        <button v-else class="btn login-btn">{{ user.full_name }}</button>

        <RouterLink v-if="!user" to="/registrationform" class="btn register-btn">Register</RouterLink>
        <button v-else @click="handleLogout" class="btn register-btn">Logout</button>
    </div>
</template>



<style scoped>
.login-btn {
    background: #34495e;
    color: #fff;
    border: none;
    padding: 8px;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
    position: absolute;
    top: 30px;
    right: 100px;
}

.login-btn:hover {
    background: #1abc9c;
}
.register-btn {
    background: #34495e;
    color: #fff;
    border: none;
    padding: 8px;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
    position: absolute;
    top: 30px;
    right: 20px;
}

.register-btn:hover {
    background: #1abc9c;
}
.moneyVal{
    position: absolute;
    top: 35px;
    right: 270px;

}
.moneyVal a{
    font-weight: bold;
    color: black;
}

</style>
