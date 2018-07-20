import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    startGame: false,
    funds: 1000,
    companies: {
      bmw: { price: 150, quantity: 0 },
      google: { price: 200, quantity: 0 },
      apple: { price: 180, quantity: 0 },
      twitter: { price: 120, quantity: 0 }
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
