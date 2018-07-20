<template>
  <div class="container">

    <div class="row">

      <div class="col-xs-12 col-md-12 ">

        <h1>The Stock Trader App</h1>

        <hr>

        <app-header></app-header>

        <transition name="slide" mode="out-in">
          <div class="debt-card text-black" v-if=" debt < 0">
            <h5>Debt so far:
              <span class="debt-counter">${{ debtCounter }}</span>
            </h5>
          </div>
        </transition>

        <transition name="slide" mode="out-in">
          <router-view></router-view>
        </transition>

      </div>

    </div>

  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  data() {
    return {};
  },
  computed: {
    debt() {
      return this.$store.state.funds;
    },
    debtCounter() {
      return Math.abs(this.debt);
    }
  },
  methods: {
    startNewDay() {
      const formData = {};
    }
  },
  components: {
    appHeader: Header
  }
};
</script>

<style>
.debt-card {
  display: flex;
  justify-content: flex-end;
  padding: 0.4em 1em;
}

.debt-counter {
  color: red;
}

.slide-leave-active {
  transition: opacity 0.3s ease;
  opacity: 0;
  animation: slide-out 0.3s ease-out forwards;
}

.slide-leave {
  opacity: 1;
  transform: translateX(0);
}

.slide-enter-active {
  animation: slide-in 0.3s ease-out forwards;
}

@keyframes slide-out {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-10px);
  }
}

@keyframes slide-in {
  0% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
