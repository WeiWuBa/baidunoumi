$(function(){
	
/* ———————————————————————————————二级页面获取一级页面数据————————————————————————————— */

if (localStorage.getItem('C_Data')) {
	// 获取本地数据[]
	var codeArr = JSON.parse( localStorage.getItem('C_Data') ).code;
	if (codeArr.length == 0) {//判断是否有数据
		return false;
	}
	$.ajax({
		url: 'json/hotel/C_hotel.json',
		dataType:'json',//服务器返回json格式数据
		type:'get',//HTTP请求类型
		cache:false,//是否使用缓存
		success: function (data){
			$.each(codeArr,function (i,item){
				$.each(data,function (index,element){
					if (item == element.hotel_id) {
						// 1获取图片
						// 2获取酒店名称
						// 3获取人均价格
						// 4获取地址
						// 5随机电话号码
						// 6随机售出额
						$('.C_crumb_last').find('a').text(element.hotel_name);
						$('.C_mian_top_name').text(element.hotel_name);
						$('.C_mian_top_site').text(element.hotel_address);
						$('.C_mian_bot_shopping_sell1').text(getRand(50,500));
						$('.C_mian_bot_shopping_sell2').text(getRand(50,200));
						$('.C_mian_top_site').text(element.hotel_address);
						$('.C_mian_top_img').html('<img src="'+element.hotel_img_url+'"/>');
						$('.C_mian_bot_shopping_img1').html('<img src="'+element.hotel_img_url1+'"/>');
						$('.C_mian_bot_shopping_img2').html('<img src="'+element.hotel_img_url2+'"/>');
						$('.C_mian_top_phone').html(getRand(11111111111,999999999999));
						
					}
				});
			});
		}
	});
}
	
/* ———————————————————————————————鼠标滑过地图显示标签————————————————————————————— */
	$('.C_mian_bot_R_map').mouseover(function(){
		$(this).find('a').css('opacity','1');
	});
	$('.C_mian_bot_R_map').mouseout(function(){
		$(this).find('a').css('opacity','0');
	});
})