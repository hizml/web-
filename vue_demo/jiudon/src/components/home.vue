<template>
  <div id="home">
    <div id="advertise" class="advertise" v-on:touchstart="touchStart" v-on:touchmove="touchMove" v-on:touchend="touchEnd"></div>  <!--  轮播图  -->
    <div id="hot">        <!-- 菜单分类列表 -->
      <router-link v-for="(item, index) in hot" v-bind:to="{path:item.url,query:{id:item.id}}" :key="index">   <!--跳转产品列表-->
        <img alt="" v-bind:src="item.image">
        <span>{{item.name}}</span>
      </router-link>
    </div>

    <div id="list">       <!-- 主页产品列表 -->
      <router-link v-for="(item,index) in products" v-bind:to="{path: 'detail',query:{id:index}}" :key="index">    <!-- 链接到详情页 -->
        <img alt="" v-bind:src="item.image">
        <span>{{item.name}}</span>
        <span>{{item.price}}</span>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        _timer: 0,
        _step: 0,
        _ts: 0,
        left: 10,
        hot: [{   //主页产品分类列表
          'name': '',
          'url': '',
          'image': ''
        }],
        products: {   //主页产品列表
            'p001': {
              'name': '产品一',
              'price': 1000,
              'image': 'http://backstage.jiudon.com/UploadFiles/Images/Folder_20160318/f_201603182201132031.jpg',
              'detail': ['http://backstage.jiudon.com/UploadFiles/Images/Folder_20160318/f_201603182201135837.jpg', 'http://backstage.jiudon.com/UploadFiles/Images/Folder_20160318/f_201603182201134899.jpg']
            }
        }
      }
    },
    created () {},
    mounted () {
      this.init();
      this.player();
      this.getHot();
      this.getProducts()
    },
    methods: {
      getProducts: function () {
        this.$http.get('static/product.json').then(function (response) {
          this.products= response.data;
        }).catch(function (a) {
            console.log(a+'err')
        })
      },
      getHot: function () {
        this.$http.get('static/hot.json').then(function (response) {
          this.hot = response.data.hot
        }).catch(function () {})
      },
      init: function () {
        var _adv = document.getElementById('advertise')
        var _container = document.createElement('div')
        var _img = null
        var _span = null
        var _dots = document.createElement('div')
        _dots.id = 'dots'
        for (var i = 0; i < 3; i++) {
          _img = document.createElement('img')
          _img.src = require('../assets/img0' + (i + 1) + '.jpg')
          _container.appendChild(_img)
          _span = document.createElement('span')
          _dots.appendChild(_span)
        }
        _img = document.createElement('img')
        _img.src = require('../assets/img0' + 1 + '.jpg')
        _container.appendChild(_img)
        _adv.appendChild(_container)
        _adv.appendChild(_dots)
        this._step = _container.parentNode.offsetWidth / 10 // 每张图片在20ms内移动的距离，也称之为步长
      },

      /* 轮播图 */
      player: function () {
        var _me = this
        this._timer = 0 // 保存一个定时器
        var _container = document.getElementById('advertise').children[0] // 获取到保存4张图片的divHTML节点
        var _times = 0 // 记录每张图片从浏览器的可视区走过的次数，没10次停顿2000ms。
        var _index = 1 // 表示当前在可视区域的图片的索引。
        function controlDots () {
          var _dots = _container.parentNode.children[1].children
          for (var i = 0; i < _dots.length; i++) {
            _dots[i].style.backgroundColor = '#fff'
          }
          _dots[_index >= 3 ? 0 : _index].style.backgroundColor = 'red'
        }
        function start () {
          window.clearTimeout(_me._timer) // 从内存中清除定时器，回收定时器产生的垃圾。
          _container.style.left = (_container.offsetLeft - _me._step) + 'px' // 每隔20ms减少一个单位的步长 container的left
          _times++ // 记实录当前可视区图片向左的次数。
          if (_times === 10) { // 当 当前图片向左移动次数达到10次，停顿2000。
            _times = 0 // 清零，目的，保证可以正确的保存下一张图片所运动次数。
            _container.style.left = -_index * _container.parentNode.offsetWidth + 'px' // 强制归为当前容器的正确位置
            controlDots()
            _index++ // 保证index的值与图片的位置对应上。
            _me._timer = window.setTimeout(function () {
              if (_container.offsetLeft <= -_container.parentNode.offsetWidth * 3) { // 判断当前container是否到达终点
                _index = 1 // 当container恢复初始位置的时候，index也应该恢复为初始值。
                _container.style.left = '0px' // 如果到达终点我们就让他恢复到初始状态，也就是left= 0px
              }
              if (_container.offsetLeft >= 0) { // 判断当前container是否到达终点
                _index = 1 // 当container恢复初始位置的时候，index也应该恢复为初始值。
                _container.style.left = -_container.parentNode.offsetWidth * 3 + 'px' // 如果到达终点我们就让他恢复到初始状态，也就是left= 0px
              }
              start()
            }, 2000)
          } else { // 如果没有达到10次，每隔20ms循环向左移动一次。
            _me._timer = window.setTimeout(start, 20)
          }
        }
        _me._timer = window.setTimeout(start, 2000)
      },
      touchStart: function (e) {
        window.clearTimeout(this._timer)
        this._ts = e.touches[0].clientX
      },
      touchMove: function (e) {
        console.log('touch move')
      },
      touchEnd: function (e) {
        var _container = document.getElementById('advertise').children[0]
        if (e.changedTouches[0].clientX > this._ts) {
          if (this._step > 0) {
            this._step = -this._step
          }
          if (_container.offsetLeft === 0) {
            _container.style.left = -_container.parentNode.offsetWidth * 3 + 'px'
          }
          this.player()
        }
        if (e.changedTouches[0].clientX < this._ts) {
          if (this._step < 0) {
            this._step = -this._step
          }
          if (_container.offsetLeft === -_container.parentNode.offsetWidth * 3) {
            _container.style.left = '0px'
          }
          this.player()
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  #home{
    width:12.8rem; height:auto; overflow:hidden;
    float:left;
    padding-bottom: 40px
  }
  .advertise{
    width:12.8rem; height:230px; position:relative;
  }
  .advertise div{
    width:51.2rem; height: 100%;overflow:hidden; position:absolute;
    left:0px; top:0px;
  }
  .advertise img{
    width:12.8rem;
    height: 100%;
  }
  #dots{
    width:1.3rem; height:0.9rem; position:absolute; top:200px; left:50%; margin-left:-0.6rem;
  }
  #dots span{
    display:block; width:0.3rem; height:0.3rem; background-color:#fff; border-radius:50%;
    float:left; margin-left:0.1rem;
  }
  #dots span:nth-child(1){
    background-color:Red;
  }

  #hot{
    padding-top:0.39rem;
    width:12.8rem; height:2.7rem; float:left;
    display:-webkit-flex; display:flex;
    flex-flow:row nowrap;
    justify-content:flex-start;
  }
  #hot a{
    display:block; width:2.58rem; height:2.58rem;
  }
  #hot a img{
    float:left; width:1.8rem; height:1.8rem; margin-left:0.39rem;
  }
  #hot a span{
      display:block; width:2.58rem; height:0.78rem;float:left;
      font-size:0.39rem; line-height:2; color:#555;
  }
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
