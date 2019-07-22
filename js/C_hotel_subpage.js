$(function(){
	
/* ———————————————————————————————二级页面获取一级页面数据————————————————————————————— */
	// 1获取图片
	// 2获取酒店名称
	// 3获取人均价格
	// 4获取地址
	$('.C_mian_top_name').html();



/* ———————————————————————————————鼠标滑过地图显示标签————————————————————————————— */
	$('.C_mian_bot_R_map').mouseover(function(){
		$(this).find('a').css('opacity','1');
	});
	$('.C_mian_bot_R_map').mouseout(function(){
		$(this).find('a').css('opacity','0');
	});
})