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

//热映电影鼠标移入效果
// (function(){
// 	$(".item_list_xr").on('mouseover','li',function(){
// 		   $(this).animate({
// 			   marginBottom: 10
// 		   },100);
// 	});
// })();