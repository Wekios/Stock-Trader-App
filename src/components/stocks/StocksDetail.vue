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
                        <input type="text" name="quantity" placeholder=" Quantity" />
                        <input @click="buyStock(bmw.price)" type="submit" class="btn btn-success" value="Buy">
                    </div>
                </div>
            </div>

            <div class="col-xs-12 col-md-6">
                <div class="card">
                    <h5 class="card-header">
                        Google
                        <span>(price: {{ google.price }})</span>
                    </h5>
                    <form action="#" method="post">
                        <div class="card-body">
                            <input type="text" name="quantity" placeholder=" Quantity" />
                            <input type="submit" class="btn btn-success" value="Buy">
                        </div>
                    </form>
                </div>
            </div>

        </div>

        <div class="row">

            <div class="col-xs-12 col-md-6">
                <div class="card">
                    <h5 class="card-header">
                        Apple
                        <span>(price: {{ apple }})</span>
                    </h5>
                    <form action="#" method="post">
                        <div class="card-body">
                            <input type="text" name="quantity" placeholder=" Quantity" />
                            <input type="submit" class="btn btn-success" value="Buy">
                        </div>
                    </form>
                </div>
            </div>

            <div class="col-xs-12 col-md-6">
                <div class="card">
                    <h5 class="card-header">
                        Twitter
                        <span>(price: {{ twitter }})</span>
                    </h5>
                    <form action="#" method="post">
                        <div class="card-body">
                            <input type="text" name="quantity" placeholder=" Quantity" />
                            <input type="submit" class="btn btn-success" value="Buy">
                        </div>
                    </form>
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
    }
  },
  methods: {
    buyStock(val) {
      this.$store.state.funds -= val;
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

    // bmw() {
    //   return randomize(this.$store.state.companies.bmw);
    // },
    // google() {
    //   return randomize(this.$store.state.companies.google);
    // },
    // apple() {
    //   return randomize(this.$store.state.companies.apple);
    // },
    // twitter() {
    //   return randomize(this.$store.state.companies.twitter);
    // }