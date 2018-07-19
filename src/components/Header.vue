<template>
    <nav class="navbar navbar-light bg-light justify-content-between">

        <div class="col-md-4 col-lg-6">

            <router-link to="/" tag="a" class="navbar-brand" active-class="active" exact>
                <strong>Stock Trader</strong>
            </router-link>

            <router-link to="/portfolio" tag="a" active-class="active">
                Portfolio
            </router-link>

            <router-link to="/stocks" tag="a" active-class="active">
                Stocks
            </router-link>

        </div>

        <div class="col-md-8 col-lg-6 text-center">
            <a href="#" @click="endDay">
                End Day
            </a>
            <div class="dropdown">
                <a class="btn dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Save & Load
                </a>

                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <a class="dropdown-item" href="#">Save</a>
                    <a class="dropdown-item" href="#">Load</a>
                </div>
            </div>
            <a href="#">Funds: ${{ funds }}</a>
        </div>

    </nav>
</template>

<script>
import axios from "axios";

function randomize(company) {
  return company * Math.floor(Math.random() * 20);
}

export default {
  computed: {
    funds() {
      return this.$store.state.funds;
    }
  },
  methods: {
    endDay() {
      this.$store.state.companies.bmw.price = randomize(10);
      this.$store.state.companies.google.price = randomize(10);
      this.$store.state.companies.apple.price = randomize(10);
      this.$store.state.companies.twitter.price = randomize(10);
    }
  }
};
</script>

<style lang="css" scoped>
a {
  font-size: 0.8em;
  padding: 0 1.5em;
}
.dropdown {
  display: inline;
}
@media screen and (min-width: 768px) {
  .text-center {
    text-align: right !important;
  }
}
</style>
