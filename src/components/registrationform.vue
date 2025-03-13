<script>

export default {
    data() {
        return {
            form:{
                username: '',
                password: '',
                confirmPassword: '',
                full_name: '',
                first_name: '',
                last_name: '',
                email: '',
                confirmEmail: ''
            }

        };
    },
    methods: {
        async registerUser() {
            if (this.form.password !== this.form.confirmPassword) {
                alert("Passwords do not match!");
                return;
            }

            if (this.form.email !== this.form.confirmEmail) {
                alert("Emails do not match!");
                return;
            }
            try {
                const response = await fetch('http://joyous-internship-api-local.com/api/user/create/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(this.form)
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                alert('User registered successfully!');
                console.log(data);
                this.$router.push('/loginform');
            } catch (error) {
                console.error('Registration failed:', error);
                alert('Failed to register user. Check console for details.');
            }
        }
    }
};
</script>

<template>
    <div class="forms">
        <input v-model="form.username" placeholder="Username" /><br>
        <input v-model="form.password" placeholder="Password" type="password"/><br>
        <input v-model="form.confirmPassword" placeholder="Confirm Password" type="password"/><br>
        <input v-model="form.full_name" placeholder="Full Name" /><br>
        <input v-model="form.first_name" placeholder="First Name" /><br>
        <input v-model="form.last_name" placeholder="Last Name" /><br>
        <input v-model="form.email" placeholder="Email" type="email"/><br>
        <input v-model="form.confirmEmail" placeholder="Confirm Email" type="email"/><br>

        <p class="login-link">
            Already have an account?
            <router-link to="/loginform">Login</router-link>
        </p>
        <button @click = "registerUser">Register</button>

        <br><br>

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
