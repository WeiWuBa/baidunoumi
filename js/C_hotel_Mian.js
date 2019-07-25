
$(function(){

/* ———————————————————————————————入住城市选择———————————————————————————————————— */
// 热门城市选择
$('.C_hotelCityLeft_inp').on('click','ul li',function(){
	$('.C_hotelCityLeft_inp ul li').removeClass('C_hotelCityLeft_inpulli_hover');
	$(this).toggleClass('C_hotelCityLeft_inpulli_hover');
});
$('#C_hotelSearchCity').click(function(e){
	e.stopPropagation();
	$('.C_hotelCityLeft_inp').css({'display':'block'});
});
$('body').click(function(e){
	e.stopPropagation();
	$('.C_hotelCityLeft_inp').css({'display':'none'});
	$.cookie('num','123')
});
$('.C_hotelCityLeft_inp').on('click','table tr td a',function(){
	$('#C_hotelSearchCity').val($(this).text());
});

	
/* ———————————————————————————————酒店页面吸顶效果———————————————————————————————— */
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
//保存选中状态
$('.contentTop_checek').click(function(){
	$.cookie('checekId',null);
	var val = $(this).val();
	var arr = val.split(",");
	$.cookie('checekId',val);
	// if($(this).attr('checked','checked')){
	// 	$('.contentTop_checek').click(function(){$(this).attr('checked','false');});
	// }
	// location.reload();
});
// var checekIdlength = localStorage.getItem('checekId');
for (var i = 0; i < $('.contentTop_checek').length; i++) {
	if($.cookie('checekId') == $('.contentTop_checek').val()){
		$(this).attr('checked','true');
	}
}
/* ———————————————————————————————酒店地点选择———————————————————————————————————— */
$('.C_hotelCityDetail_tab').on('click','a',function(){
	//三角小标
	$('.C_hotelCityDetail_tab a span').css('display','none');
	$('.C_hotelCityDetail_areaDetail').css('display','block');
	$(this).find('span').css('display','inline-block');
	//获取text值
	function GetCity(as){
		if(as == '地铁附近'){//返回所点击a的值
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
				$.each(data,function (index,element) {//遍历data
					if(index == Get_City){//ture
						shop +=	'<div C_cityid="'+element.C_cityid+'" class="C_hotelCityDetail_tab">';
						for (var i = 0; i < element.length; i++) {
							shop +=	'<a href="#">'+element[i]+'</a>';
						}
						shop +=	'</div>';
					}
				});
			$('.C_hotelCityDetail_areaDetail').html(shop);
		},
		error:function(xhr,type,errorThrown){
			$('.C_hotelCityDetail_areaDetail').html("请求失败，请重试！！");
		}
	});
});
/* ———————————————————————————————默认全选状态———————————————————————————————————— */
// 分类
$('.C_hotelCityDetail_tab2').find('span a').click(function(){
	$('.C_hotelCityDetail_tab2').parent().find('a').removeClass('C_hotelCityDetail_fuoce_click');
	$(this).parent().siblings().find('a').removeClass('C_hotelCityDetail_fuoce_click');
	$(this).toggleClass('C_hotelCityDetail_fuoce_click');
});
$('.C_hotelCityDetail_fuoce1').find('a').click(function(){
	$(this).parent().siblings().find('a').removeClass('C_hotelCityDetail_fuoce_click');
});
// 价格
$('.C_hotelCityDetail_tab3').find('span a').click(function(){
	$('.C_hotelCityDetail_tab3').parent().find('a').removeClass('C_hotelCityDetail_fuoce_click');
	$(this).parent().siblings().find('a').removeClass('C_hotelCityDetail_fuoce_click');
	$(this).toggleClass('C_hotelCityDetail_fuoce_click');
});
$('.C_hotelCityDetail_fuoce2').find('a').click(function(){
	$(this).parent().siblings().find('a').removeClass('C_hotelCityDetail_fuoce_click');
});
/* ———————————————————————————————数据存储到cookie————————————————————————————— */
$('.C_contenthotel_list home-page').on('click','li a',function (){
	var code = $(this).parent().attr('code') || $(this).parent().parent().attr('code') || $(this).parent().parent().parent().attr('code');
	if (localStorage.getItem('C_Data')) {// 获取本地存储的数据[]
		var codeArr = JSON.parse(localStorage.getItem('C_Data')).code;
	} else {
		var codeArr = [];
	}
	codeArr.push(code);
	// 把数据更新到本地存储
	var jsonStr = JSON.stringify({"code":codeArr});
	localStorage.setItem('C_Data',jsonStr);
});
/* ———————————————————————————————酒店页面店家展示———————————————————————————————— */
var pageNum = 1; 	// 页数
var pageSize = 10;	// 每一页显示条数
$.ajax({
	url:'json/hotel/C_hotel.json',
	dataType:'json',//服务器返回json格式数据
	type:'get',//HTTP请求类型
	cache:false,//是否使用缓存
	success:function(data){
		var con = data;
		if(con.length > 0){
			var arr_length = con.length;// 总条数
			var newarr = [];
			for (var i = 0; i < arr_length; i+= pageSize) {//每隔成每一页要显示的数量
				newarr.push(con.slice(i,pageSize));
			}
			var str = '';
			for(var j = 0; j < newarr[pageNum-1].length; j++){
				str +='<li class="C_Data" code="'+newarr[pageNum-1][j].hotel_id+'"><!-- 酒店logo图 --><a href="hotel_subpage.html" class="clearfix"><img src="'+newarr[pageNum-1][j].hotel_img_url+'" /></a><div class="C_contenthotel_listcontent"><!-- 酒店名称 --><a href="hotel_subpage.html"><h3>'+newarr[pageNum-1][j].hotel_name+'</h3></a><!-- 酒店星形评价 --><p><a href="hotel_subpage.html"><img src="images/hotel/shop-star-b_767a724.png" /><span><img src="images/hotel/shop-star-o_e5d6259.png" /></span><span>4分</span></a><!-- 酒店价格 --><span>'+newarr[pageNum-1][j].hotel_price+'</span></p><!-- 酒店文字评价 --><span><a href="">'+newarr[pageNum-1][j].hotel_appraise+'</a></span><!-- 酒店地址 --><p><i class="iconfont">&#xe60c;</i>'+newarr[pageNum-1][j].hotel_site+'<span>'+newarr[pageNum-1][j].hotel_address+'</span></p></div></li>';
			}
		$('.C_contenthotel_list').html(str);
		$('.C_contentBot_pagingT1').html(arr_length);
		$('.C_contentTop_right_pagingT1').html(pageNum);
		}else{
			$('.C_contenthotel_list').html('');
		}
	},
	error:function(xhr,type,errorThrown){
		$('.C_contenthotel_list').html("请求失败，请重试！！");
	}
});
/* ———————————————————————————————数据分页显示————————————————————————————— */
// 绑定点击页码事件
$('.C_contentBot_pagination').on('click','li a',function(){
	var str =$(this).html();
	if(!isNaN(str)){
		//移除之前的C_active
		$('.C_contentBot_pagination li a').removeClass('C_active');
		$(this).attr('class','C_active');
		$('#currentPage').val(str);
	}
	if($(this).html() != 1 ){
		$('.C_contentBot_pagination').children(':first').css({'display':'inline'});
	}else{
		$('.C_contentBot_pagination').children(':first').css({'display':'none'});
	}
});
$('.C_contentBot_pagination').on('click','li a',function(){

	var pageNum = $(this).attr('data_cod'); 	// 页数
	console.log(pageNum);
	var pageSize = 10;	// 每一页显示条数
	$.ajax({
		url:'json/hotel/C_hotel.json',
		dataType:'json',//服务器返回json格式数据
		type:'get',//HTTP请求类型
		cache:false,//是否使用缓存
		success:function(data){
			// $(".C_contenthotel_list").html("");
			if(data.length > 0){
				var arr_length = data.length;// 总条数
				var newarr = [];
				for (var i = 0; i < arr_length; i+=pageSize) {//隔成每一页要显示的数量
					newarr.push(data.slice(i,i+pageSize));
				}
				var str = '';
				for(var j = 0; j < newarr[pageNum-1].length; j++){
					str +='<li class="C_Data" code="'+newarr[pageNum-1][j].hotel_id+'"><!-- 酒店logo图 --><a href="hotel_subpage.html" class="clearfix"><img src="'+newarr[pageNum-1][j].hotel_img_url+'" /></a><div class="C_contenthotel_listcontent"><!-- 酒店名称 --><a href="hotel_subpage.html"><h3>'+newarr[pageNum-1][j].hotel_name+'</h3></a><!-- 酒店星形评价 --><p><a href="hotel_subpage.html"><img src="images/hotel/shop-star-b_767a724.png" /><span><img src="images/hotel/shop-star-o_e5d6259.png" /></span><span>4分</span></a><!-- 酒店价格 --><span>'+newarr[pageNum-1][j].hotel_price+'</span></p><!-- 酒店文字评价 --><span><a href="">'+newarr[pageNum-1][j].hotel_appraise+'</a></span><!-- 酒店地址 --><p><i class="iconfont">&#xe60c;</i>'+newarr[pageNum-1][j].hotel_site+'<span>'+newarr[pageNum-1][j].hotel_address+'</span></p></div></li>';
				}
			$('.C_contenthotel_list').html(str);
			$('.C_contentBot_pagingT1').html(arr_length);
			$('.C_contentTop_right_pagingT1').html(pageNum);
			}else{
				$('.C_contenthotel_list').html('');
			}
		},
		error:function(xhr,type,errorThrown){
			$('.C_contenthotel_list').html("请求失败，请重试！！");
		}
	});
});
//首页
});























