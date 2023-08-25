<template>
    <div class="home">
        <section id="presentation">
            <h1 id="presentation-text">YOUR FAVORITE HEROES,<br>IN ONE PLACE</h1>
            <h1 id="presentation-subtext">Spiderman, Black Panther, Doctor Strange and more!</h1>
        </section>

        <section id="try">
            <div id="try-container">
                <div class="try-content">
                    <p id="try-text">FIND YOUR NEW FAVORITE HERO HERE!</p>
                </div>
                <div class="try-content">
                    <button class="btn" onclick="window.location.href='/heroes'">give it a try</button>
                </div>
            </div>
        </section>

        <section id="search-like">
            <div id="sl-container">
                <div class="sl-content">
                    <img src="/img/search-icon.svg" alt="" class="img-icon" width="100px">
                    <p>Search it</p>
                </div>
                <div class="sl-content">
                    <img src="/img/like-icon.svg" alt="" class="img-icon" width="100px">
                    <p>Search it</p>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name:'Home',
}
</script>


<style>

    .home {
        background-color: #0C0C0C;
    }

    /* section 01 */
    #presentation {
        padding: 20vh 10vw;

        background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/img/marvel-bg.jpg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;

    }
    
    #presentation-text {
        text-align: center;
        color: white;
        font-size: 48px;
    }
    #presentation-subtext {
        color: rgb(120, 120, 120);
        text-align: center;
        font-size: 30px;
    }

    /* section 02 */

    #try-container {
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 20vh 10vw;

        color: white;
    }

    .try-content {
        display: flex;
    }

    #try-text {
        font-size: 32px;
        width: 80%;
        text-align: center;
    }

    .btn {
        padding: 20px 50px;
        background-color:#E20404;
        border: none;
        border-radius: 5px;

        color: white;
        font-size: 24px;

        transition: all 0.2s;
    }
    .btn:hover {
        background-color: white;
        color:#E20404;
    }

    /* section 03 */

    #search-like {
        background-color: #D9D9D9;
        padding: 20vh 10vw;
    }

    #sl-container {
        display: flex;
        justify-content: space-around;
    }

    .sl-content {
        text-align: center;
        font-size: 24px;
    }

    @media (max-width: 750px) {
        #try-container {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 20px;
        }
        .try-content {
            width: 100%;
            justify-content: center;
        }
    }

</style>