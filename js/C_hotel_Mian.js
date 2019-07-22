$(function(){



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
// 榜单选择器
$('.C_contentTop_list').on('click','a',function(){
	$('.C_contentTop_list a').removeClass('C_contentTop_list_hover');
	$(this).toggleClass('C_contentTop_list_hover');
})
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

/* ———————————————————————————————酒店分页器功能———————————————————————————————————— */
// var pageNum = 1; 	// 页数
// var sumCount = 0;	// 总条数
// var pageSize = 10;	// 每一页显示条数
// 
// $.ajax({
// 	url:'json/C_hotel.json',
// 	dataType:'json',//服务器返回json格式数据
// 	type:'get',//HTTP请求类型
// 	cache:false,//是否使用缓存
// 	success:function(res){
// 		var con = res.data;
// 		console.log(con)
// 		sumCount = con.length;
// 		if(con.length > 0){
// 			var arr_length = con.length;
// 			var newarr = [];
// 			for (var i = 0; i < arr_length; i+= pageSize) {//每隔成每一页要显示的数量
// 				newarr.push(con.slice(i,pageSize));
// 			}
// 			var str = '';
// 			for(var j = 0; j < newarr[pageNum-1].length; j++){
// 				str +='<li><!-- 酒店logo图 --><a href="#" class="clearfix"><img src="'+newarr[pageNum-1][j].hotel_img_url+'" /></a><div class="C_contenthotel_listcontent"><!-- 酒店名称 --><a href="#"><h3>'+newarr[pageNum-1][j].hotel_name+'</h3></a><!-- 酒店星形评价 --><p><a href="#"><img src="images/hotel/shop-star-b_767a724.png" /><span><img src="images/hotel/shop-star-o_e5d6259.png" /></span><span>4分</span></a><!-- 酒店价格 --><span>'+newarr[pageNum-1][j].hotel_price+'</span></p><!-- 酒店文字评价 --><span><a href="#">'+newarr[pageNum-1][j].hotel_appraise+'</a></span><!-- 酒店地址 --><p><i class="iconfont">&#xe60c;</i>'+newarr[pageNum-1][j].hotel_site+'<span>'+newarr[pageNum-1][j].hotel_address+'</span></p></div></li>';
// 			}
// 		}
// 		$('.C_contenthotel_list').html(str);
// 	},
// 	error:function(xhr,type,errorThrown){
// 		alert("请求失败，请重试！！")
// 	}
// });
// 



	
	
	
	
});








