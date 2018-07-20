<template>
    <nav class="navbar navbar-light bg-light justify-content-between">

        <div class="col-md-5 col-lg-6">

            <router-link to="/" tag="a" class="navbar-brand" active-class="active" exact>
                <strong>Stock Trader</strong>
            </router-link>

            <router-link to="/portfolio" class="navbar-brand" tag="a" active-class="active">
                Portfolio
            </router-link>

            <router-link to="/stocks" tag="a" active-class="active">
                Stocks
            </router-link>

        </div>

        <div class="col-md-6 col-lg-6 nav--right">
            <a @click="endDay">
                End Day
            </a>
            <div class="dropdown">
                <a class="btn dropdown-toggle" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Save & Load
                </a>

                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <a class="dropdown-item" @click="onSave">Save</a>
                    <a class="dropdown-item" @click="onLoad">Load</a>
                </div>
            </div>
            <a href="#">Funds: ${{ funds }}</a>
        </div>

    </nav>
</template>

<script>
import axios from "axios";

function randomize(company) {
  return Math.floor(Math.random() * Math.floor(company));
}

export default {
  computed: {
    funds() {
      return this.$store.state.funds;
    }
  },
  methods: {
    endDay() {
      this.$store.state.companies.bmw.price = randomize(100);
      this.$store.state.companies.google.price = randomize(100);
      this.$store.state.companies.apple.price = randomize(100);
      this.$store.state.companies.twitter.price = randomize(100);
    },
    onSave() {
      const savedData = {
        state: this.$store.state
      };
      console.log(savedData);
      axios.put(
        "https://my-database-186cf.firebaseio.com/saved.json",
        savedData
      );
    },
    onLoad() {
      const loadedData = {
        state: this.$store.state
      };
      console.log(loadedData);
      axios
        .get("https://my-database-186cf.firebaseio.com/saved.json")
        .then(res => {
          console.log(res);
          this.$store.state.startGame = res.data.state.startGame;
          this.$store.state.funds = res.data.state.funds;
          this.$store.state.companies = res.data.state.companies;
        })
        .catch(error => console.log(error));
    }
  }
};
</script>

<style lang="css" scoped>
a {
  font-size: 0.9em;
  text-decoration: none;
  color: rgb(58, 58, 58);
  cursor: pointer;
}
.dropdown {
  display: inline;
}

.nav--right {
  text-align: right;
}

@media only screen and (max-width: 768px) {
  a {
    font-size: 1.2em;
  }
  .navbar,
  .nav--right {
    text-align: center;
  }
  .navbar > div {
    padding: 0.2em;
  }
}
</style>
