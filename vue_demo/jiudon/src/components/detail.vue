<template>
  <div id="detail">
    <span>{{name}}</span>
    <img v-bind:src="image">
    <span>{{price}}</span>
    <img alt="" v-for="item in detail" v-bind:src="item">
  </div>
</template>
<script type="text/javascript">
  export default {
    data () {
      return {
        name: '',
        image: '',
        price: '',
        detail: []
      }
    },
    mounted () {
      var _identify = this.$route.query.id
      this.$http.get('static/product.json').then(function (response) {
        for (var key in response.data) {
          if (_identify === key) {
            this.name = response.data[key].name
            this.image = response.data[key].image
            this.price = response.data[key].price
            this.detail = response.data[key].detail
          }
        }
      }).catch(function () {})
    }
  }
</script>
