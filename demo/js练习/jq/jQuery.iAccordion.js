// JavaScript Document
/*******************************
 * @author Mr.Think
 * @author blog http://mrthink.net/
 * @2012.05.30
 * @可自由转载及使用,但请注明版权归属
 *******************************/
;(function($){
    /*
     * 基于jQuery的简易手风琴切换插件@Mr.Think(http://mrthink.net/)
     */
    $.fn.iAccordion=function(iSet){
        var self=this;
        iSet=$.extend(
			{Type:'mouseover',Select:'img',Cur:0,InitInterval:100,Interval:500,Easing:''},iSet||{});
        /*
         * Type: 鼠标事件类型，mouseover,click,mouseleave等
         * Select: 选择器，用以获取需要切换的元素集合
         * Cur: 默认展开元素的索引
         * InitInterval: 初始化手风琴效果动画间隔时间
         * Interval: 鼠标事件动画间隔时间
         * Easing: 动画效果，需要jQuery.easing支持，参数可参考jQuery.easing@ http://gsgd.co.uk/sandbox/jquery/easing/
         */
        var item,boxW,selectW,animateW,sIndex,animateL;
        return this.each(function(){
            //初始化容器样式
            $(this).css({'position':'relative','overflow':'hidden'});
            item=$(this).find(iSet.Select);
            //初始化切换元素样式
            item.css({'position':'absolute','left':0,'top':0});
            boxW=$(this).outerWidth();
            selectW=item.outerWidth();
            animateW=(boxW-selectW)/(item.size()-1);
            //初始化元素排列并为元素data一个索引值
            item.each(function(i){
                $(this).animate({'left':animateW*i+'px'},iSet.InitInterval,iSet.Easing);
                $(this).data('index',i);  
            }).on(iSet.Type,function(e){//绑定鼠标事件
                //获取当前元素索引值
                sIndex=$(this).data('index');
                    //鼠标事件动画，通过判断元素索引值与当前元素索引值的大小关系动画显示当前元素并动画排列
                    item.each(function(n){
                        n > sIndex ? animateL=selectW+animateW*(n-1) : animateL=animateW*n;
                        $(this).stop().animate({'left':animateL+'px'},iSet.Interval,iSet.Easing);
                    });
            }).eq(iSet.Cur).trigger(iSet.Type);
        });
    }
})(jQuery);