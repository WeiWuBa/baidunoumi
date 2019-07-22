$(function(){
/* ———————————————————————————————入住城市选择———————————————————————————————————— */
$('#C_hotelSearchCity').focus(function(){
	$('.C_hotelCityLeft_inp').css({'display':'block'});
});
$('#C_hotelSearchCity').blur(function(){
	$('.C_hotelCityLeft_inp').css({'display':'none'});
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
// 榜单选择器
$('.C_contentTop_list').on('click','a',function(){
	$('.C_contentTop_list a').removeClass('C_contentTop_list_hover');
	$(this).toggleClass('C_contentTop_list_hover');
});

/* ———————————————————————————————酒店地点选择———————————————————————————————————— */
$('.C_hotelCityDetail_tab').on('click','a',function(){
	//三角小标
	$('.C_hotelCityDetail_tab a span').css('display','none');
	$(this).find('span').css('display','inline-block');
	//text值
	function GetCity(as){
		if(as == '地铁附近'){
			return 'ditiefujin';
		}else if(as == '行政区'){
			return 'xingzhengqu';
		}
	}
	var Get_City = GetCity($(this).text());
	$.ajax({
		url:'json/hotel/C_hotelCity.json',
		dataType:'json',//服务器返回json格式数据
		type:'get',//HTTP请求类型
		cache:false,//是否使用缓存
		success:function(data){
			var shop ='';//清空shop
			$.each(data,function(index,element){
				shop +=	'<div class="C_hotelCityDetail_tab">';
				for (var i = 0; i < element.length; i++) {
					shop +=	'<a href="#">'+element[i]+'</a>';
				}
				shop +=	'</div>';
			});
			$('.C_hotelCityDetail_areaDetail').html(shop);
		},
		error:function(xhr,type,errorThrown){
			alert("请求失败，请重试！！")
		}
	});
});
//默认全选状态






/* ———————————————————————————————酒店页面店家展示———————————————————————————————————— */

$.ajax({
	url:'json/hotel/C_hotel.json',
	dataType:'json',//服务器返回json格式数据
	type:'get',//HTTP请求类型
	cache:false,//是否使用缓存
	success:function(data){
		var shop ='';//清空shop
		var conet = 0;
		$.each(data,function(index,element){
			conet++;
			shop += '<li class="C_Data" code="'+element.hotel_id+'"><!-- 酒店logo图 --><a href="hotel_subpage.html" class="clearfix"><img src="'+element.hotel_img_url+'" /></a><div class="C_contenthotel_listcontent"><!-- 酒店名称 --><a href="hotel_subpage.html"><h3>'+element.hotel_name+'</h3></a><!-- 酒店星形评价 --><p><a href="hotel_subpage.html"><img src="images/hotel/shop-star-b_767a724.png" /><span><img src="images/hotel/shop-star-o_e5d6259.png" /></span><span>4分</span></a><!-- 酒店价格 --><span>'+element.hotel_price+'</span></p><!-- 酒店文字评价 --><span><a href="#">'+element.hotel_appraise+'</a></span><!-- 酒店地址 --><p><i class="iconfont">&#xe60c;</i>'+element.hotel_site+'<span>'+element.hotel_address+'</span></p></div></li>';
		});
		$('.C_contenthotel_list').html(shop);
		$('.C_contentBot_pagingT1').html(conet);
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

/* ———————————————————————————————数据存储到cookie————————————————————————————— */
$('.C_contenthotel_list').on('click','li a',function (){
	var code = $(this).parent().attr('code') || $(this).parent().parent().attr('code') || $(this).parent().parent().parent().attr('code');
	if (localStorage.getItem('C_Data')) {
		// 获取本地存储的数据[]
		var codeArr = JSON.parse(localStorage.getItem('C_Data')).code;
	} else {
		var codeArr = [];
	}
	codeArr.push(code);
	console.log(codeArr);
	// 把数据更新到本地存储
	var jsonStr = JSON.stringify({"code":codeArr});
	console.log(jsonStr);
	localStorage.setItem('C_Data',jsonStr);
});

	
	
	
	
	
});








