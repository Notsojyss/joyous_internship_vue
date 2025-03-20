
<script>
    import { useAuthStore } from "@/stores/authStore.js";

export default {
        name: "loginform",
        setup() {
        const authStore = useAuthStore();


    return { authStore };
},
    data() {
      return {
            logindata: {
            username: '',
            password: ''
        }
    };
},
    methods: {
        async loginUser() {
            try {
            const response = await fetch('http://joyous-internship-api-local.com/api/user/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(this.logindata)
});

    if (!response.ok) {
    throw new Error('Invalid username or password');
}

    const data = await response.json();
    console.log("Login successful:");
    this.authStore.login(data.user, data.token);
    this.authStore.fetchMoney();

    alert('Login successful!');
    this.$router.push('/landingpage');
} catch (error) {
    console.error('Login failed:', error);
    alert(error.message);
}
},
}
};
</script>

<template>
    <div v-if="!authStore.user" class="forms">
        <h1>Login</h1>
        <input v-model="logindata.username" placeholder="Username" />
        <input v-model="logindata.password" placeholder="Password" type="password" />
        <button @click="loginUser">Login</button>
        <p class="login-link">
            Don't have an account?
            <router-link to="/registrationform">Register</router-link>
        </p>
    </div>
</template>

<style scoped>
.forms {
    margin-top: 150px;
    margin-right: 200px;
    width: 600px;
    min-height: 200px;
    padding: 20px;
    background: #75d5a3;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
}
.disabled-form {
    opacity: 0.5;
    pointer-events: none; /* Prevent clicks and interactions */
}
.forms input {
    width: 100%;
    padding: 10px;
    margin: 12px 0;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 16px;
    transition: 0.3s ease;
}

.forms input:focus {
    border-color: #46855b;
    outline: none;
    box-shadow: 0 0 5px rgba(67, 124, 71, 0.5);
}

.forms button {
    width: 100%;
    padding: 10px;
    margin-top: 10px;
    border: none;
    background: #2c3e50;
    color: white;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s ease;
}

.forms button:hover {
    background: #0056b3;
}
</style>
