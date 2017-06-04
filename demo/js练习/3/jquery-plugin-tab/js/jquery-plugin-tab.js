// JavaScript Document
;(function($){
	$.fn.tab=function(rrr){
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
		}
})(jQuery);


