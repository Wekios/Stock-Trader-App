import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    startGame: false,
    funds: 10000,
    companies: {
      bmw: { price: 150, quantity: null },
      google: { price: 200, quantity: null },
      apple: { price: 180, quantity: null },
      twitter: { price: 120, quantity: null }
    }
  },
  getters: {
    buyStocks: state => {
      return state.funds * 1000;
    }
  }
});

// created() {
//     axios
//         .get("https://my-database-186cf.firebaseio.com/funds.json")
//         .then(res => {
//             console.log(res);
//             this.funds = res.data;
//         })
//         .catch(error => console.log(error));
// }
