
//*****************************头部导航json*********************** */
    ajax({
        url: './json/H_nev.json',
        type: 'get',
        dataType: 'json',
        success: function(data){
            var json = JSON.parse(data);
            for(var i = 0 ; i < json.navText.length ; i++){
                $('#head_cont>ul').append("<li><a href="+json.navHref[i]+">"+json.navText[i]+"</a></li>");
            }
        }
    });
//*****************************头部导航json*********************** */
//*****************************搜索框鼠标放上*********************** */
$('#search').on('mouseenter',function(){
    $('#search').css({
        'border-color': '#5183ff',
        'box-shadow': '0 0 40px 0 rgba(81,131,255,.35)'
    });
    $('.fangdj>i').css({
        'background' : 'url(http://zhaopin.baidu.com/static/newpczhaopin/d13628725f9a6c879b06461e73d0cf1b.png) no-repeat',
        'background-size': 'contain'
    });
    $('#search').on('mouseleave',function(){
        $('#search').css({
            'border-color': '#ccc',
            'box-shadow': '0 0 40px 0 hsla(0,0%,56%,.2)'
        });
        $('.fangdj>i').css({
            'background' : 'url(http://zhaopin.baidu.com/static/newpczhaopin/c8365c4a1acbb89ca909012aa6dba999.png) no-repeat',
            'background-size': 'contain'
        })
    });
})
//*****************************搜索框鼠标放上*********************** */

//*************************搜索框ajax**********************
$('.search_input').on('keyup',function(){
    $('.suggest-result').css({'display':'block'});

        var tVal = $('.search_input').val();
        if(tVal != ''){
            $('.suggest-result>ul').html('');
            ajax({
                url: 'data/baidu.php',
                type: 'get',
                data: 'wd='+tVal,
                success: function(data){
                    var json = JSON.parse(data);
                    for(var i = 0 ; i < json.s.length ; i++){
                        $('.suggest-result>ul').append("<li>"+json.s[i]+"</li>");
                    }
                }
            });
        }else{
            $('.search_input>ul').html("");
        } 
    
    if($('.search_input').val() == ''){
        $('.suggest-result').css({'display':'none'});
    };
})

var jishu = 0;
$('.occupation').on('click',function(){
    if(jishu == 0){
        $('.occupation>i').css({
            'background-image':'url(http://zhaopin.baidu.com/static/newpczhaopin/1a8701d1c7fda19813dda2af7e60e182.png)'
        });
        $('.occupation>div').css({
            'display' : 'block'
        })
        jishu ++;
    }else{
        $('.occupation>i').css({
            'background-image':'url(http://zhaopin.baidu.com/static/newpczhaopin/2ecbc4f579ca2383b671f7e0969ed5f8.png)'
        });
        $('.occupation>div').css({
            'display' : 'none'
        })
        jishu = 0 ;
    }
});
//*************************搜索框**********************

//*************************banner轮播_职业选择部分鼠标滑过事件**********************
$('.banner_left>ul>li').on('mouseenter',function(e){
    $(e.target).children(".left_arrow").css({
        'display':'block'
    });
    $('.banner_level').css({
        'display':'block'
    });
    $('.banner_left>ul>li').on('mouseout',function(){
        $('.left_arrow').css({
            'display':'none'
        });
        $('.banner_level').css({
            'display':'none'
        })
    });
})
//*************************banner轮播_职业选择部分鼠标滑过事件**********************

//*************************banner轮播**********************
// (function(){
// 	var banner_centre_xr = document.querySelector(".banner_centre_xr");
// 	var glyphicon = document.querySelectorAll(".glyphicon");
// 	var imgList_xr = document.querySelector(".imgList_xr");
// 	var imglist_xr = imgList_xr.children;
// 	var paging = document.querySelector(".paging");
// 	var imgli = paging.children;
// 	var left_xr = document.querySelector(".left_xr");
// 	var right_xr = document.querySelector(".right_xr");

// 	    var timer = setInterval(autoPlay,2000);  
// 		var index = 0;
// 		function autoPlay(){
// 			if(index==5){
// 				imgList_xr.style.left = 0;
// 				index = 1;
// 			}else{
// 				index++;
// 			}
// 			for(var i = 0; i<imgli.length; i++){
// 				imgli[i].className = "";
// 			}
// 			animate(imgList_xr,{left:-717*index},20);
// 			imgli[index == 5 ? 0 : index].className = "active";
// 		}
// 		//轮播，鼠标移入显示箭头
// 			banner_centre_xr.onmouseover = function(){
// 				animate(glyphicon[0],{opacity:100},20);
// 				animate(glyphicon[1],{opacity:100},20);
// 				clearInterval(timer);
// 			}
// 			banner_centre_xr.onmouseout = function(){
// 				animate(glyphicon[0],{opacity:0},20);
// 				animate(glyphicon[1],{opacity:0},20);
// 				timer = setInterval(autoPlay,1500);  
// 			}
// 			left_xr.onclick = function(){
// 				if(index==5){
// 					imgList_xr.style.left = 0;
// 					index = 0;
// 				}else if(index==0){
// 					index = 4;
// 				}else{
// 					index--;
// 				}
// 				for(var j = 0; j<imgList_xr.length; j++){
// 					index = j;
// 				}
// 				for(var k = 0; k<imgli.length; k++){
// 					imgli[k].className = "";
// 				}
// 				imgli[index].className = "active";
// 				animate(imgList_xr,{left:-717*index},20);
// 			}
// 			right_xr.onclick = function(){
// 				if(index==4){
// 					index = 0;
// 				}else{
// 					index++;
// 				}	
// 				for(var j = 0; j<imgList_xr.length; j++){
// 					index = j;
// 				}
// 				for(var k = 0; k<imgli.length; k++){
// 					imgli[k].className = "";
// 				}
// 				imgli[index].className = "active";
// 				animate(imgList_xr,{left:-717*index},20);
// 			}
// 			for(let l = 0; l<imgli.length; l++){
// 				imgli[l].onclick = function(){
// 					// for(var j = 0; j<imgList_xr.length; j++){
// 					// 	index = j;
// 					// }
// 					for(var k = 0; k<imgli.length; k++){
// 						imgli[k].className = "";
// 					}
// 					imgli[l].className = "active";
// 					animate(imgList_xr,{left:-717*l},20);
// 				}
// 			}
// })();

//*************************banner轮播**********************

//*************************点击document清除掉所有的改挂显示**********************
    $("body").click(function (e) {
        if (!$(e.target).closest(".occupation").length) {
            $(".occupation>div").hide();
        }
    });
//*************************点击document清除掉所有的改挂显示**********************

//*************************点击document替换内容**********************

$('.occupation>div').on('click',function(e){
    $('.occupation>span').text($(e.target).text());
})


//*************************点击document替换内容**********************

//*************************right_black弹出的宽**********************

// function popup(){
//     if($('.right_black_top_a>div').text().length == 4){
//         return 56;
//     }else{
//         return 85;
//     }
// }

//*************************right_black弹出的宽**********************

//*************************right_black弹出的动画效果**********************
$('.right_black_top_a').mouseenter(function(e){
    $(e.target).children("div").addClass('fadeInleft animated')
});
//*************************right_black弹出的动画效果**********************