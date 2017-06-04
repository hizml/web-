<template>
  <div>
    <myNav class="mine_border">
      <span slot="txt">我的</span>
      <i slot="right" class="audio_msg"></i>
    </myNav>
    <div class="mine_main">
      <div class="mine_login">
        <i><img src="../../assets/images/ic_share_default_user.png" ></i>
        <button class="btn">登录/注册</button>
      </div>

      <div class="remind">
        <div class="remindme">
          <a href="javascript:;"><span>提醒</span><i>></i></a>
        </div>
        <div class="remindmsg">
          <p>暂无新提醒</p>
        </div>
      </div>
      <table class="mine_tab">
        <tr v-for="item in urla">
          <td>
            <img :src="item.imgurl" >
            <p>{{ item.txt }}</p>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
  import myNav from '../../components/header'
  export default{
    components:{
      myNav
    },
    data(){
      return {
        urla:[
          {'imgurl':require("../../assets/images/ic_my_likes.png"),'txt':'喜欢'},
          {'imgurl':require("../../assets/images/ic_my_note.png"),'txt':'日记'},
          {'imgurl':require("../../assets/images/ic_my_album.png"),'txt':'相册'},
          {'imgurl':require("../../assets/images/ic_my_status.png"),'txt':'我的广播'},
          {'imgurl':require("../../assets/images/ic_my_movies_tvs.png"),'txt':'电影·电视'},
          {'imgurl':require("../../assets/images/ic_my_books.png"),'txt':'读书'},
          {'imgurl':require("../../assets/images/ic_my_music.png"),'txt':'音乐'},
          {'imgurl':require("../../assets/images/ic_my_events.png"),'txt':'同城活动'},
          {'imgurl':require("../../assets/images/my_doutime_03.jpg"),'txt':'豆瓣时间'},
          {'imgurl':require("../../assets/images/ic_my_doulist.png"),'txt':'豆列'},
          {'imgurl':require("../../assets/images/ic_my_orders.png"),'txt':'订单'},
          {'imgurl':require("../../assets/images/ic_my_wallet.png"),'txt':'钱包'}
        ]
      }
    },
    methods:{

    }
  }
</script>
<style>
  .mine_border{ border-bottom: 3px solid #e4e4e4;background: #fff}
  .mine_border i{float: right; display: inline-block;width: 72px; height: 72px;position: absolute;}
  .mine_border .audio_msg{ background: url("../../assets/images/ic_settings.png") 0 0 no-repeat;right: 55px;; top:54px;;}
  .mine_main{ background-color: #f2f1ee; margin-top: 171px;padding-bottom: 150px;}
  .mine_main .mine_login{ width: 100%; height: 375px; background: url("../../assets/images/denglu.jpg") 0 0 ;margin-bottom: 45px;}
  .mine_main .mine_login i{margin: 82px 60px;float: left; }
  .mine_main .mine_login i img{width:199px;display:inline-block; border: 5px solid #fff;float: left; border-radius: 50%; }
  .mine_main .mine_login .btn{ width: 510px; height: 120px; line-height: 120px; margin: 127px 90px;  border: 3px solid #fff; border-radius: 8px; background: none; font-size: 40px; color: #fff; }
  .mine_main .remind{ width: 100%; background-color: #fff; margin-bottom: 45px;  }
  .mine_main .remind .remindme{margin-left: 42px; border-bottom: 2px solid #e4e4e4; background: url("../../assets/images/ic_mine_notification.png") no-repeat 0px 40px; height: 156px; line-height: 156px;}
  .mine_main .remind .remindme a{display: block;  font-size: 40px; margin-left: 105px; }
  .mine_main .remind .remindme a span{color: #494949; font-weight: 300;letter-spacing: 5px; float: left}
  .mine_main .remind .remindme a i{float: right; color: #d7d7d7; font-family: simsun; font-weight: 800; margin-right: 50px;}
  .mine_main .remind .remindmsg{margin-left: 42px; min-height: 116px; line-height: 116px; text-align: center; font-size: 30px; color: #cdcdcd;}
  .mine_main .mine_tab{ background-color:#fff; margin-bottom: 45px; width:100% }
  .mine_main .mine_tab tr{ float: left;width: 25%; text-align: center; border-bottom: 2px solid #e4e4e4;}
  .mine_main .mine_tab td{display: inline-block; font-size: 35px; padding: 72px 0 40px;;}
  .mine_main .mine_tab td img{display: block; margin: 0 auto; width: 90px; height: 90px;}
  .mine_main .mine_tab td p{line-height: 115px;}
</style>
