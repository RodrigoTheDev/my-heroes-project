<template>

<div id="footer">
    <div id="footer-container">

        <div class="footer-content">
            <p>This website was developed by Rodrigo Capucho, you can check his social media here:</p>
            <a href="https://github.com/RodrigoTheDev">Github</a>
            <a href="https://www.instagram.com/rocap.arte/">Instagram</a>
            <a href="https://www.youtube.com/@ProjetoTorrente">My music project</a>
        </div>
        
        <div class="footer-content">
            <p>All Marvel characters and the distinctive likeness(es) thereof are Trademarks & Copyright © 1939-2023 Marvel Characters, Inc. ALL RIGHTS RESERVED</p>
        </div>

    </div>
</div>

</template>

<script>
export default {
    name:'Footer'
}
</script>

<style>

#footer-container {
    display: flex;
    justify-content: space-around;
    padding: 20px;
    background-color: #0C0C0C;
    color: white;
    
}

.footer-content {
    display: flex;
    flex-direction: column;
    width: 40%;
}
/* .footer-content a {
    color:#E20404;
} */

</style>