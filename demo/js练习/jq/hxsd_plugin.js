// JavaScript Document
$.extend({
	
	//判断屏幕
	half_screen:function(obj){
		var screen_h=$(window).height();//
		var scrollTop=$(window).scrollTop();//滚动条高度
		var top=obj.offset().top;
		return top>(screen_h/2+scrollTop)? true:false; //下：ture  上：false
	},
	
	
	//居中显示
/*	showCenter:function(obj){
		obj.show();
		function show(){
			var l=( $(window).width()-obj.outerWidth())/2;
			var t=($(window).height()-obj.outerHeight())/2;
			obj.css({"left":l,"top":t});
		};
		show();
		$(window).resize(show);
	},
*/	
	//模态层
	modal:function(){
		var oM=$('<div class="modal"></div>');
		$(document.body).append(oM);
		return function(){
			oM.remove();
		};
	},
	
	//错误弹框
	errBox:function(opt){
		//默认值
		var def={
			txt:"出错了！",
			w:300,
		};
		
		//合并的值
		var op=$.extend({},def,opt);
		
		var del_moda=$.modal();
		var oBox=$('<div class="errBox" style="width:'+op.w+'px"><p>'+op.txt+'</p><button type="button">确定</button></div>');
		$(document.body).append(oBox);
		
		//$.showCenter(oBox);
		$(oBox).showCenter().drag()
		oBox.children('button').click(function(){
			oBox.remove();
			del_moda();
		});
	},
});

jQuery.fn.extend({
	showCenter:function(){
		return this.each(function(){
			$(this).show();
			var _this=$(this);
			function run(){
				var l=( $(window).width()-_this.outerWidth())/2;
				var t=($(window).height()-_this.outerHeight())/2;
				_this.css({"left":l,"top":t});
			};
			run();
			$(window).resize(run);//调整window窗口是调用run函数
			return this;
		})
	},
	drag:function(title){
		return this.each(function(){
			title=title || $(this);
			var _this=$(this);
			title.mousedown(function(ev){
				var offset=_this.offset();
				var disX=ev.pageX-offset.left; //x方向偏移
				var disY=ev.pageY-offset.top; //y方向
				
				
				//鼠标按下  为document绑定move事件-----------------------------
				$(document).bind("mousemove",function(ev){
					var l=ev.pageX-disX;
					var t=ev.pageY-disY;
					
					if(l<0){
						l=0;
					}
					if(t<0){
						t=0;
					};
					
					var s_w=$(document).width();//屏幕宽度
					var s_h=$(document).height();
					if(l>s_w-_this.outerWidth()){
						l=s_w-_this.outerWidth()
					};
					if(t>s_h-_this.outerHeight()){
						t=s_h-_this.outerHeight()
					};
					
					_this.css({"left":l,"top":t});
				});
				
				//鼠标抬起，解绑move事件------------------------------
				$(document).mouseup(function(){
					$(document).unbind('mousemove');
				});
				
				//取消默认事件（阻止圈选文字）--------------------------------
				return false;
			})
		})
	},
	chack:function(elms){
		return this.each(function(){
			var _this=$(this)
			_this.click(function(){
				elms.prop('checked',_this.prop('checked'));
			});
			
			elms.click(function(){
				var n=0;
				elms.each(function(){
					$(this).prop('checked') ? n++:n--;
				});
				_this.prop('checked',n==elms.length ? true:false)
			});
		})
	},
	tab:function(rrr){
		var runrun={
				autorun:true,
				speed:1000			
			};
		var tabrun=$.extend({},runrun,rrr);
		return this.each(function(){
			var timer=null;
			var n=0;
			var _this=$(this);
			
			_this.children('li').click(function(){
				$(this).addClass("active").siblings().removeClass("active")
				$("#tab .content li:eq("+$(this).index()+")").show().siblings().hide();
				n=$(this).index()
			});
			if(tabrun.autorun){
				clearInterval(timer);
				timer=setInterval(fn,tabrun.speed)
				function fn(){
					n++;				
					if(n==$("#tab .content li").length){
						n=0;
					};
					$('#tab .option li').eq(n).addClass("active").siblings().removeClass("active")
					$("#tab .content li").eq(n).show().siblings().hide();	
				};
				$('#tab').mouseover(function(){
					clearInterval(timer)
				});	
				$('#tab').mouseout(function(){
					timer=setInterval(fn,tabrun.speed)
				});	
			}
		
		});
	},
	//滚轮
	mouseWheel:function(fn){
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
	},
});

