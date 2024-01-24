<template>
    <div>
      <h2>Listagem de Jogadores</h2>
      <ul class="list">
        <ul class="sub-column" v-for="(legion, i) in legions" :key="i">
          <h2>{{ legion }}</h2>
          <li  class="player-container" v-for="(player, j) in filteredPlayers(legion)" :key="j">
            <div class="data-line" v-for="(value, key) in player" :key="key">
              <div class="template" v-if="shouldRender(key)" >
                <a>{{ key }}: </a><a class="data">{{ value }}</a>
              </div>
            </div>
          </li>
        </ul>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        legions: ['VINGADORES', 'LIGADAJUSTICA'],
        excludedKeys: ['id', 'legion'],
      };
    },
    computed: {
      filteredPlayers() {
        return (legion) => this.players.filter(x => x.legion === legion);
      },
    },
    props: {
      players: Array,
    },
    methods: {
      shouldRender(key) {
        return !this.excludedKeys.includes(key);
      }
    },
  };
  </script>
  
  <style scoped>
  .list {
    background-color: #ddffe5;
    display: flex;
    flex-direction: row;
    gap: 40px;
    padding: 20px;
    border-radius: 15px;
    border-left: 2px solid black;
    border-right: 2px solid black;
    width: 700px;
  }
  .sub-column {
    padding: 5px;
    width: 100%;
  }

  .player-container {
    margin: 10px 0;
    width: 300px;
    background-color: #91c7b1;
    border-radius: 15px;
    list-style-type: none;
    padding: 7px 10px;
    display: flex;
    flex-direction: column;
  }

  .data {
    background-color: white;
    text-align: left;
    width: 100%;
    padding: 0 5px;
    border-radius: 15px;
  }

  .template {
    display: flex;
    justify-content: left;
  }

  .data-line {
    font-size: 20px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    margin: 2px;
    width: 100%;
  }


  h2 {
    color: #41b883;
  }
  </style>
  