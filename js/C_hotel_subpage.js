$(function(){
/* ———————————————————————————————二级页面获取一级页面数据————————————————————————————— */
if (localStorage.getItem('C_Data')) {
	// 获取本地数据[]
	var codeArr = JSON.parse(localStorage.getItem('C_Data')).code;
	console.log(codeArr)
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
					if (codeArr == element.hotel_id) {
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
	
/* ———————————————————————————————酒店广告推荐————————————————————————————— */
var C_hoteladvertising = function(){
	$.ajax({
		url:'json/hotel/C_hotel.json',
		dataType:'json',//服务器返回json格式数据
		type:'get',//HTTP请求类型
		cache:false,//是否使用缓存
		success:function(data){
			if(data.length > 0){
				var arr_length = data.length;// 总条数
				var newarr = [];
				for (var i = 0; i < arr_length; i+= 4) {//每隔成每一页要显示的数量
					newarr.push(data.slice(i,i+4));
				}
				var str = '';
				var Rand = newarr[getRand(0, 15)];
				for(var j = 0; j < Rand.length; j++){
					var num = getRand(1, 19);
					var price_min = getRand(300,1000);
					var price_max = getRand(price_min,2000);
					str +='<li class="clearfix"><a href="//www.nuomi.com/deal/u00rsopxy.html"><img src="images/hotel_json/houshotel'+num+'.jpg" title="'+Rand[j].hotel_name+'"><dl><dt>'+Rand[j].hotel_name+'</dt><dd>'+Rand[j].hotel_appraise+Rand[j].hotel_appraise+'</dd><p><span>￥'+price_min+'</span><span>￥'+price_max+'</span></p></dl></a></li>';
				}
			$('.C_mian_bot_R_rec_con').html(str);
			}else{
				$('.C_contenthotel_list').html("请求失败，请重试！！");
			}
		},
		error:function(xhr,type,errorThrown){
			$('.C_contenthotel_list').html("请求失败，请重试！！");
		}
	});
}
C_hoteladvertising();
//——————————————点击刷新按钮；
$('.C_mian_bot_R_rec_header').on('click','a',function(){
	C_hoteladvertising();
});

});
setTimeout(function(){
    $('footer .re-footer-inner').css('margin','0 auto');
    $('.tijiao').css('height','43px');
    $('.searchInput').css('height','40px');
    // $('.HeaNav1 .dl_f_xr').css({"display":"block","z-index":"999"});
	$('.HeaNav1 .dl_f_xr').css({"z-index":"999","position": "relative",
    "top": '-44px',"left": '-16px'});
    $('.interlock_xr').css({'left':"233px"});
    $('.HeaNav1 dl').css({'display':'block','width':"211px"});
	$('.form-right').css({'border':"2.4px solid #d6ad62"});
	// $('.HeaNav1 dl dd a').css('font-size','14px');
},70);






