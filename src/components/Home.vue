<template>
  <div class="jumbotron">
    <h2 class="display-4">Trade or View your Portfolio</h2>
    <p class="lead">You may Save or Load your Data</p>
    <p class="lead">Click on 'End Day' to Begin a new Day</p>
    <hr class="my-4">
    <h4 class="display-6">
      Your Funds: ${{ funds }}
    </h4>
    <div class="starting-funds" v-if="!startGame">
      <button class="btn btn-primary" @click="initiateGame">Start Game</button>
      <button class="btn btn-success" @click="incrementFund">Increase by 100</button>
      <button class="btn btn-warning" @click="decrementFund">Decrease by 100</button>
    </div>
    <h5 v-else class="good-luck-txt">
      Good Luck! :)
    </h5>
  </div>
</template>

<script>
export default {
  computed: {
    startGame() {
      return this.$store.state.startGame;
    },
    funds() {
      return this.$store.state.funds;
    }
  },
  methods: {
    incrementFund() {
      this.$store.state.funds += 100;
    },
    decrementFund() {
      this.$store.state.funds -= 100;
    },
    initiateGame() {
      this.$store.state.startGame = true;
    }
  }
};
</script>

<style scoped>
.good-luck-txt {
  line-height: 38px;
  margin-bottom: 0;
}
</style>

