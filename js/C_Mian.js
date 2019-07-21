$(function(){





/* ———————————————————————————————酒店页面店家展示———————————————————————————————————— */
$.ajax({
	url:'json/C_hotel.json',
	dataType:'json',//服务器返回json格式数据
	type:'get',//HTTP请求类型
	cache:false,//是否使用缓存
	success:function(data){
		var shop ='';//清空shop
		var conet = 0;
		$.each(data,function(index,element){
			conet++;
			shop += '<li><!-- 酒店logo图 --><a href="#" class="clearfix"><img src="'+element.hotel_img_url+'" /></a><div class="C_contenthotel_listcontent"><!-- 酒店名称 --><a href="#"><h3>'+element.hotel_name+'</h3></a><!-- 酒店星形评价 --><p><a href="#"><img src="images/hotel/shop-star-b_767a724.png" /><span><img src="images/hotel/shop-star-o_e5d6259.png" /></span><span>4分</span></a><!-- 酒店价格 --><span>'+element.hotel_price+'</span></p><!-- 酒店文字评价 --><span><a href="#">'+element.hotel_appraise+'</a></span><!-- 酒店地址 --><p><i class="iconfont">&#xe60c;</i>'+element.hotel_site+'<span>'+element.hotel_address+'</span></p></div></li>';
		});
		$('.C_contenthotel_list').html(shop);
	},
	error:function(xhr,type,errorThrown){
		alert("请求失败，请重试！！")
	}
});



/* ———————————————————————————————酒店页面吸顶效果———————————————————————————————————— */
$(window).scroll(function(){
	var C_contentTop_t = $(window).scrollTop();
	if( C_contentTop_t > 490){
		$('.C_contentTop').css({'position':'fixed','top':'0','z-index':'4'});
		$('.C_contentTop_right_serch').css({'display':'block'});
	}else{
		$('.C_contentTop').css({'position':'static'});
		$('.C_contentTop_right_serch').css({'display':'none'});
	}
});
	
	
	
	
});








