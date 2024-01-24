<template>
    <footer>
        <img v-for="i in numberOfImg" :key="i" src="../assets/uol-universo-online.svg" alt="uol">
    </footer>
</template>

<script>
    export default {
        data() {
            return {
                numberOfImg: 15,
            };
        },
    }     
</script>

<style scoped>
    footer {
        display: flex;
        margin-top: 100px;
        gap: 30px;
    }
    img {
        width: 60px;
    }
</style>