<template>
    <div class="col-xs-12 col-md-6">
        <div class="card">
            <h5 class="card-header">
                BMW
                <span>(price: DATA | Quantity: {{ bmw.quantity }} )</span>
            </h5>
            <form action="#" method="post">
                <div class="card-body">
                    <input type="text" name="quantity" placeholder=" Quantity" />
                    <input type="submit" class="btn btn-danger" value="Sell">
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
  computed: {
    bmw() {
      return this.$store.state.companies.bmw;
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

