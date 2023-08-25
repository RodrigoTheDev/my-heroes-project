<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap" rel="stylesheet">
  <Navbar />

  <router-view />

  <Footer />

</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  name:"App",
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {

    }
  }
}

</script>

<!-- script global -->
<style>
  body {
    box-sizing: border-box;
  }
  * {
    
    font-family: 'Roboto', sans-serif;
    margin: 0;
  }
  a {
    color:#E20404;
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
    
</style>