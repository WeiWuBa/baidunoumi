//吸顶
(function(){
	$('.Dangerous_nav').hide();//收起
	$(window).scroll(function(){
		var stop = $('body').scrollTop()+$('html').scrollTop();
		if(stop>600){
			$('.Dangerous_nav').slideDown(200);//展开
		}else{
			$('.Dangerous_nav').slideUp(200);//收起
		}
	});
//搜索	
	if($(".ipt1").val() == ''){
		$(".nav_ss_xr").css("display","none");
	}
	$(".ipt1").keyup(function(){
		$.ajax({
			url: 'data/baidu.php',
			type: 'get',
			cache: false,
			data: 'wd='+$(".ipt1").val(),
			dataType: 'json',
			success: function(data){
				var str = '';
				$(data.s).each(function(index,value){
					str += '<li>'+data.s[index]+'</li>';
				});
				$(".nav_ss_xr").html(str);
				$(".nav_ss_xr li").mouseenter(function(){
					$(".nav_ss_xr li").each(function(index,value){
						$(".nav_ss_xr li").removeClass("select");
					});
					$(this).addClass("select");
					$(".ipt1").val($(this).html());
				});
				if($(".ipt1").val() == ''){
					$(".nav_ss_xr li").remove();
					$(".nav_ss_xr").css("display","none");
				}else{
					$(".nav_ss_xr").css("display","block");
				}
			}
		});
	});
	$('body').click(function(){
		$(".nav_ss_xr").css("display","none");
	});
	$(".ipt1").click(function(){
		$(".nav_ss_xr").css("display","block");
		return false;
	});
})();


//header
	(function(){
		$('header').load('header.html');
	})();
//footer
	(function(){
		$('footer').load('footer.html');
	})();
//轮播
(function(){
	var banner_centre_xr = document.querySelector(".banner_centre_xr");
	var glyphicon = document.querySelectorAll(".glyphicon");
	var imgList_xr = document.querySelector(".imgList_xr");
	var imglist_xr = imgList_xr.children;
	var paging = document.querySelector(".paging");
	var imgli = paging.children;
	var left_xr = document.querySelector(".left_xr");
	var right_xr = document.querySelector(".right_xr");

	    var timer = setInterval(autoPlay,2000);  
		var index = 0;
		function autoPlay(){
			if(index==5){
				imgList_xr.style.left = 0;
				index = 1;
			}else{
				index++;
			}
			for(var i = 0; i<imgli.length; i++){
				imgli[i].className = "";
			}
			animate(imgList_xr,{left:-717*index},20);
			imgli[index == 5 ? 0 : index].className = "active";
		}
		//轮播，鼠标移入显示箭头
			banner_centre_xr.onmouseover = function(){
				animate(glyphicon[0],{opacity:100},20);
				animate(glyphicon[1],{opacity:100},20);
				clearInterval(timer);
			}
			banner_centre_xr.onmouseout = function(){
				animate(glyphicon[0],{opacity:0},20);
				animate(glyphicon[1],{opacity:0},20);
				timer = setInterval(autoPlay,1500);  
			}
			left_xr.onclick = function(){
				if(index==5){
					imgList_xr.style.left = 0;
					index = 0;
				}else if(index==0){
					index = 4;
				}else{
					index--;
				}
				for(var j = 0; j<imgList_xr.length; j++){
					index = j;
				}
				for(var k = 0; k<imgli.length; k++){
					imgli[k].className = "";
				}
				imgli[index].className = "active";
				animate(imgList_xr,{left:-717*index},20);
			}
			right_xr.onclick = function(){
				if(index==4){
					index = 0;
				}else{
					index++;
				}	
				for(var j = 0; j<imgList_xr.length; j++){
					index = j;
				}
				for(var k = 0; k<imgli.length; k++){
					imgli[k].className = "";
				}
				imgli[index].className = "active";
				animate(imgList_xr,{left:-717*index},20);
			}
			for(let l = 0; l<imgli.length; l++){
				imgli[l].onclick = function(){
					// for(var j = 0; j<imgList_xr.length; j++){
					// 	index = j;
					// }
					for(var k = 0; k<imgli.length; k++){
						imgli[k].className = "";
					}
					imgli[l].className = "active";
					animate(imgList_xr,{left:-717*l},20);
				}
			}
})();

// 热映电影鼠标移入效果
(function(){
	$(".item_list_xr").on('mouseenter','li',function(){
		$(".item_list_xr li").each(function(index,value){
			$(this).removeClass("shadow_xr");
			$(this).animate({bottom:0},300);
		});
		  $(this).animate({bottom:5},300);
		  $(this).attr("class","shadow_xr");
	});
})();

//电影数据
(function(){
	//随机数
	function getRand(min,max){
		return parseInt(Math.random()*(max-min+1) + min);
	}
	//随机获取六位十六进制颜色值
	function getColor(){
		var str = "0123456789abcdef";
		var color = "#";
		for (var i = 0; i < 6; i++) {
			var rand = getRand(0,15);
			color += str.charAt(rand);
		}
		return color;
	}
	var str = '';
		$.ajax({
		url: 'https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=44&type=1&k=2139792',
		type: 'get',
		headers:{
			"X-Client-Info": '{"a":"3000","ch":"1002","v":"5.0.4","e":"1563798652721554505868"}',
			"X-Host": "mall.film-ticket.film.list",
		},
		dataType: 'json',//发送 json 请求
		success: function (data){
			$(data.data.films).each(function(index,value){
				if(data.data.films[index].grade == undefined){
					data.data.films[index].grade = '暂定';
				}
				str += '<li><a href="#"><img src="'+data.data.films[index].poster+'" ><span>'+data.data.films[index].grade+'</span><p>'+data.data.films[index].name+'</p><div class="movie_xr_choose">选座购票</div></a></li>';
			});
			$(".item_list_xr").html(str);
			//轮播
			$("#warp_xr").on("mouseenter",".movie_xr",function(){
				$(".icon-jiantou_zuo").animate({opacity:1,left:50},400).css("color",getColor());
				$(".icon-jiantou_you1").animate({opacity:1,right:50},400).css("color",getColor());
				$(".ys").animate({opacity:0.8},400);
			});
			$("#warp_xr").on("mouseleave",".movie_xr",function(){
				$(".icon-jiantou_zuo").animate({opacity:0,left:-0},1000);
				$(".icon-jiantou_you1").animate({opacity:0,right:-0},1000);
				$(".ys").animate({opacity:0},500);
			});
			var index = 0;
			var sum = parseInt(data.data.films.length/6);
			$(".icon-jiantou_zuo").click(function(){
				if(index==0){
					index=sum-1;
				}else{
					index--;
				}
				$(".ys").html("第"+(index+1)+"/"+(sum));
				$(".item_list_xr").animate({left:-1200*index},800);
			});
			$(".icon-jiantou_you1").click(function(){
				if(index==sum-1){
					index=0;
				}else{
					index++;
				}
				$(".ys").html("第"+(index+1)+"/"+(sum));
				$(".item_list_xr").animate({left:-1200*index},800);
			});
		},
	});
})();
setTimeout(function(){
	$('.HeaNav1 .dl_f_xr').css({"display":"block","z-index":"999","position": "relative",
	   "top": '-44px',"left": '-16px'});
	   
},100)





