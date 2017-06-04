<template>
  <div id="app">
    <!--  头部  -->
    <div id="top" class="top">
      <img alt="" v-bind:src="logo" class="logo">
      <input type="text" id="search" value="搜索：请输入关键字" v-on:focus="focus" v-on:blur="blur">
    </div>
    <!--  main区  -->
    <router-view></router-view>
    <!--  底部导航  -->
    <div id="navigator">
      <!--  导航路由  -->
      <router-link v-for="(item, index) in navigator" v-bind:to="item.path" v-bind:index="index" v-on:click.native="live" :key="index">
        <img alt="" v-bind:src="item.selected ? item.live : item.lose" >
        <span v-bind:class="item.selected ? 'nav_color' : ''">{{item.name}}</span>
      </router-link>
    </div>
  </div>
</template>

<script>
//import Home from './components/home'    //1.引入组件
export default {
  name: 'app',
  data () {
    return {
      logo: require('./assets/logo.png'),   //logo图片
      navigator: [{       //导航数据
        name: '首页',         //导航名称
        path: 'home',         //路径地址
        selected: true,   //是否选中
        lose: require('./assets/home.png'),         //未选中
        live: require('./assets/home_a.png')          //选中
      }]
    }
  },
//  components: {
//    home: Home        //2.注册组件  3.使用组件 在结构区 添加 <home></home>
//  },

  mounted () {      //钩子函数 这里可以操作DOM
    this.$http.get('../static/navigator.json').then(function (response) {     //Ajax 获取底部数据
      this.navigator = response.data.navigator;        //将获取到的数据赋值给 navigator
      for (var i = 0; i < this.navigator.length; i++) {   //循环获取到的json数据
        this.navigator[i].lose = require('' + this.navigator[i].lose);   // 未被选中图片 通过  v-for:src 获得到的地址 用require解析
        this.navigator[i].live = require('' + this.navigator[i].live);    // 被选中
      }
      var _url = window.location.hash;      //获取 BOM 浏览器地址栏 ‘#’号本身及后边内容   为 /home
      var arr=_url.split('#');              //用 / 转换为数组
        for (var i = 0; i < this.navigator.length; i++) {   //循环遍历
        this.navigator[i].selected = false        //先全部不选中
        if (arr[arr.length - 1] === this.navigator[i].path) {   //判断数组最后一个    是否和json中地址相吻合
          this.navigator[i].selected = true                     //选中状态   避免刷新后 选中状态和路由不同步问题
        }
      }
    }).catch(function () {})    //异常处理函数
  },
  methods: {    //表达式
    focus: function (e) {     //清空输入框
      if (e.target.value === '搜索：请输入关键字') {
        e.target.value = ''
      }
    },
    blur (e) {
      if (e.target.value === '') {
        e.target.value = '搜索：请输入关键字'
      }
    },
    live (e) {    //点击底部导航变颜色  e为事件触发对象  event
      var _index = e.currentTarget.getAttribute('index');   //获取自定义属性 index 的内容  为索引值
      for (var i = 0; i < this.navigator.length; i++) {
        if (i !== parseInt(_index)) {
          this.navigator[i].selected = false
        } else {
          this.navigator[_index].selected = true
        }
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
