window.onload=function(){
/*banner js*/
var aDiv=document.getElementsByClassName("banner")  //获取大div

lblb(aDiv[0],3000);

function lblb(aDiv,mytime){
	var oUl=aDiv.getElementsByTagName("ul")			//获取两个ul
	var aImg=oUl[0].getElementsByTagName("li")		//获取第一个ul的li 即图片
	var aNum=oUl[1].getElementsByTagName("li")		//获取第二个ul的li 即按钮
	for(var i=0;i<aNum.length;i++){					//遍历按钮
		aNum[i].index=i;							//将i运行过的值存储到 每个的.index索引里
		aNum[i].onclick=function(){
			n=this.index;
			set(this.index)
		}
	}
	var timer=setInterval(fn,mytime) 		//定时器
	var n=0;
	function fn(){
		n++;								//重复
		if(n==aNum.length){
			n=0;
		}
		set(n)
	}
	aDiv.onmouseover=function(){
		clearInterval(timer)
	}
	aDiv.onmouseout=function(){
		clearInterval(timer)
		timer=setInterval(fn,mytime)
	}
	function set(no){							//封装函数 上边调用
		for(var k=0;k<aNum.length;k++){		//让所有按钮白色图片隐藏
			aNum[k].className="";			//	按钮颜色重置
			aImg[k].className="";			//  图片重置
		}	
			aNum[no].className="active";		//让当前图片显示按钮变色
			aImg[no].className="active";	
	}
}

/******楼层选项卡******/
(function(){
	var aFloor=document.getElementsByClassName('tab');
	for(var i=0; i<aFloor.length+1;i++){
		(function(k){
			function ttab(list,cont){
				list.children('li').click(function(){
					$(this).addClass('active').siblings().removeClass('active');
					$(this).last().parent().css('border-right','1px solid #ededed');
					
					cont.children('div').eq($(this).index()).removeClass('none').siblings().addClass('none');
				});
				list.children('li').last().click(function(){
					list.children('li').last().parent().css('border-right','none');
				});
			}
			ttab($('#nav'+k),$('#cont'+k))
		})(i)
	};
})();

/*****楼层导航*****/
(function(){
	var LocationFloorList=document.getElementsByClassName('jd_e')[0];
	
	var aLi=LocationFloorList.getElementsByTagName('li');
	
	var aFloor=document.getElementsByClassName('tab');
	
	var arr=[];
		
	//-------------------------------------------------
		
	for(var i=0; i<aFloor.length; i++){
		var json={};
		json.name=i;
		json.offsetTop=aFloor[i].offsetTop;
		arr.push(json);
	};
	
	//console.log(arr)
	var tab_top=$('.tab').first().offset().top
	window.onscroll=function(){
		//显示楼层编号-------------------------------------------------
		var scrolltop=document.documentElement.scrollTop || document.body.scrollTop;
		
		if(scrolltop>tab_top-30){
			LocationFloorList.style.display='block';
		}else{
			LocationFloorList.style.display='none';
		};
		
		// 根据楼层滚动位置，定位编号------------------------------------------------
		var last_arr=[];
		for(var j=0; j<arr.length; j++){
			if(arr[j].offsetTop<scrolltop+400){//400为接近屏幕的敏感区
				last_arr.push(arr[j].name);
			}
		};
		
		//console.log(last_arr)
		var li_index=last_arr[last_arr.length-1];

		for(var l=0; l<aFloor.length; l++){
			aLi[l].className='';
		};
		//页面上部如果有内容，没有楼层会放入新数组，产生错误
		last_arr.length==0 ?aLi[0].className='ac':aLi[li_index].className='ac';
	};
	
	//点击编号，跳转到相对楼层-----------------------------------------------
	for(var i=0; i<aFloor.length; i++){
		aLi[i].index=i;
		aLi[i].onclick=function(){
			var start=document.documentElement.scrollTop || document.body.scrollTop;
			var end=arr[this.index].offsetTop;
			move(start,end)
		}
	};
	//move-------------------------------------------------------
	var timer;
	function move(start,end){
		var dis=end-start;
		var count=parseInt(1500/30);
		var n=0;
		clearInterval(timer);
		timer=setInterval(function(){
			n++;
			var a=1-n/count;
			var step_dis=start+dis*(1-a*a*a*a);
			window.scrollTo(0,step_dis);
			//document.body.scrollTop=step_dis;
			if(n==count){
				clearInterval(timer);
			};
		},30)
	};
})();

//---upupup------

(function(){
	$('#upup').click(function(){
		var sc=$(window).scrollTop();
		$('body,html').animate({scrollTop:0},500);
	})		
})()

/*icon鼠标滑过效果*/
var timeer=null;	
$('.icon .over-icon').mouseenter(function(){
	var _this=$(this);
	clearTimeout(timeer);
	timeer=setTimeout(fn,50);
	function fn(){	
		//$('.icon .over-icon').addClass('totop');
		$('.icon .over-icon').animate({'top':-40},150);
		$('.iframe-recharge').show().animate({'top':30},150);

		_this.parent($('.icon .over-topred')).css({'border-top':'2px solid #e01121'} ).siblings().css({'border-top':'2px solid #fff'});

		$(this).children('span').addClass('acti');
		$(this).parent().siblings().children().children('span').removeClass('acti');
	};
	//------------------------------------------------------
	$('.iframe-recharge').children('div').eq(_this.parent().index()).show().siblings().not('span').hide();
	//------------------------------------------------------
	//$(this).index()指向的是相对于他父级的自己的索引值
});
$('.icon .over-icon').mouseleave(function(){
	clearTimeout(timeer)
})
$('.iframe-recharge').children('span').click(function(){
	$('.iframe-recharge').children('span').parent().hide();
	$('.icon .over-icon').animate({'top':0},150);
	$('.icon .over-topred').css({'border-top':'none'});
	$('.icon .over-icon span').removeClass('acti');
	clearTimeout(timeer);
	//$('.icon .over-icon').unbind('mouseenter');
})

};