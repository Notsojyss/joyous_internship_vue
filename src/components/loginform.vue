
<script>
    import { useAuthStore } from "@/stores/authStore";

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
    this.authStore.login(data.user, data.token); // Use Pinia to store user data

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
    <div class="forms">
        <div v-if="!authStore.user">
            <input v-model="logindata.username" placeholder="Username" /><br>
            <input v-model="logindata.password" placeholder="Password" type="password" /><br>
            <button @click="loginUser">Login</button>
        </div>
    </div>
</template>

<style scoped>
.forms {
    margin-top: 150px;
    margin-right: 200px;
    width: 600px;

    padding: 20px;
    background: #75d5a3;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
}

.forms input {
    width: 100%;
    padding: 10px;
    margin: 8px 0;
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
