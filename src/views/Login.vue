<template>
    <div id="login-page">
        <h1 id="login-text">Login</h1>
        <form action="" id="login-form" @submit="login" autocomplete="off">
            <input type="text" name="" id="user" placeholder="username" v-model="username" class="input-login">
            <input type="password" name="" id="" placeholder="password" v-model="password" class="input-login">
            <button class="btn">login</button>
            <p>Don’t you have an account? <a href="/register">Create one now!</a></p>
        </form>
        
    </div>
</template>

<script>
    export default {
        name:'Login',
        data() {
            return {
                username: null,
                password: null,
                user_id: null
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
            async checkUser() {
                const req = await fetch('http://localhost:3001/users')
                const users = await req.json() //get users from database
                const password = await this.hashPassword()

                for(const user of users) {
                    if(user.name === this.username && user.password === password) {
                        return user.id //retorna o id do usuario
                    }
                }
                return -1


            },
            async login(e) {
                e.preventDefault()
                const checked = await this.checkUser()
                console.log(checked)
                if (checked != -1) {
                    alert('welcome!')
                    this.setCookie('user_id',checked,60) //armazena o id do usuario em um cookie
                    window.location.href=  '/'
                }
                else {
                    alert('incorrect user or password')
                }
            },
            setCookie(name, value, minutes) {
                const date = new Date();
                date.setTime(date.getTime() + (minutes * 60 * 1000)); // Define a data de expiração
                const expires = "expires=" + date.toUTCString();
                document.cookie = name + "=" + value + ";" + expires + ";path=/";
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