<template>
    <div>

        <div class="row">

            <div class="col-xs-12 col-md-6" v-if="bmw.quantity > 0">
                <div class="card">
                    <h5 class="card-header">
                        BMW
                        <span>(price: {{bmw.price}} | Quantity: {{ bmw.quantity }} )</span>
                    </h5>
                    <div class="card-body">
                        <input v-model="bmwQuantity" type="number" name="quantity" placeholder=" Quantity" />
                        <input @click="sellBmwStock" type="submit" class="btn btn-danger" value="Sell">
                    </div>
                </div>
            </div>

            <div class="col-xs-12 col-md-6" v-if="google.quantity > 0">
                <div class="card">
                    <h5 class="card-header">
                        Google
                        <span>(price: {{google.price}} | Quantity: {{ google.quantity }} )</span>
                    </h5>
                    <div class="card-body">
                        <input v-model="googleQuantity" type="number" name="quantity" placeholder=" Quantity" />
                        <input @click="sellGoogleStock" type="submit" class="btn btn-danger" value="Sell">
                    </div>
                </div>
            </div>

            <div class="col-xs-12 col-md-6" v-if="apple.quantity > 0">
                <div class="card">
                    <h5 class="card-header">
                        Apple
                        <span>(price: {{apple.price}} | Quantity: {{ apple.quantity }} )</span>
                    </h5>
                    <div class="card-body">
                        <input v-model="appleQuantity" type="number" name="quantity" placeholder=" Quantity" />
                        <input @click="sellAppleStock" type="submit" class="btn btn-danger" value="Sell">
                    </div>
                </div>
            </div>

            <div class="col-xs-12 col-md-6" v-if="twitter.quantity > 0">
                <div class="card">
                    <h5 class="card-header">
                        Twitter
                        <span>(price: {{twitter.price}} | Quantity: {{ twitter.quantity }} )</span>
                    </h5>
                    <div class="card-body">
                        <input v-model="twitterQuantity" type="number" name="quantity" placeholder=" Quantity" />
                        <input @click="sellTwitterStock" type="submit" class="btn btn-danger" value="Sell">
                    </div>
                </div>
            </div>

        </div>

    </div>
</template>

<script>
export default {
  computed: {
    bmw() {
      return this.$store.state.companies.bmw;
    },
    google() {
      return this.$store.state.companies.google;
    },
    apple() {
      return this.$store.state.companies.apple;
    },
    twitter() {
      return this.$store.state.companies.twitter;
    }
  },
  methods: {
    sellBmwStock() {
      if (this.$store.state.companies.bmw.quantity < this.bmwQuantity) {
        return alert("cant't sell what'chu don't have!");
      }
      this.$store.state.funds +=
        this.$store.state.companies.bmw.price * this.bmwQuantity;
      this.$store.state.companies.bmw.quantity -= parseInt(this.bmwQuantity);
      if (this.$store.state.companies.bmw.quantity < 0) {
        alert("cant't sell what'chu don't have!");
      }
    },
    sellGoogleStock() {
      if (this.$store.state.companies.google.quantity < this.googleQuantity) {
        return alert("cant't sell what'chu don't have!");
      }
      this.$store.state.funds +=
        this.$store.state.companies.google.price * this.googleQuantity;
      this.$store.state.companies.google.quantity -= parseInt(
        this.googleQuantity
      );
      if (this.$store.state.companies.google.quantity < 0) {
        alert("cant't sell what'chu don't have!");
      }
    },
    sellAppleStock() {
      if (this.$store.state.companies.apple.quantity < this.appleQuantity) {
        return alert("cant't sell what'chu don't have!");
      }
      this.$store.state.funds +=
        this.$store.state.companies.apple.price * this.appleQuantity;
      this.$store.state.companies.apple.quantity -= parseInt(
        this.appleQuantity
      );
    },
    sellTwitterStock() {
      if (this.$store.state.companies.twitter.quantity < this.twitterQuantity) {
        return alert("cant't sell what'chu don't have!");
      }
      this.$store.state.funds +=
        this.$store.state.companies.twitter.price * this.twitterQuantity;
      this.$store.state.companies.twitter.quantity -= parseInt(
        this.twitterQuantity
      );
      if (this.$store.state.companies.google.quantity < 0) {
        alert("cant't sell what'chu don't have!");
      }
    }
  }
};
</script>

<style scoped>
.card-header {
  background-color: rgba(0, 150, 220, 0.3);
}
.card-header span {
  font-size: 0.75rem;
}
.card-body {
  display: flex;
  justify-content: space-between;
}
</style>

