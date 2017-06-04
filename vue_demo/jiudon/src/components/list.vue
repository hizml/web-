<template>
  <div id="list">
    <router-link v-for="(item, index) in products" v-bind:to="{path: 'detail',query:{id:index}}" :key="index">
      <img alt="" v-bind:src="item.image">
      <span>{{item.name}}</span>
      <span>{{item.price}}</span>
    </router-link>
  </div>
</template>
<style>
#list{
    width:12.8rem; float:left;
  }
  #list a{
    display:block; width:6.4rem; height:8.2rem; overflow:hidden; float:left;
  }
  #list a img{
    width:6.4rem;float:left; height:6.4rem;
  }
  #list a span{
    display:block; width:6.4rem; height:0.78rem; font-size:0.39rem; line-height:2; text-align:center;
    color:#555; float:left;
  }
</style>
<script type="text/javascript">
  export default {
    data () {
      return {
        products: {
          'p001': {
            'name': '产品一',
            'price': 1000,
            'image': 'http://backstage.jiudon.com/UploadFiles/Images/Folder_20160318/f_201603182201132031.jpg',
            'detail': ['http://backstage.jiudon.com/UploadFiles/Images/Folder_20160318/f_201603182201135837.jpg', 'http://backstage.jiudon.com/UploadFiles/Images/Folder_20160318/f_201603182201134899.jpg']
          }
        }
      }
    },
    mounted () {
      var _identify = this.$route.query.id
      console.log(_identify)
      this.$http.get('static/product.json').then(function (response) {
        var _products = {}
        for (var key in response.data) {
          if (_identify + '' === response.data[key]['categoryID']) {
            _products[key] = response.data[key]
          }
        }
        this.products = _products
      }).catch(() => {})
    }
  }
</script>
