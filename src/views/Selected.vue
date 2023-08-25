<template>
    <div id="selected-page" v-if="loaded">
        <section id="main-data">
            <div id="main-img" v-bind:style="{'background-image':'url('+ hero.img +')'}"></div>
            <div id="main-info">
                <p class="info-text">{{ hero.name }}</p>
                <hr class="info-divider">
                <p class="info-text">{{ hero.description }}</p>
            </div>
        </section>

        <div id="other-info-container">
            <div class="other-info">
                <p class="info-text">First appearence</p>
                <hr class="info-divider">
                <p class="info-text">{{ hero.firstapp }}</p>
            </div>
            <div class="other-info">
                <p class="info-text">Alter ego</p>
                <hr class="info-divider">
                <p class="info-text">{{ hero.alterego }}</p>
            </div>
            <div class="other-info">
                <p class="info-text">Place of origin</p>
                <hr class="info-divider">
                <p class="info-text">{{ hero.origin }}</p>
            </div>
            <div class="other-info">
                <p class="info-text">Team affiliations</p>
                <hr class="info-divider">
                <p class="info-text">{{ hero.teams }}</p>
            </div>

        </div>
        
        

    </div>
    <div id="error-page" v-if="error">
        <div id="error-message">
            <h1>Oops, nothing found!</h1>
            <p class="info-texto">Check all the listed heroes <a href="/heroes">here</a></p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Selected',
    data() {
        return {
            loaded: false,
            error: false,
            hero_id: this.$route.query.hero_id,
            hero: null
        }
    },
    async mounted() {
        const heroes_req = await fetch('http://localhost:3000/heroes')
        const heroes_data = await heroes_req.json()
        if(this.hero_id == -1) {
            var selected_hero = heroes_data.find(item => item.name == this.$route.query.search_name)
        } else {
            var selected_hero = heroes_data.find(item => item.id == this.hero_id)
        }

        setTimeout(() => {
            console.log(selected_hero)
            if(selected_hero == undefined) {
                this.error = true
            } else {
                this.hero = selected_hero
                this.loaded = true
            }
        }, 100)
        
    }
}
</script>

<style>
    #error-page {
        background-color: #E3E3E3;
        text-align: center;
        width: 100%;
        height: 100vh;     

        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

    }
    #selected-page {
        background-color: #E3E3E3;
        padding: 10px 0;
    }

    #main-data {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
    }
    #main-info {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
        gap: 10px;
        width: 50%;
    }

    #main-img {
        width:20%;
        height: 45vh;

        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    #other-info-container {
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }

    .other-info {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        background-color: #D9D9D9;
        width: 80%;
        padding: 10px;
    }

    .info-divider {
        width: 80%;
        border:#B6B6B6 2px solid;
    }


</style>