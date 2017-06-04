// JavaScript Document
window.onload=function(){
var oLi1=$('#shopping .tabCont li');
var oLi2=$('#shopping .tabin li');	
var oLi3=$('#zoom li')	
var time; 												//找对象，左边选项卡结束 oLi1为上部图片，oLi2为下选项图
//=====================================================
var oDiv=document.getElementById("shopping");
var oEm=document.getElementById("em");
var oEmtxt=oEm.innerHTML;//获取价格区默认字符 独立开关时用到
var oDtn=document.getElementById("btn");
var oColor=document.getElementById('color');
var oCorbtn=oColor.getElementsByTagName('button');

var b0=document.getElementById('edition0');
var but0=b0.getElementsByTagName('button');

var b1=document.getElementById('edition1');
var but1=b1.getElementsByTagName('button');

var b2=document.getElementById('edition2');
var but2=b2.getElementsByTagName('button');


var oNum=document.getElementById('num');
var oInput=oNum.getElementsByTagName("input")[0];
var numadd=oNum.getElementsByTagName("button")[0];
var numsub=oNum.getElementsByTagName("button")[1];
//var arr=[1,2,3,4,5,5,5,5,55,65,654]
//右侧
//=====================================================
													
for(var i=0;i<oLi2.length;i++){					//循环遍历绑定鼠标over事件
	oLi2[i].index=i;	//发牌照，存储i值到index
	oLi2[i].onmousemove=function(){			
		var _this=this;					//将over之后的this存起来 避免定时器开启后this指向改变为window
		clearInterval(time);	//清除定时器
		time=setTimeout(function(){	//开启延时定时器 用户体验 不会因为快速滑过而迅速改变图片 选型时舒服
			for(var j=0;j<oLi2.length;j++){			//循环重置样式
				oLi2[j].className="";
				oLi1[j].style.display='none';
				oLi3[j].style.display='none';
			};
			oLi2[_this.index].className='ac';//鼠标悬停时显示样式
			oLi1[_this.index].style.display='block';
			oLi3[_this.index].style.display='block';
		},200);
	};
	oLi2[i].onmouseout=function(){
		clearInterval(time);
	};
};
 $('#tabCont').mousemove(function(ev){	//鼠标移动事件
	$('#Magnifier').addClass('Magnifier');	//鼠标进入 给放大镜一个class 让他显示
	$('#zoom').show();	//让右边放大区域显示
	var l=ev.pageX-$(this).offset().left-$('#Magnifier').width()/2;	
	//鼠标在放大镜中间 计算为鼠标所在x轴减去 它所在父级距左边距离再减去放大镜一半距离  y轴同理
	//var t=ev.clientY-$(this).offset().top+$(window).scrollTop()-$('#Magnifier').height()/2;
	var t=ev.pageY-$(this).offset().top-$('#Magnifier').height()/2;
	if(l<0){	//限制左边范围  如果鼠标的值为负数 说明在外边  就让他等于零
		l=0
	};
	if(t<0){	//top同上
		t=0
	};
	
	var l_max=$(this).width()-$('#Magnifier').width();	//限制放大镜右边范围 小图区域减去放大镜区域
	var t_max=$(this).height()-$('#Magnifier').height();//限制下范围  同上
	if(l>l_max){	//如果 鼠标值大于右边距 说明出来了 让鼠标的值等于最大的范围值
		l=l_max;
	};
	if(t>t_max){	//同上
		t=t_max;
	};
	$('#Magnifier').css({'left':l,'top':t-1});	//把放大镜的left top值赋给他
	var ll=($('#zoom li').width()-$('#zoom').width())*(l/l_max);
			//右边图片的left值为 右图的宽 减去显示区的宽 为实际移动宽  再乘以 （ 计算好的鼠标 y轴距离图片左边值/实际放大镜运动值 即为倍数）
	var tt=($('#zoom li').height()-$('#zoom').height())*(t/t_max);
			// top值同上  即为 右边图片有效移动距离乘以倍数  （ 鼠标移动距离比上放大镜实际移动距离）
	$('#zoom li').css({'left':-ll,'top':-tt})	;	//负值
});
$('#tabCont').mouseout(function(){		//鼠标移出删除
	$('#Magnifier').removeClass('Magnifier');
	$('#zoom').hide();

});
(function(){
	var r=0
	$('#sprite-arrow-next').click(function(){
		r++;
		if(r>$('#tabmove li').size()-5){r=$('#tabmove li').size()-5}
		$('#tabmove').animate({'left':-r*76},300)
	});
	$('#sprite-arrow-prev').click(function(){
		r--;
		if(r<=0){r=0}
		$('#tabmove').animate({'left':-r*76},300)
	});
})()
													//选项卡效果结束
//=====================================================
												//选型开始
function oofon(obj){
	for(var k=0;k<obj.length;k++){
		obj[k].index=k;					//发牌照
		obj[k].numm=true;					//独立开关定义
		obj[k].onclick=function(){		//循环绑定点击事件
			if(this.numm){				//判断开关 
				for(var l=0;l<obj.length;l++){
					obj[l].style.borderColor="#ccc";//清空类型边框
					obj[l].numm=true;			//将开关清空 变为默认 和清边框同理
				};

				this.style.borderColor="#e3393c";	//类型边框变色
				//oEm.innerHTML=(obj[this.index]=arr[this.index]);//输出相同下标所代表的内容
				//oLi1[(this.index)+1].style.display="block";		//显示pic+1个图片(pic比选框多1)
				
				//this.numm=false;		//执行后变换开关
			}else{
				for(var l=0;l<obj.length;l++){
					obj[l].style.borderColor="";//清空类型边框
					obj[l].numm=true;
				};
				oEm.innerHTML=oEmtxt;		//恢复价格区默认字符
				for(var m=0;m<oLi2.length;m++){	
					oLi1[m].style.display="none";	//先隐藏所有图片
				};
				oLi1[0].style.display="block";		//显示oLi[0]既默认图
				
				//this.numm=true;		//执行后变换开关
			}
		};
	};
};

oofon(oCorbtn);
oofon(but0);
oofon(but1);
oofon(but2);

//==============================================================
							//加减数量
var n=oInput.value;
numadd.onclick=function(){
	if(n>=5){
		n=5;
		oInput.value=n;
		aler("库存不足");
		return;
	}else{
		n++;
		oInput.value=n;
	};
};
numsub.onclick=function(){
	if(n<=1){
		n=1;
		oInput.value=n;
		numsub.style.cursor='no-drop';
		numsub.style.color='#ccc'
		return;
	}else{
		n--
		oInput.value=n;
	};
};
oInput.onblur=function(){
	if(oInput.value>=5){
		aler("库存不足");
		oInput.value=n=5;
		
		return;
	};
	if(oInput.value<1){
		oInput.value=n=1;
	};
};

//shopcar==============================================

var shopCar=document.getElementById("shopcar");
		shopCar.onclick=function(){
			var text=oEm.innerHTML
			aler("添加成功");
		};

//reco====================================================

(function(){
	var d=0; 
	$('#prev').click(function(){
		d--;
		if(d<=1){d=0}
		$('#ppic ul').animate({left:d*'-1092'},300);
		$('#title-2 b').html(d+1);
	});
	$('#next').click(function(){
		d++
		if(d>1){d=1}
		$('#ppic ul').animate({left:d*'-1092'},300)
		$('#title-2 b').html(d+1);
	});
})();


/*切换选项卡*/
(function(){
	$('#shoptabList li').click(function(){
		$(this).addClass('act').siblings().removeClass('act');
		$('#shoptabCont').children('div').eq($(this).index()).show().siblings().hide();//他下边的子级元素div 只限定与子级 与子级下级元素无关
	})
})();

//选项卡内购物车
$('#list-shopcar').mouseover(function(){
	$('#list-shopcar-OK').animate(300).show()
	$('#list-shopcar-OK span i').html(n);
});
$('#list-shopcar').mouseout(function(){
	$('#list-shopcar-OK').animate(300).hide()
});
$('#list-shopcar').click(function(){
	aler("添加成功")
});



//选项卡 固定定位
(function(){
	var oldlist_t=$('#shoptabList').offset().top;
	window.onscroll = function(){
		var list=$(window).scrollTop()
		var list_t=$('#shoptabList').offset().top;
		if(list_t<list){
			$('#shoptabList').addClass('fixed');
		}else if(oldlist_t>list){
			$('#shoptabList').removeClass('fixed')
		};
	};
})();

//map 选项卡
(function(){
	var str=[];
	$('#map').mouseover(function(){
		$('#save').show();
		$('#map .map-border i').addClass('ac');
		$('#map-tablist li').click(function(){
			var txt=$('#map-tabcont').children('div').eq($(this).index());
			$(this).addClass('acti').siblings().removeClass('acti');
			txt.show().siblings().hide();//他下边的子级元素div 只限定与子级 与子级下级元素无关
			
		});
	//点击给地址功能未实现 后加	
	});
	for(var i=0; i<$('#map-tabcont li').length;i++){
		if($('#map-tabcont li').eq(i).text().length>=6){
			$('#map-tabcont li').eq(i).addClass('long-area');
		}
	};
	$('#map').mouseout(function(){
		$('#save').hide();
		$('#map .map-border i').removeClass('ac');
	});
	
})();



//滚轮
function mouseWheel(fn){
	return this.each(function(){
		if(window.navigator.userAgent.indexOf('Firefox')!=-1){
			 this.addEventListener('DOMMouseScroll',wheelFn,true);
		}else{
			this.onmousewheel=wheelFn;
		};
		function wheelFn(ev){
			ev=ev||event;
			var direct=ev.wheelDelta ? ev.wheelDelta<0 : ev.detail>0;
			fn && fn(direct);//将direct作为参数传递出去
			if(window.event){//IE
				ev.returnValue = false; //ie 阻止默认事件
				return false;//ie9 以上阻止回车
			}
			else{
				ev.preventDefault();//DOM2级 阻止默认事件 firefox
			}
		};
	})
};




};