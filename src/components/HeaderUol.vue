<template>
    <nav>
        <div>
            <label for="Logo"><a>Desafio backend</a><img src="../assets/uol-universo-online.svg" alt="uol"> </label>
        </div>
    </nav>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    nav {
        display: flex;
        width: 100%;
        height: 50px;
        background-color: #015326;
        margin-bottom: 40px;
        justify-content: center;
        border-radius: 0 0 10px 10px;
    }
    label {
        width: 100%;
        justify-content: space-between;
    }

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
    label {
        font-size: 30px;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        font: bolder;
        color: white;
        width: 100%;
        display: flex;
        justify-content: space-around;
    }
    img {
        width: 60px;
    }
    
</style>