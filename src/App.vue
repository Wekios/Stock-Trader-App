<template>
    <div class="container">

        <div class="row">

            <div class="col-xs-12 col-md-12 ">

                <h1>The Stock Trader App</h1>

                <hr>

                <app-header></app-header>

                <br>

                <transition name="slide" mode="out-in">
                    <router-view></router-view>
                </transition>

            </div>

        </div>

    </div>
</template>

<script>
import { axios } from "axios";
import Header from "./components/Header.vue";

export default {
  data() {
    return {};
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
