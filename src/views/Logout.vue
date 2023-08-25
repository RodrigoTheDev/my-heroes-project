<template>

</template>

<script>
export default {
    name:'Logout',
    methods: {
        deleteCookie() {
            console.log('a')
            document.cookie = 'user_id' + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        }
    },
    mounted() {
        this.deleteCookie()
        window.location.href = '/'
    }
}
</script>