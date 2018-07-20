<template>
    <div>

        <div class="row">

            <div class="col-xs-12 col-md-6">
                <div class="card">
                    <h5 class="card-header">
                        BMW
                        <span>(price: {{ bmw.price }}) </span>
                    </h5>
                    <div class="card-body">
                        <input v-model="bmwQuantity" type="number" placeholder="Quantity" min="0" />
                        <input @click="buyBmwStock" type="submit" class="btn btn-success" value="Buy">
                    </div>
                </div>
            </div>

            <div class="col-xs-12 col-md-6">
                <div class="card">
                    <h5 class="card-header">
                        Google
                        <span>(price: {{ google.price }})</span>
                    </h5>
                    <div class="card-body">
                        <input v-model="googleQuantity" type="number" placeholder="Quantity" min="0" />
                        <input @click="buyGoogleStock" type="submit" class="btn btn-success" value="Buy">
                    </div>
                </div>
            </div>

        </div>

        <div class="row">

            <div class="col-xs-12 col-md-6">
                <div class="card">
                    <h5 class="card-header">
                        Apple
                        <span>(price: {{ apple.price }})</span>
                    </h5>
                    <div class="card-body">
                        <input v-model="appleQuantity" type="number" placeholder="Quantity" min="0" />
                        <input @click="buyAppleStock" type="submit" class="btn btn-success" value="Buy">
                    </div>
                </div>
            </div>

            <div class="col-xs-12 col-md-6">
                <div class="card">
                    <h5 class="card-header">
                        Twitter
                        <span>(price: {{ twitter.price }})</span>
                    </h5>
                    <div class="card-body">
                        <input v-model="twitterQuantity" type="number" placeholder="Quantity" min="0" />
                        <input @click="buyTwitterStock" type="submit" class="btn btn-success" value="Buy">
                    </div>
                </div>
            </div>

        </div>

    </div>
</template>

<script>
export default {
  data() {
    return {
      bmwQuantity: null
    };
  },
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
    buyBmwStock() {
      this.$store.state.funds -=
        this.$store.state.companies.bmw.price * this.bmwQuantity;
      this.$store.state.companies.bmw.quantity += parseInt(this.bmwQuantity);
    },
    buyGoogleStock() {
      this.$store.state.funds -=
        this.$store.state.companies.google.price * this.googleQuantity;
      this.$store.state.companies.google.quantity += parseInt(
        this.googleQuantity
      );
    },
    buyAppleStock() {
      this.$store.state.funds -=
        this.$store.state.companies.apple.price * this.appleQuantity;
      this.$store.state.companies.apple.quantity += parseInt(
        this.appleQuantity
      );
    },
    buyTwitterStock() {
      this.$store.state.funds -=
        this.$store.state.companies.twitter.price * this.twitterQuantity;
      this.$store.state.companies.twitter.quantity += parseInt(
        this.twitterQuantity
      );
    }
  }
};
</script>


<style scoped>
.card-header {
  background-color: rgba(0, 188, 0, 0.3);
}
.card-header span {
  font-size: 0.75rem;
}
.card-body {
  display: flex;
  justify-content: space-between;
}
</style>