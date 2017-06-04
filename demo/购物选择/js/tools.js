// JavaScript Document

//中心显示
function showCenter(obj){
	obj.style.display="block";
	function show(){
		var l=(document.documentElement.clientWidth-obj.offsetWidth)/2;
		var t=(document.documentElement.clientHeight-obj.offsetHeight)/2;
		obj.style.left=l+"px";
		obj.style.top=t+"px";
		obj.style.position="absolute";
	};
	show();
	window.onresize=show;
};
