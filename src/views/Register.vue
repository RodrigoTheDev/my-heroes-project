<template>
    <div id="login-page">
        <h1 id="login-text">Register</h1>
        <form action="" id="login-form" @submit="register" autocomplete="off">
            <input type="text" name="" id="username" placeholder="username" v-model="username" class="input-login" required>
            <input type="email" name="" id="email" placeholder="email" v-model="email" class="input-login" required>
            <input type="password" name="" id="password" placeholder="password" v-model="password" class="input-login" required>
            <button class="btn">login</button>
            <p>Do you already have an account? <a href="/login">Log in now!</a></p>
        </form>
    </div>
</template>

<script>
export default {
    name: 'Register',
    data() {
        return {
            username: null,
            email: null,
            password: null
        }
    },
    methods: {
        async hashPassword() {
                const encoder = new TextEncoder();
                const data = encoder.encode(this.password);

                const hashBuffer = await crypto.subtle.digest("SHA-256", data);

                const hashArray = Array.from(new Uint8Array(hashBuffer));
                const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, "0")).join("");

                return hashHex;
        },
        async register(e) {
            e.preventDefault()

            const newPassword = await this.hashPassword()

            const data = {
                name: this.username,
                email: this.email,
                password: newPassword,
            }
            
            const dataJson = JSON.stringify(data)

            const req = await fetch('http://localhost:3001/users', {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: dataJson
            })

            const res = await req.json()

            alert('You have been registered!')
            window.location.href = '/login'
        }
    }
}
</script>

<style scoped>

#login-page {
    height: 100vh;
    margin:auto;
}

#login-text {
    text-align: center;
    padding: 20px;
}

#login-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 70%;
    gap: 10px;
}

.input-login {
    border: none;
    border-radius: 15px;
    width: 50%;
    padding: 10px;
    font-size: 18px;
    background-color: #DEDEDE;
}

.btn {
    padding: 5px 40px;
}
</style>