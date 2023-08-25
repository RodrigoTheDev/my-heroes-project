<template>
    <section id="heroes-page">
        <section id="heroes-title">
            <h1>All Heroes</h1>
        </section>

        <section id="search">
            <input type="text" name="" id="search-bar" placeholder="Search" v-model="searched" @keydown.enter="details(-1)" autocomplete="off">
        </section>

        <section id="heroes-list">
            <div id="heroes-container">
                <div class="hero-content" v-for="hero in heroes">
                    <div class="hero-img" v-bind:style="{'background-image':'url('+ hero.img +')'}"></div>
                    <p class="hero-info"><span class="hero-name">{{ hero.name }}</span> <span class="hero-year">{{ hero.year }}</span></p>
                    <div class="hero-options">
                        <button class="hero-button" @click="details(hero.id)">More</button>
                        <button class="hero-button" @click="addHero(hero.id)">Add</button>
                    </div>
                </div>
            </div>
        </section>

    </section>
</template>

<script>
import { getCookie } from '../../public/js/utilities';
import { filterHero } from '../../public/js/utilities';

    export default {
        name:'Heroes',
        data() {
            return {
                heroes: null,
                user_id: null,
                searched: ""
            }
        },
        async mounted() {
            const userid = getCookie('user_id')
            console.log(this.my_favorites)
            this.user_id = userid
            const heroes_req = await fetch('http://localhost:3000/heroes')
            const heroes_data = await heroes_req.json()

            this.heroes = heroes_data
        },
        methods: {
            async heroExists(id) {
                const fav_heroes =  await filterHero(this.user_id)
                for(let hero of fav_heroes) {
                    if(hero.id == id) {
                        return true
                    }
                }
                return false
            },
            async addHero(id) {
                if(getCookie('user_id') == '') {
                    window.location.href ='/login'
                } else {

                    const exists = await this.heroExists(id)
                    if(!exists) {
                        const data = {
                            user_id: this.user_id,
                            hero_id: id
                        }
                    
                        const dataJson = JSON.stringify(data)
        
                        const req = await fetch('http://localhost:3001/favorites', {
                            method: "POST",
                            headers: {"Content-Type": "application/json"},
                            body: dataJson
                        })
                    } else {
                        alert('you already have this hero')
                    }
                }
            },

            details(id) {
                const query = { hero_id: `${id}`, search_name:this.searched }

                this.$router.push({path: '/selected', query})
            }

        }
    }
</script>

<style>

/* title */
#heroes-page {
    width: 100%;
    background-color: #e3e3e3;
}

#heroes-title {
    padding: 3%;
    text-align: center;
    font-size: 24px;
}

/* search bar */
#search {
    width: 50%;
    margin: auto;
    margin-bottom: 30px;
}
#search-bar {
    margin: auto;
    border: none;
    width:100%;
    border-radius: 100px;
    padding: 25px;
    font-size: 18px;
}

/* hero card */

#heroes-container {
    display: flex;
    flex-wrap: wrap;
    width:100%;
    gap: 10px;
}

.hero-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;

    background-color: #BEBEBE;
    padding: 10px;
    border-radius: 15px;
    width: 30%;
}

.hero-img {
    width: 50%;
    height: 300px;

    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.hero-info {
    font-size: 24px;
    font-weight: 800;
}
.hero-year {
    color: #7E7E7E;
}

.hero-options {
    display: flex;
    justify-content: space-around;
    width: 100%;
}
.hero-button {
    border: none;
    border-radius: 10px;
    padding: 10px 10%;
    background-color: #E20404;
    color: white;
}
.hero-button:hover {
    background-color: #FFF;
    color: #E20404;
}

@media(max-width: 800px) {
    #heroes-container {
        flex-direction: column;
        align-items: center;
    }
    .hero-content {
        width: 70%;
    }
}

</style>