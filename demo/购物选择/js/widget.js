// JavaScript Document

//模态层
function modal(){
	var oM=document.createElement('div');
	oM.className="modal";
	document.body.appendChild(oM);
	//return oM;
	
	return function(){//返回了一个   删除模态层的方法
		document.body.removeChild(oM);
	};
	
};


//确认弹框
function confirmBox(txt,fn){
	var delModal=modal();
	
	var cBox=document.createElement('div');//创建div
	cBox.className="confirmBox";//定义class
	cBox.innerHTML='<p>'+txt+'</p><p><button type="button">确定</button> <button type="button">取消</button></p>';
	
	document.body.appendChild(cBox);//插入到页面
	
	showCenter(cBox);
	
	//找到两个按钮
	var aBtn=cBox.getElementsByTagName('button');//找到按钮
	
	//确定按钮
	aBtn[0].onclick=function(){
		fn&& fn();//判断并调用回调函数
		document.body.removeChild(cBox);
		delModal();
	};
	//取消按钮
	aBtn[1].onclick=function(){
		document.body.removeChild(cBox);
		delModal();//删除模态层
		
	};
};

//alert弹框
function aler(txt){
	if(!window.pBox){
		var del=modal();//调用模态层并接受删除模态层方法
		var aler=document.createElement('div');
			showCenter(aler);
			aler.className="aler";
			aler.innerHTML='<p>'+txt+'</p>'
				+'<button>确定</button>';
		var aBtn=aler.getElementsByTagName('button')[0];
		aBtn.onclick=function(){
			document.body.removeChild(aler);
			del();//删除模态层
			window.pBox=false;
		};
		document.body.appendChild(aler);
		window.pBox=false;
	};
}

//自定义prompt弹框
function promptBox(txt,fn){
	if(!window.pBox){//pBox作为判断弹框是否显示的开关，设定在window对象上
		var proBox=document.createElement('div');
		proBox.className='promptBox';
		proBox.innerHTML='<h4>'+txt+'</h4>'+
		'<textarea></textarea>'+
		'<p><button type="button">确定</button><button>取消</button></p>';
		document.body.appendChild(proBox);
		showCenter(proBox);//居中显示
		
		window.pBox=true;
		
		var oText=proBox.children[1];//输入框
		var aBtn=proBox.getElementsByTagName('button');
	
		//确定
		aBtn[0].onclick=function(){
			document.body.removeChild(proBox);
			
			fn && fn( oText.value );	//把输入框的内容，当做参数放到回调当中  实参
			
			window.pBox=false;
			
		};
		//取消
		aBtn[1].onclick=function(){
			document.body.removeChild(proBox);
			window.pBox=false;
			
		}
		
	};
	
	
};