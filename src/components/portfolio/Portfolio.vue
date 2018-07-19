<template>
  <div>
    <h2>Portfolio Page</h2>
    <router-view></router-view>
    <hr>
    <button class="btn btn-primary" @click="navigateToHome">Go to Home</button>
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
