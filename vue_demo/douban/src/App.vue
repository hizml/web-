<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view></router-view>
    <Tabbar v-model="selected" :val="selected">
      <Item mark="index">
        <img slot="active_icon" src="./assets/images/ic_tab_home_active.png" alt="">
        <img slot="normal_icon" src="./assets/images/ic_tab_home_normal.png" alt="">
        <p slot="txt" class="txt">首页</p>
      </Item>
      <Item mark="audiobook">
        <img slot="active_icon" src="./assets/images/ic_tab_subject_active.png" alt="">
        <img slot="normal_icon" src="./assets/images/ic_tab_subject_normal.png" alt="">
        <p slot="txt" class="txt">书影音</p>
      </Item>
      <Item mark="broadcast">
        <img slot="active_icon" src="./assets/images/ic_tab_group_active.png" alt="">
        <img slot="normal_icon" src="./assets/images/ic_tab_group_normal.png" alt="">
        <p slot="txt" class="txt">广播</p>
      </Item>
      <Item mark="group">
        <img slot="active_icon" src="./assets/images/ic_tab_status_active.png" alt="">
        <img slot="normal_icon" src="./assets/images/ic_tab_status_normal.png" alt="">
        <p slot="txt" class="txt">小组</p>
      </Item>
      <Item mark="mine">
        <img slot="active_icon" src="./assets/images/ic_tab_profile_active.png" alt="">
        <img slot="normal_icon" src="./assets/images/ic_tab_profile_normal.png" alt="">
        <p slot="txt" class="txt">我的</p>
      </Item>
    </Tabbar>
  </div>
</template>

<script>
import Tabbar from './components/tabbar'
import Item from './components/tabbar_item'
export default {
  name: 'app',
  components:{
    Tabbar,
    Item
  },
  data(){
    return {
      selected:''
    }
  },
  created(){
    var str=window.location.hash;
    var arr=str.split('/');
    if(arr[1]==''){
      this.selected='index';
    }else {
      this.selected=arr[1];
    }
  }
}
</script>

<style>
[v-cloak] {display: none}
body, ul, ol, li, dl, dd, h1, h2, h3, h4, h5, h6, p, textarea, input ,button,i,s{ margin: 0; padding: 0; }
li { list-style: none; }
a,s{ text-decoration: none;color: #666; }
.aa{ text-decoration:underline; color:#5e69ad;white-space: nowrap}
s,b{ text-decoration: none; }
input, img,button  { border: none; }
input, button { outline: none;}
i,em{ font-style: normal; }
textarea{ border:none; resize:none; outline:none;}
body { font: 12px/1.5 Microsoft YaHei, tahoma, arial, Hiragino Sans GB, \\5b8b\4f53, sans-serif; color: #999; background-color: #FFFFFF; -webkit-font-smoothing: antialiased;}
.inner { width: 1210px; margin: 0 auto; }
.none{ display:none}
.left{ float: left;}
@font-face {
  font-family: "Microsoft YaHei", "宋体", "Segoe UI", "Lucida Grande", Helvetica, Arial, sans-serif, FreeSans, Arimo;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
