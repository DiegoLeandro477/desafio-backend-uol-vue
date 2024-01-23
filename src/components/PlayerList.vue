<template>
    <div>
      <h2>Listagem de Jogadores</h2>
      <ul>
        <li class="player-container">
          <label v-for="(value, i) in mapTable" :key="i" class="table">
            {{ value }}
          </label>
        </li>
        <li class="player-container" v-for="(player, index) in players" :key="index" >
          <label v-for="(value, i) in player" :key="i">{{ value }}</label>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        mapTable: [
          "Id",
          "Nome",
          "Email",
          "Phone",
          "Codinome",
          "Grupo",
        ],
      };
    },
    props: {
      players: Array,
    },
  };
  </script>
  
  <style scoped>
  .player-container {
    margin: 4px 0;
    width: 100%;
    background-color: rgb(179, 228, 248);
    border-radius: 5px;
    list-style-type: none;
    padding: 7px 10px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 10px;
  }

  span {
    color: black;
    font-size: 20px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  }

  label {
    background-color: white;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 150px;
    padding: 0 5px;
  }

  .table {
    background-color: rgb(197, 197, 197);
    font-size: 22px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    width: 150px;
    height: 25px;
    padding: 5px;
  }

  h2 {
    color: #41b883;
  }
  </style>
  