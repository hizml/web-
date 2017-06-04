// JavaScript Document
window.onload=function(){
var oDiv=document.getElementById("box");

var oPic=oDiv.children[0];
var oTcont=oPic.children[0];
var oTlist=oPic.children[1];
var oLi1=oTcont.getElementsByTagName("li");
var oLi2=oTlist.getElementsByTagName("li");		
 												//找对象，左边选项卡结束 oLi1为上部图片，oLi2为下选项图
//=====================================================
var oTxt=oDiv.children[1];
var oEm=oTxt.getElementsByTagName("em")[0];
var oEmtxt=oEm.innerHTML;//获取价格区默认字符 独立开关时用到
var oDtn=oTxt.getElementsByClassName("btn")[0];
var oBtn=oDtn.getElementsByTagName("button");
var time;
var arr=[438,43888,438888,666666,"438-666666"];
var oNum=oTxt.getElementsByClassName("num")[0];
var oInput=oNum.getElementsByTagName("input")[0];

var numadd=oNum.getElementsByTagName("button")[0];
var numsub=oNum.getElementsByTagName("button")[1];

	showCenter(oDiv);//引用居中 tool				//右侧
//=====================================================
													
	for(var i=0;i<oLi2.length;i++){					//循环遍历绑定鼠标over事件
		oLi2[i].index=i;	//发牌照，存储i值到index
		oLi2[i].onmouseover=function(){			
		var _this=this;					//将over之后的this存起来 避免定时器开启后this指向改变为window
			clearInterval(time);	//清除定时器
			time=setTimeout(function(){	//开启延时定时器 用户体验 不会因为快速滑过而迅速改变图片 选型时舒服
				for(var j=0;j<oLi2.length;j++){			//循环重置样式
					oLi2[j].style.borderColor="";
					oLi1[j].style.display="none";
				};
				oLi2[_this.index].style.borderColor="#be0106";//鼠标悬停时显示样式
				oLi1[_this.index].style.display="block";
			},300)
		};
		oLi2[i].onmouseout=function(){
			clearInterval(time);
		}
	};
													//选项卡效果结束
//=====================================================
												//选型开始
	for(var k=0;k<oBtn.length;k++){
		oBtn[k].index=k;					//发牌照
		oBtn[k].numm=true;					//独立开关定义
		oBtn[k].onclick=function(){		//循环绑定点击事件
			if(this.numm){				//判断开关 
				for(var l=0;l<oBtn.length;l++){
					oBtn[l].style.borderColor="";//清空类型边框
					oBtn[l].numm=true;			//将开关清空 变为默认 和清边框同理
				};
				for(var m=0;m<oLi2.length;m++){	//循环pic重置样式,点击时清空pic选项边框 pic为none
					oLi1[m].style.display="none";
					oLi2[m].style.borderColor="";
				};
				this.style.borderColor="#be0106";	//类型边框变色
				oEm.innerHTML=(oBtn[this.index]=arr[this.index]);//输出相同下标所代表的内容
				oLi1[(this.index)+1].style.display="block";		//显示pic+1个图片(pic比选框多1)
				
				this.numm=false;		//执行后变换开关
			}else{
				for(var l=0;l<oBtn.length;l++){
					oBtn[l].style.borderColor="";//清空类型边框
					oBtn[l].numm=true;
				};
				oEm.innerHTML=oEmtxt;		//恢复价格区默认字符
				for(var m=0;m<oLi2.length;m++){	
					oLi1[m].style.display="none";	//先隐藏所有图片
				};
				oLi1[0].style.display="block";		//显示oLi[0]既默认图
				
				this.numm=true;		//执行后变换开关
			}
		};
	};

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

//==============================================

var shopCar=document.getElementById("shopcar");
		shopCar.onclick=function(){
			var text=oEm.innerHTML
			if(text==arr[arr.length-1]){
				aler("请选择类型");
			}else{
				aler("添加成功");
			};
		};

};
