<template>
  <header-uol></header-uol>
  <div id="app">
    <player-form @addPlayer="addPlayer" @reloadPlayers="reloadPlayers" />
    <player-list :players="players" />
  </div>
  <footer-ferruje></footer-ferruje>
</template>

<script>
import PlayerForm from "./components/PlayerForm.vue";
import PlayerList from "./components/PlayerList.vue";
import FooterFerruje from "./components/FooterFerruje.vue";
import HeaderUol from "./components/HeaderUol.vue";

export default {
  name: "App",
  data() {
    return {
      players: [],
    };
  },
  methods: {
    addPlayer(player) {
      this.players.push(player);
    },
    reloadPlayers(players){
      this.players = players;
    },
  },
  components: {
    PlayerForm,
    PlayerList,
    FooterFerruje,
    HeaderUol,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  align-items: center;
}


form {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid black;
  width: 400px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 2px 2px 10px 0 rgb(0, 0, 0);
}

input,
select,
button {
  margin-bottom: 10px;
}

label {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

button {
  background-color:#015326;
  color: white;
  font-size: 18px;
  padding: 10px;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  border-radius: 10px;
}

.option,
button:hover {
  background-color: #00682f;
  box-shadow: 1px 1px 3px 0 rgb(24, 24, 24);
  cursor: pointer;
}
</style>
