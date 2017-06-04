<template>
  <div>
    <myNav class="broadcast_border">
      <span slot="txt">推荐广播</span>
      <i slot="right" class="audio_msg"></i>
      <i slot="right" class="audio_sear"></i>
    </myNav>
    <div class="radio_main">

      <div class="radio_tit">
        <h1>发现有趣的人</h1>
        <p>关注他们，发现更大的世界</p>
      </div>

      <div class="radio_module">
        <div class="radio-left_pic">
          <img src="../../assets/images/avatar_male_70.png" >
        </div>
        <p class="del">×</p>
        <div class="radio-right_msg">
          <div class="radio-r-m-top">
            <div class="radio-r-m-top-l">
              <h3>小明</h3>
              <p>9999人关注</p>
            </div>
            <button type="button">关注</button>
          </div>
          <div class="radio-r-m-bot-msg">
            <p>一二删啊说得来飞机了卡收费</p>
            <img  src="../../assets/images/radio-pic_09.jpg" >
          </div>
          <div class="dc">
            <i class="dc_d">66</i>
            <i class="dc_c">66</i>
          </div>
        </div>
      </div>
      <div class="radio_module">
        <div class="radio-left_pic">
          <img src="../../assets/images/avatar_male_70.png" >
        </div>
        <p class="del">×</p>
        <div class="radio-right_msg">
          <div class="radio-r-m-top">
            <div class="radio-r-m-top-l">
              <h3>小明</h3>
              <p>9999人关注</p>
            </div>
            <button type="button">关注</button>
          </div>
          <div class="radio-r-m-bot-msg">
            <p>一二删啊说得来飞机了卡收费</p>
            <img  src="../../assets/images/radio-pic_09.jpg" >
          </div>
          <div class="dc">
            <i class="dc_d">66</i>
            <i class="dc_c">66</i>
          </div>
        </div>
      </div>
      <div class="radio_module">
        <div class="radio-left_pic">
          <img src="../../assets/images/avatar_male_70.png" >
        </div>
        <p class="del">×</p>
        <div class="radio-right_msg">
          <div class="radio-r-m-top">
            <div class="radio-r-m-top-l">
              <h3>小明</h3>
              <p>9999人关注</p>
            </div>
            <button type="button">关注</button>
          </div>
          <div class="radio-r-m-bot-msg">
            <p>一二删啊说得来飞机了卡收费</p>
            <img  src="../../assets/images/radio-pic_09.jpg" >
          </div>
          <div class="dc">
            <i class="dc_d">66</i>
            <i class="dc_c">66</i>
          </div>
        </div>
      </div>
      <div class="radio_module">
        <div class="radio-left_pic">
          <img src="../../assets/images/avatar_male_70.png" >
        </div>
        <p class="del">×</p>
        <div class="radio-right_msg">
          <div class="radio-r-m-top">
            <div class="radio-r-m-top-l">
              <h3>小明</h3>
              <p>9999人关注</p>
            </div>
            <button type="button">关注</button>
          </div>
          <div class="radio-r-m-bot-msg">
            <p>一二删啊说得来飞机了卡收费</p>
            <img  src="../../assets/images/radio-pic_09.jpg" >
          </div>
          <div class="dc">
            <i class="dc_d">66</i>
            <i class="dc_c">66</i>
          </div>
        </div>
      </div>

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
  .broadcast_border{ border-bottom: 3px solid #e4e4e4;background: #fff}
  .broadcast_border i{float: right; display: inline-block;width: 72px; height: 72px;position: absolute;}
  .broadcast_border .audio_sear{ background: url("../../assets/images/ic_status_search_user.png") 0 0 no-repeat;width: 88px; height: 80px; right: 209px;; top:49px;}
  .broadcast_border .audio_msg{ background: url("../../assets/images/ic_create_group_chat_blue.png") 0 0 no-repeat;right: 55px;; top:54px;}
  .radio_main{position:relative;margin-top: 171px;padding-bottom: 150px; width:100%; padding-top: 330px;  background: url("../../assets/images/radioicon_04.jpg") no-repeat 142px 64px #f2f1ee; }
  .radio_main .radio_tit{ position: absolute;left: 480px; top: 102px;}
  .radio_main .radio_tit h1{ font-size: 46px; color: #494949; line-height: 85px;}
  .radio_main .radio_tit p{ font-size: 36px; color: #9b9b9b; line-height: 74px;}

  .radio_main .radio_module{background: #fff; margin: 48px 36px 0; border-radius: 10px; box-shadow: 0px 0px 40px 0px rgba(0,0,0,.3); overflow: hidden ;position: relative}
  .radio_main .radio_module  .del{position: absolute;top: 35px; right: 35px; font-size: 60px; line-height: 28px; color: #cccccc;display: block; width: 28px; height: 28px;}
  .radio_main .radio_module .radio-left_pic{float: left; margin: 84px 36px 0; }
  .radio_main .radio_module .radio-right_msg{ float: left;  margin-top: 92px; }
  .radio_main .radio_module .radio-right_msg .radio-r-m-top{overflow: hidden}

  .radio_main .radio_module .radio-right_msg .radio-r-m-top .radio-r-m-top-l{float: left}
  .radio_main .radio_module .radio-right_msg .radio-r-m-top .radio-r-m-top-l h3{ font-size: 48px; color: #4a4a4a; line-height: 74px;}
  .radio_main .radio_module .radio-right_msg .radio-r-m-top .radio-r-m-top-l p{ font-size: 24px; color: #9b9b9b; line-height: 54px;}
  .radio_main .radio_module .radio-right_msg .radio-r-m-top button{float: right; width: 174px; height: 78px; background: #42bd56; border-radius: 8px; line-height: 78px; font-size: 34px; color: #fff; margin-top: 10px;}
  .radio_main .radio_module .radio-right_msg .radio-r-m-bot-msg{ padding-top: 15px; }
  .radio_main .radio_module .radio-right_msg .radio-r-m-bot-msg p{ line-height: 55px; font-size: 34px; color: #49495e; padding-bottom: 27px;}
  .radio_main .radio_module .radio-right_msg .radio-r-m-bot-msg img{width:712px; height:387px}
  .radio_main .radio_module .radio-right_msg .dc{ display: inline-block; height: 126px; line-height:126px;clear: both;color: #cccccc; font-size: 24px; }
  .radio_main .radio_module .radio-right_msg .dc .dc_d{display: inline-block; height: 36px;line-height:50px;  padding-left:42px; margin-right: 40px; background: url("../../assets/images/ic_like_full.png") no-repeat 0px 0px; }
  .radio_main .radio_module .radio-right_msg .dc .dc_c{display: inline-block;height: 36px;line-height:46px; padding-left:42px;margin-right: 40px; background: url("../../assets/images/ic_comment_full.png") no-repeat 0px 0px; }
</style>
