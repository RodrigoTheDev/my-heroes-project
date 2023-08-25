<template>
    <div id="navbar">
        <div class="nav-box">
            <router-link to="/" class="nav-link">{{ username }}</router-link>
        </div>
        <div class="nav-box">
            <router-link to="/heroes" class="nav-link">Heroes</router-link>
            <router-link to="/myheroes" class="nav-link">My heroes</router-link>
            <a href="/login" class="nav-link" v-if="logged == ''">login</a>
            <a href="/logout" class="nav-link" v-if="logged != ''">logout</a>
        </div>
  </div>
</template>

<script>
import { getCookie } from '../../public/js/utilities';

export default {
    name:'Navbar',
    data() {
        return {
            logged: null,
            username: ''
        }
    },
    methods: {
        async updateName() {
            const userid = getCookie('user_id')
            const req = await fetch('http://localhost:3001/users')
            const users = await req.json() //get users from database
            const found = users.find(item => item.id == userid) //getting user with specific id
            this.username = found.name
        }
    },
    async mounted() {
        this.logged = getCookie('user_id')
        if(this.logged != '') {
            await this.updateName()
        }
    }
}

</script>

<style>

    #navbar {
        display: flex;
        justify-content: space-between;

        font-size: 18px;
        background-color: #E20404;
        padding: 20px;
    }

    .nav-box {
        display: flex;
        gap:20px;
    }

    .nav-link {
        color: white;
        text-decoration: none;
    }
    .nav-link:hover {
        text-decoration: underline;
    }

</style>