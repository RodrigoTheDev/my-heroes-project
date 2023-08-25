<template>
    <div id="page">
        <div id="favorite-container">
            <div v-for="item in my_heroes" class="favorite-content">

                <div class="favorite-item" id="favorite-img-container">
                    <div class="favorite-img" v-bind:style="{'background-image':'url('+ item.img +')'}"></div>
                </div>

                <div class="favorite-item" id="favorite-info-container">
                    <p class="favorite-title">{{ item.name }}</p>
                    <hr class="info-divider">
                    <p class="favorite-description">{{ item.description }}</p>
                </div>
            </div>
        </div>
    </div>
    <div id="error-page" v-if="empty">
        <div id="error-message">
            <h1>Oops, nothing found!</h1>
            <p class="info-texto">You haven't favorited any heroes, check all the listed heroes <a href="/heroes">here</a></p>
        </div>
    </div>
</template>

<script>
    import { getCookie } from '../../public/js/utilities';
    import { getDB } from '../../public/js/utilities';
    import { filterHero } from '../../public/js/utilities';
    export default {
        name: 'MyHeroes',
        data() {
            return {
                user_id: getCookie('user_id'),
                my_heroes: null,
                empty: false
            }
        },
        async mounted() {
            this.my_heroes = await filterHero(this.user_id)
            setTimeout(()=> { this.empty = (this.my_heroes.length < 1)},100)
        }
    }
</script>

<style>

#page {
    background-color:#E3E3E3;
}

#favorite-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

#favorite-info-container {
    width: 80%;
}

.favorite-content {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 10px;

    background-color: #D9D9D9;
    padding: 10px;
}



.favorite-img {
    height: 300px;
    width: 300px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.favorite-title, .favorite-description {
    font-size: 24px;
}

.info-divider {
        width: 80%;
        border:#B6B6B6 2px solid;
    }

@media(max-width: 700px) {
    .favorite-content {
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    }
    .favorite-item {
        width:100%;
    }
    /* .favorite-content * {
        text-align: center;
    } */

    .info-divider {
        text-align: center;
    }
}

</style>