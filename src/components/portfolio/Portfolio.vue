<template>
    <div>
        <h2 class="sub-titles-portfolio">Portfolio Page</h2>
        <router-view v-if="this.$store.state.startGame"></router-view>
        <h4 class="start-game-titles-portfolio" v-else>Press Start Game To View Your Portfolio</h4>
        <hr>
    </div>
</template>

<script>
export default {
  methods: {
    navigateToHome() {
      this.$router.push("/");
    }
  }
};
</script>
