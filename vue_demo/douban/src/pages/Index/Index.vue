<template>
  <div>
    <myNav>
        <div class="topbar-index">
          <div class="top_txt">
            <label>
              <span class="search" slot="left"></span>
              <input class="seartxt" type="text" placeholder="影视 图片 唱片 小组 舞台剧等">
            </label>
            <span class="scan" slot="right"></span>
          </div>
          <i class="msg" slot="right"><img src="../../assets/images/ic_chat_white.png"></i>
        </div>
    </myNav>

    <div class="index_main">

      <div class="index_banner">
        <mSwipe swipeid='swipe01' :autoplay='1000' paginationDirection='right'>
          <div class="swiper-slide " slot="swiper-con"><img src="../../assets/images/banner/01.jpg" alt=""></div>
          <div class="swiper-slide " slot="swiper-con"><img src="../../assets/images/banner/02.jpg" alt=""></div>
          <div class="swiper-slide " slot="swiper-con"><img src="../../assets/images/banner/03.jpg" alt=""></div>
        </mSwipe>
      </div>
      <div class="hot_bar">
        <p>热点</p>
      </div>
      <div class="hot_main">
        <div class="left">
          <h4>我花了很长时间和“容貌焦虑症”对抗</h4>
          <p>整容不能平复心里的创口，直面自己的平凡才是真正的良药</p>
          <i>作者：中国三明治</i>
        </div>
        <div class="right">
          <img src="../../assets/images/hot_03.jpg" >
        </div>
      </div>
      <div class="hot_main">
        <div class="left">
          <h4>太史公致命基因以及《史记》到底是咋过审的</h4>
          <p>司马迁把项羽写成真英雄，而刘邦就是个地痞无赖</p>
          <i>作者：zml</i>
        </div>
        <div class="right">
          <img src="../../assets/images/sj_03.jpg" >
        </div>
      </div>
      <div class="doutime">
        <div></div>
      </div>
    </div>

  </div>
</template>
<script>
  import myNav from '../../components/header'
  import mSwipe from '../../components/swipe'

  export default{
    components:{
      myNav,
      mSwipe
    }
  }
  alert('温馨提示：因使用 1920*1080 分辨率写的网页，需在Google Chrome中 手机调试之功能下，使用Responsive选项手动设置为1080*1920来获得极佳观看体验')
</script>
<style>
.topbar .topbar-index{background: #42bd56;width: 100%; height:168px;color: #cccccc;}
.topbar .topbar-index .top_txt{position: relative;float: left }
.topbar .topbar-index .search{width:51px; height:51px;position:absolute; top: 61px; left:55px;cursor: pointer; background: url("../../assets/images/ic_search_gray.png") 0 0 no-repeat;}
.topbar .topbar-index .seartxt{width: 674px;color:#cccccc; height: 102px;line-height: 102px; border-radius: 14px; margin-top: 33px; margin-left: 22px; padding-left: 107px; padding-right: 107px;  font-size: 38px; }
.topbar .topbar-index .scan{width:51px; height:51px;background: url("../../assets/images/ic_scan_gray.png") 0 0 no-repeat;position:absolute; top: 61px; left:822px;cursor: pointer;}
.topbar .topbar-index .msg{float:right;margin-top: 40px; margin-right:55px;display: inline-block}

.index_main{margin-top: 171px;padding-bottom: 150px; width:100%}
.index_main .hot_bar{ margin-top: 35px; border-left: 10px solid #ff8447; color: #ff8447; font-size: 40px; padding-left:32px; line-height: 60px; }
.index_main .hot_main{padding: 46px 60px 0 60px; overflow: hidden;border-bottom: 3px solid #f2f1ee;}
.index_main .hot_main .left{float: left; width: 610px;}
.index_main .hot_main .left h4{font-size: 46px; color: #494949; line-height: 64px;}
.index_main .hot_main .left p{color: #9b9b9b; font-size: 34px; line-height: 56px; padding-top: 26px; padding-bottom: 42px; position: relative;max-height: 112px; overflow: hidden;text-overflow:ellipsis;}
.index_main .hot_main .left p:after{content: ''; display: block; width: 60px;height: 1px; background: #bcbcbc; position: absolute; left: 0px; bottom: 0px;}
.index_main .hot_main .left i{ height: 138px; line-height: 138px; font-size: 36px; color: #cccccc;}
.index_main .hot_main .right{float: right;}
.index_main .hot_main .right img{ width: 270px;}
</style>
