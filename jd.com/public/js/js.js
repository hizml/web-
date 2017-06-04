$(function(){
	//搜索提示
	function cer(div){
		div.autocomplete({
		  source: ["c++", "java", "php", "coldfusion", "javascript", "asp", "ruby" ],
		  delay: 500,
		});	
	
	//搜索框清空
		var oldval=null;//老val
		var newval=null;
		div.focus(function(){
			oldval=div.val()
			div.val('');
		});
		
		div.blur(function(){
			newval=div.val()
			if(div.val()==""){
				div.val(oldval);
			}else{
				div.val(newval);
			}
		});
		
		//$('#search-btn').click(function(){
			
		//});
	}
	cer($( "#text" ));
	cer($( "#kf-clear" ));
(function(){
	/*lest js*/
/*所有商品分类*/			
	function menu(div1,div2){
		var showid = 0;
		div1.mouseenter(function(){
			$(this).addClass("ac").siblings().removeClass("ac")
			showid=$(this).attr("data-index");
			$("#cate_item"+showid).show().siblings().hide();
			div2.show();
			div2.mouseleave(function(){
				div1.removeClass("ac");
				div2.hide();
			});
		});
		
		div2.mouseenter(function(){
			div2.show();
			div1.eq(showid-1).addClass('ac');
	
		});
		div1.mouseleave(function(){
			div1.removeClass('ac');
			div2.hide();
		});
	};
	menu($("#menu_1 li"),$("#listhid"))
/*详情页商品分类*/	
		$('#whole').mouseenter(function(){
			$('#list-top').show();
		});
		$('#list-top').mouseenter(function(){
			$('#list-top').show();
			$('#whole i').addClass('ac')
		})
		$('#list-top').mouseleave(function(){
			$('#list-top').hide();
			$('#whole i').removeClass('ac')
		});
		$('#whole').mouseleave(function(){
			$('#list-top').hide();
		});
})();	
	
});