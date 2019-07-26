(function (){
	$('header').load('header.html');
	$('.footer').load('footer.html');
	$('.bound').click(function (){
			$('.Z-win').css("display","block");
			$('.mask').css("display",'block');
		})
		
	
	$('.Z-close').click(function (){
		$('.Z-close').parent().parent().css('display','none');
		$('.mask').css('display','none');
		})
	
	$.fn.extend({
	    drag: function (){
	        $(this).css({
	            position: 'absolute',
	            cursor: 'move'
	        });
	        $(this).mousedown(function (e){
	            // e.preventDefault();//阻止默认事件
	
	            // 点击位置到块的左侧、顶部距离
	            var toLeft = e.clientX - $(this).offset().left;
	            var toTop = e.clientY - $(this).offset().top;
	            var $this = $(this);//保存当前对象
	            $(document).on('mousemove',function (e){
	                // 块的定位值
	                var left = e.clientX - toLeft;
	                var top = e.clientY - toTop;
	                $this.css({
	                    left: left,
	                    top: top
	                });
	            })
	            $(document).mouseup(function (){
	                $(document).off('mousemove');
	            })
	            // return false;//阻止默认事件
	        })
	    },
	});
	$('.Z-win').drag();
	
	
})();
setTimeout(function(){
	$('footer .re-footer-inner').css('margin','0 auto');
	$('.tijiao').css('height','37px');
	$('.searchInput').css('height','36px');
	// $('.HeaNav1 .dl_f_xr').css({"display":"block","z-index":"999"});
	// $('.HeaNav1 .dl_f_xr').css({"display":"none","z-index":"999","position": "relative",
	// "top": '-44px',"left": '-16px'});
	$('.interlock_xr').css({'left':"217px"});
	$('.HeaNav1 dl').css({'display':'block','width':"217px"});
	$('.form-right').css({'border':"2.4px solid #d6ad62"});
	$('.HeaNav1 dl dd a').css('font-size','14px');
},70);
