/**
 * Created by zml on 2017/4/13.
 */
$(function(){
	var kf_text=document.getElementById('kf-text')
	showCenter(kf_text);
	
    var socket=io();
    var $mess=$('#mess');
    $('#area').keydown(function (event) {
        if (event.keyCode == 13) {  // 如果是按下的Enter键
            //模拟点击send按钮，触发上面的 Click 事件
            event.cancelBubble=true;    //阻止回车换行
            event.preventDefault();
            event.stopPropagation();
            $("#btn").click();
        }
    });

    $('#btn').click(function(){     //输入内容点击发送
        var $areaVal=$('#area').val();
        $areaVal=$.trim($areaVal);
        if($areaVal==''){
            return false
        }
        trouble($areaVal);
        $('#area').val('');
        soll(200);             //点击发送调用滚动条
    });
    setTimeout(function(){      //点击菜单项发送
        $('.left .main').click(function(){
            var $aTeat=$(this).text();
            trouble($aTeat);
            soll(200);             //点击菜单项调用滚动条
        });
    },1100);

    function soll(ttim){    //滚动条居下
        setTimeout(function(){
            var cMessH=$(".mess").height();
            var iMessH=$("#mess").height();
            var h = cMessH-iMessH;
            h=Math.abs(h);
            $('.mess').scrollTop(h);
        },ttim);
    }
    socket.on('message',function(data){     //监听回复
        var keyZ=data.types;
        if(keyZ=='welcome'){
            welcometext(socket,data);
        }
        if(keyZ=='main'){
            mainText(data);
        }
        if(keyZ=='issue'||keyZ=='err'){
            issue(data);
        }
    });
    function welcometext(socket,data){     //放置欢迎信息
        var html='';
        var htmlImg='';
        var timee = new Date().Format("yyyy年MM月dd hh:mm:ss");
        html+='<p class="chat">没有聊天记录了</p>';
        html+='<p class="time"><span><time>'+timee+'</time></span></p>';
        html+='<p class="bject">京东客服</p>';
        html += '<p class="l-p"><span class="left"><i></i>'+socket.id+':'+ data.connect.con+ '</span></p>';
        htmlImg += '<p class="l-p"><span class="left"><i></i><img src="images/'+data.connect.imgsrc+'"></span></p>';
        $mess.append(html);
        $mess.append(htmlImg);
    }
    function mainText(data){        //菜单功能
        var html="";
        for(var i=0;i<data.connect.con.length;i++){
            html += '<a href="javascript:;" class="main">'+data.connect.con[i]+ '</a><br>';
        }
        var $span=$('<span class="left"><i></i><span class="list">请选择您要咨询的业务</span><br></span>').append(html);
        var $p=$('<p class="l-p">').append($span);
        $mess.append($p);
    }
    function issue(data){   //问答
        var html='';
        var answer=data.connect;
        soll(1);          //传回来时调用滚动
        var timee = new Date().Format("yyyy年MM月dd hh:mm:ss");
        html+='<p class="time"><span><time>'+timee+'</time></span></p>';
        html += '<p class="l-p"><span class="left"><i></i>'+answer+ '</span></p>';
        $mess.append(html);
    }
    function trouble(text){    //点击传问题
        var html='';
        socket.send({
            types:'you',
            connect:text
        });
        var timee = new Date().Format("yyyy年MM月dd hh:mm:ss");
        html +='<p class="time"><span><time>'+timee+'</time></span></p>';
        html+='<p class="me">我</p>';
        html += '<p class="r-p"><span class="right"><i></i>'+text+ '</span></p>';
        setTimeout(function(){
            $mess.append(html);
        },200);
    }
    Date.prototype.Format = function (fmt) { //author: meizz       格式化时间
        var o = {
            "M+": this.getMonth() + 1, //月份
            "d+": this.getDate(), //日
            "h+": this.getHours(), //小时
            "m+": this.getMinutes(), //分
            "s+": this.getSeconds(), //秒
            "q+": Math.floor((this.getMonth() + 3) / 3), //季度
            "S": this.getMilliseconds() //毫秒
        };
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    }

});