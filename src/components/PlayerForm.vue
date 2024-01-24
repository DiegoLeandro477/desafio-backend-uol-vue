<template>
  <form @submit.prevent="handleSubmit">
    <h2> CADASTRO DE JOGADORES UOL</h2>
    <br />
    <label>
      Nome:
      <input v-model="player.name" required />
    </label>

    <label>
      Email:
      <input type="email" v-model="player.email" required />
    </label>

    <label>
      Telefone:
      <input v-model="player.phoneNumber" required />
    </label>

    <label class="container-select">
      Quer ser de qual grupo?
      <div class="option-select">
        <div class="for-select" v-for="option in selects" :key="option.name" >
          <input 
            class="option"
            type="radio" 
            v-model="player.legion" 
            :value="option.code"
            id="select-{{ option.code }}" >
          <label :for="'select-' + option.code">
            {{ option.name }}
          </label>
        </div>
      </div>
    </label>
    <div class="buttons" >
      <button type="submit">Cadastrar</button>
      <button type="button" @click="listPlayers">Listar Jogadores</button>
    </div>
  </form>
</template>

<script>
import axios from 'axios';


export default {
  data() {
    return {
      selects: [
        {code: "VINGADORES", name: "Vingadores"},
        {code: "LIGADAJUSTICA", name: "Liga da Justiça"},
      ],
      player: {
        name: "",
        email: "",
        phoneNumber: "",
        legion: ""
      },
    };
  },
  methods: {
    handleSubmit() {
      const url = 'http://localhost:8080/users';

      console.log(this.player);

      axios.post(url, this.player)
        .then(response => {
          this.$emit("addPlayer", { ...response.data });
        })
        .catch(error => {
          console.error('Erro na requisiçao:', error);
        });

      this.resetForm();
    },
    resetForm() {
      this.player = {
        name: "",
        email: "",
        phoneNumber: "",
        legion: "",
      };
    },
    listPlayers() {
      // Lógica para listar jogadores

      axios.get('http://localhost:8080/users')
        .then(response => {
          this.$emit("reloadPlayers", [ ...response.data])
          this.players = response.data;
        })
        .catch(error => {
          console.error('Erro ao recarregar jogadores:', error);
        });
    },
  },
};
</script>

<style scoped>
.option-select {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.for-select {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}
.container-select {
  align-items: center;
}
.buttons {
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: space-between;
}
</style>