<template>
  <div>
    <myNav class="audio_border">
        <span slot="txt">书影音</span>
        <i slot="right" class="audio_msg"></i>
        <i slot="right" class="audio_sear"></i>
    </myNav>
    <div class="audio_main">
      <img src="../../assets/images/book_03.jpg" >
    </div>
  </div>
</template>
<script>
  import myNav from '../../components/header'
  export default{
      components:{
        myNav
      }
  }
</script>
<style>
 .audio_border{ border-bottom: 3px solid #e4e4e4; background: #fff}
 .audio_border i{float: right; display: inline-block;width: 72px; height: 72px;position: absolute;}
 .audio_border .audio_sear{ background: url("../../assets/images/ic_actionbar_search_icon.png") 0 0 no-repeat; right: 209px;; top:54px;}
 .audio_border .audio_msg{ background: url("../../assets/images/ic_create_group_chat_blue.png") 0 0 no-repeat;right: 55px;; top:54px;}
 .audio_main{margin-top: 171px;padding-bottom: 150px; width:100%;}
</style>
