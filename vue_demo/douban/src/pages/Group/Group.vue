<template>
  <div>
    <myNav class="group_border">
      <span slot="txt">小组</span>
      <i slot="right" class="audio_msg"></i>
      <i slot="right" class="audio_sear"></i>
    </myNav>
    <div class="group_main">
      <div class="group_tit">
        <h3>417788个有趣的小组</h3>
        <p>立即选择加入吧</p>
        <span>根据兴趣推荐</span>
      </div>
      <div class="group_groom">
        <img src="../../assets/images/ic_rec_group_banner_6.png" alt="">
      </div>
      <div class="mov">
        <h3>影视</h3>
        <div class="mov_groop">
          <div class="mov_left"><img src="../../assets/images/mov_groop_03.jpg" ></div>
          <div class="mov_right">
            <h3>绝望主妇</h3>
            <p>绝望的家庭主妇每周日晚上九点半在美国...</p>
          </div>
          <div class="mov_peo">
            <p>17290人</p>
          </div>
        </div>
        <div class="mov_groop">
          <div class="mov_left"><img src="../../assets/images/mov_groop_03.jpg" ></div>
          <div class="mov_right">
            <h3>剪刀手电影</h3>
            <p>绝望的家庭主妇每周日晚上九点半在美国...</p>
          </div>
          <div class="mov_peo">
            <p>17290人</p>
          </div>
        </div>
        <div class="mov_groop">
          <div class="mov_left"><img src="../../assets/images/mov_groop_03.jpg" ></div>
          <div class="mov_right">
            <h3>绝望主妇</h3>
            <p>绝望的家庭主妇每周日晚上九点半在美国...</p>
          </div>
          <div class="mov_peo">
            <p>17290人</p>
          </div>
        </div>
        <div class="mov_groop">
          <div class="mov_left"><img src="../../assets/images/mov_groop_03.jpg" ></div>
          <div class="mov_right">
            <h3>绝望主妇</h3>
            <p>绝望的家庭主妇每周日晚上九点半在美国...</p>
          </div>
          <div class="mov_peo">
            <p>17290人</p>
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
  .group_border{ border-bottom: 3px solid #e4e4e4;background: #fff}
  .group_border i{float: right; display: inline-block;width: 72px; height: 72px;position: absolute;}
  .group_border .audio_sear{ background: url("../../assets/images/ic_actionbar_search_icon.png") 0 0 no-repeat; right: 209px;; top:54px;}
  .group_border .audio_msg{ background: url("../../assets/images/ic_create_group_chat_blue.png") 0 0 no-repeat;right: 55px;; top:54px;}
  .group_main{margin-top: 171px;padding-bottom: 150px; width:100%}
  .group_main .group_tit{background: url("../../assets/images/ic_group_banner.png") no-repeat; height: 450px; width:100%;text-align: center; padding-top: 132px;}
  .group_main .group_tit h3{line-height: 118px; color: #494949; font-size: 50px;}
  .group_main .group_tit p{ color: #9b9b9b; font-size: 40px;}
  .group_main .group_tit span{ font-size: 30px;  color: #9b9b9b; line-height: 130px; padding-top:28px; display: block; text-align: left; padding-left: 46px;  }
  .group_main .group_groom{ padding: 30px 0 72px 0; margin: 0 44px 0; border-bottom: 3px solid #e4e4e4; }
  .group_main .group_groom img{ width: 992px}
  .group_main .mov{ padding: 0 45px; margin-top: 28px;  }
  .group_main .mov>h3{  display: block; margin: 0 auto; color: #494949; font-size: 38px; width: 258px; height: 30px; background: #fff; text-align: center; position: relative; top: -58px; }
  .group_main .mov .mov_groop{ padding: 46px 0; overflow: hidden}
  .group_main .mov .mov_groop .mov_left{float: left}
  .group_main .mov .mov_groop .mov_left img{ width: 150px;}
  .group_main .mov .mov_groop .mov_right {float: left;padding-left:32px; width: 550px; }
  .group_main .mov .mov_groop .mov_right h3{ line-height: 64px; font-size: 48px; color: #494949}
  .group_main .mov .mov_groop .mov_right p{ line-height: 40px; font-size: 28px; color: #9b9b9b; padding-top: 8px;  }
  .group_main .mov .mov_groop .mov_peo{ line-height: 150px; font-size: 24px; color: #cccccc; padding-left:20px; float: left; padding-right: 146px; background: url("../../assets/images/ic_group_check_anonymous.png") no-repeat 176px 35px}
</style>
