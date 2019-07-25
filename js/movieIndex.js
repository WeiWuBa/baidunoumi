(function(){

	$('.yinheader').load("yCheader.html");
	$('.yContent-right').load("yCcontent.html");
	
	//电影左右箭头悬浮
	//移入触发
	function yarrowmovein(ele1,ele2,ele3,ele4){
		ele1.bind('mouseenter',function(){
			ele2.css('color',"#f00");
			ele3.css('color',"#f00");
			ele2.animate({left:0,opacity:0.4},500);
			ele3.animate({left:908,opacity:0.4},500);
			ele4.children().bind('mouseenter',function(){
					ele4.children().css({"opacity":.8,'color':"#fff",});	
			});
			ele4.children().bind('mouseleave',function(){
					ele4.children().css({"opacity":.4,'color':"eee",});	
			});
		});
	};
	//移出触发
	function yarrorout(ele1,ele2,ele3){
		ele1.bind('mouseleave',function(){
			ele2.css('color',"#666");
			ele3.css('color',"#666");
			ele2.animate({left:-60,opacity:0.1},500);
			ele3.animate({left:960,opacity:0.1},500);
		});
	};
		
	yarrowmovein($('.yswiper-container'),$('.yleftarrow'),$('.yrightarrow'),$('.ybuttonLeftRight'));
	yarrowmovein($('.yUpcoming'),$('.ylowleftarrow'),$('.ylowrightarrow'),$('.ylowbuttonLeftRight'));
	yarrorout($('.yswiper-container'),$('.yleftarrow'),$('.yrightarrow'));
	yarrorout($('.yUpcoming'),$('.ylowleftarrow'),$('.ylowrightarrow'));
	
	//获取数据 页面load就加载
	$(function(){
		
		var str ="";
		var str1="";
		var str3 ='';
		var str2='';
		//立即加载头部
		
		//首页上部数据获取
		$.ajax({
		    url: 'https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=44&type=1&k=2139792',
			type: 'get',
			headers:{
				"X-Client-Info": '{"a":"3000","ch":"1002","v":"5.0.4","e":"1563798652721554505868"}',
		        "X-Host": "mall.film-ticket.film.list",
			},
		    dataType: 'json',//发送 json 请求
		    success: function (data){
				  for(let i = 0;i<data.data.films.length;i++){
					 // console.log(data.data.films[i]); 
					  if(data.data.films[i].grade == undefined){
						 data.data.films[i].grade ='';
					  }
					str +=`<li class="ymovie" yfilmsId=${data.data.films[i].filmId}><a href="movieSecond.html" class="ypictures"><img src="${data.data.films[i].poster}"></a><h4>${data.data.films[i].name}</h4><div class="ychooseSeat"><a  class="ylookseat" >选座购票</a><p class="ygrade">${data.data.films[i].grade}</p></div></li>`;	      
				  }
				  $('.ymovie-list').append(str);
				  $(".ycountPic").html(1+'/'+Math.ceil(data.data.films.length/6)); 
					
					yaddlose($('.ymovie-list'),$('.ymovie'),$('.ycountPic'));
			
			},
		});
		
		
		
		//拿影片排名信息
		$.ajax({
		    url: 'https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=2139792',
			type: 'get',
			headers:{
				"X-Client-Info": '{"a":"3000","ch":"1002","v":"5.0.4","e":"1563798652721554505868"}',
		        "X-Host": "mall.film-ticket.film.list",
			},
		    dataType: 'json',//发送 json 请求
		    success:function (data){
				// console.log(data); 
				for(var i=0;i<10;i++){
					 if(data.data.films[i].grade == undefined){
						data.data.films[i].grade ='';
					}
					str3 +=`<li yfilmsId=${data.data.films[i].filmId}><span>${i+1}.</span><h4>${data.data.films[i].name}<em>${data.data.films[i].grade}</em></h4><div class="ystage-photo" ><a href="moviesecond.html"><img src=${data.data.films[i].poster}></img></a></div></li>`;
				};
				$('.yrank').append(str3);
				$('.yrank').children(":first").find('.ystage-photo').css('display','block');
				$('.yrank').on('mouseenter','li',function(){
					$("li .ystage-photo").hide();
					($(this).find('.ystage-photo')).show();	
				});
				$('.yrank').on('mouseleave','li',function(){
					($(this).find('.ystage-photo')).show();		
				});
			},
			
			
		});
		//电影票房排行动画效果
		
		
		
		
		
		//首页下部数据获取
		$.ajax({
		    url: 'https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=13&type=2&k=2580615',
			type: 'get',
			headers:{
				"X-Client-Info": '{"a":"3000","ch":"1002","v":"5.0.4","e":"1563798652721554505868"}',
		        "X-Host": "mall.film-ticket.film.list",
			},
		    dataType: 'json',//发送 json 请求
		    success:function (data){
				for(var i=0;i<data.data.films.length;i++){
					str1+=`<li class="yUpmovie"><a href="moviesecond.html" class="yUppictures"><img src=${data.data.films[i].poster}></a><h4>${data.data.films[i].name}</h4><div class="ylookinfo"><a>查看详情</a></div></li>`;
				
				};		
				$('.yUpList').append(str1);
 				$(".ycountPict").html(1+'/'+Math.ceil(data.data.films.length/6)); 
				yaddlose($('.yUpList'),$('.yUpmovie'),$('.ycountPict'));	
			},
		});
		//拿头部城市信息
		$.ajax({
		    url: 'https://m.maizuo.com/gateway?k=4112822',
			type: 'get',
			headers:{
				"X-Client-Info": '{"a":"3000","ch":"1002","v":"5.0.4","e":"1563798652721554505868"}',
		        "X-Host": "mall.film-ticket.city.list",
			},
		    dataType: 'json',//发送 json 请求
		    success: function (data){
					// console.log(data.data.cities); 
					 var citylist=data.data.cities;
					 for(var i=0,leng=citylist.length;i<leng;i++){
						 if(citylist[i].isHot==1){
							 str2 +=`<li citylist=${citylist[i].cityId}><a href="#">${citylist[i].name}</a></li>`;	  
						 }
					 }
					 $('.yHotcity').append(str2);
					//头部定位显示
					$(".ySite").hover(function(){
							$('.ychooseCity').show();
							
						},function(){
							$('.ychooseCity').hide();
						
					});	
					//存储城市信息到缓存
					$('.yHotcity').on('click','li',function(){
						$('.yAddress').html($(this).html());
						var cityid = $(this).attr('citylist');
					});
		    },
		});
		

	});
	
	
	

	//点击图片跳转到次页
	function ySaveData(ele1,ele2){
		ele1.on('click','li',function(){
			var filmid = $(this).attr("yfilmsId");
			document.cookie="filmid="+filmid;
			var obj = $(this).children(ele2);
			window.location.href=$(obj[0]).attr("href");	
		});
	};
	ySaveData($('.ymovie-list'),'a');
	ySaveData($('.yrank'),'a');
	ySaveData($('.yUpList'),'.yUppictures');

	
	//换页轮播效果
	//判断图片张数是否够轮播 不够就添加
	function yaddlose(ele1,ele2,ele3){
		var length =ele1.children().length;
		var count = parseInt(length/6);
		ele3.html =1+'/'+Math.ceil(length/6);
		if(length%6!=0){
			var lose = length%6;//剩余张数
			for(var i= 6-lose;i>0;i--){
				var clone_li = ele2.eq(6*count-i).clone(true);
				ele2.eq(6*count).before(clone_li[0]);
			}
		}
	};
		
	
	//上部轮播
	//右边按钮效果
	var index = 0;
	function yMoveUlRight(ele1,ele2,ele3){
		ele1.on('click',function(){
			var length = ele2.children().length;
			var page = Math.ceil(length/6);
			if(index == page-1){
				ele2.animate({left:0},500);
				index = 0;
			}
			else{
				++index;
			}
			ele2.animate({left:-956*(index)+index*2},500,'swing');
			ele3.html((index+1)+'/'+page);
		});
	};
	
	//左边按钮效果
	function ymoveleft(ele1,ele2,ele3){
		ele1.click(function(){
			var length = ele2.children().length;
			var page = Math.ceil(length/6);
			console.log(index);
			if(index == 0){
				index = page-1;
				ele2.animate({left:-956},10,'swing');
				console.log(index);
			}else{
				index--;
				console.log(index);
			}
			ele2.animate({left:(-956*index)+(2*index)},500,'swing');
			ele3.html(index+1+'/'+page);
		})
	};
	ymoveleft($('.yleftarrow'),$('.ymovie-list'),$('.ycountPic'));
	yMoveUlRight($('.yrightarrow'),$('.ymovie-list'),$('.ycountPic'));
	
	//下部轮播
	var ycount =0;
	function yMoveUlRight1(ele1,ele2,ele3){
		ele1.on('click',function(){
			var length = ele2.children().length;
			var page = Math.ceil(length/6);
			if(ycount == page-1){
				ele2.animate({left:0},1000);
				ycount = 0;
			}
			else{
				++ycount;
			}
			ele2.animate({left:-956*(ycount)+ycount*2},500,'swing');
			ele3.html((ycount+1)+'/'+page);
		});
	};
	function ymoveleft1(ele1,ele2,ele3){
		ele1.click(function(){
			var length = ele2.children().length;
			var page = Math.ceil(length/6);
			console.log(index);
			if(ycount == 0){
				ycount = page-1;
				ele2.animate({left:-956},10,'swing');
				
			}else{
				ycount--;
			}
			ele2.animate({left:(-956*ycount)+(2*ycount)},500,'swing');
			ele3.html(ycount+1+'/'+page);
		})
	};
	
	ymoveleft1($('.ylowleftarrow'),$('.yUpList'),$('.ycountPict'));	
	yMoveUlRight1($('.ylowrightarrow'),$('.yUpList'),$('.ycountPict'));
})();
(function(){
	//获取cookie数据
	function getCookie(key){
	    var cookies = document.cookie;//获取cookie
	    var arr = cookies.split('; ');//["user1=xm", "user4=xl", "user2=xw", "user3=xc"]
	    for (var i = 0, len = arr.length; i < len; i++){
	        var arr2 = arr[i].split('=');//['user2','xw']
	        if (arr2[0] == key){
	            return unescape(arr2[1]);//解码
	        }
	    }
	    return '';
	};
	//加载立即执行
	$(function(){
		var str3='';
		var stractor='';
		var str1='';
		var str2='';
		//获取缓存数据
		var ycookieid = getCookie('filmid');
		//拿影片内容信息
		 $.ajax({
			url: 'https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=44&type=1&k=2139792',
			type: 'get',
			headers:{
				"X-Client-Info": '{"a":"3000","ch":"1002","v":"5.0.4","e":"1563798652721554505868"}',
				"X-Host": "mall.film-ticket.film.list",
			},
			dataType: 'json',//发送 json 请求
			success: function (data){
				var stractor="";
				 var yarr = data.data.films;
				  for(var i=0,leng=yarr.length;i<leng;i++){
					  if(yarr[i].filmId == ycookieid ){
							$(".ytopContent").find('h4').html(yarr[i].name);
							$(".ytopContent").find('.ymovieposter').attr('src',yarr[i].poster);
							$(".ytopContent").find('.ylevel').html(yarr[i].grade);
							$(".ysummarize").html(yarr[i].category);
							$(".yduration").html(yarr[i])
							$(".ysynopsis").find('span').html(yarr[i].synopsis);
							for(let j=0;j<yarr[i].actors.length;j++){
								stractor += yarr[i].actors[j].name+',';
							}
							$(".yActorList").html("演员表  :  "+stractor);
 					  }
				  }
			}
		});
		
		//拿电影影院信息
		if(ycookieid =="undefined"){
			$('.yCineplexList').empty();
			$('.yCineplexList').html('还没有上映哦!(*╹▽╹*)');
			$('.yCineplexList').css({"font-size":'20px','text-align':'center','margin-top':'20px'});
			$('.yTopCon-right').empty();
			$('.ygetMore').empty();
			$('.ymovieposter').attr('src','images/yother.jpg');
			$('.yTopCon-right').html('木有了');
		}else{
			$.ajax({
			    url: 'https://m.maizuo.com/gateway?cityId=440300&ticketFlag=1&k=4102088',
				type: 'get',
				headers:{
					"X-Client-Info": '{"a":"3000","ch":"1002","v":"5.0.4","e":"1563798652721554505868"}',
			        "X-Host": "mall.film-ticket.cinema.list",
				},
			    dataType: '',//发送 json 请求
			    success:function (data){
					 // console.log(data.data.cinemas);
					 
					var localcer = data.data.cinemas;
					for(var i=0;i<8;i++){
						 str1+=`<li class="yCineplexInf"><div class="yInf"><h4>${localcer[i].name}</h4><p> ${localcer[i].address}</p></div><div class="yPrices"><i>${localcer[i].lowPrice/100}</i>起</div><div class="yChoosein"><a>选座购票</a></div></li>`;
					
					}
					$('.yCineplexList').append(str1);
			    }
			})
		};
		
		
		//拿区域信息
		$.ajax({
		    url: 'https://m.maizuo.com/gateway?cityId=440300&ticketFlag=1&k=4102088',
			type: 'get',
			headers:{
				"X-Client-Info": '{"a":"3000","ch":"1002","v":"5.0.4","e":"1563798652721554505868"}',
		        "X-Host": "mall.film-ticket.cinema.list",
			},
		    dataType: '',//发送 json 请求
		    success:function (data){
				var locallist =data.data.cinemas;
				var localarr=[];
				for(var i=30,leng=locallist.length;i<leng;i++){
					localarr.push(locallist[i].districtName);
				}
				 localarr =[...new Set(localarr)];
				var localstr =JSON.parse(JSON.stringify(localarr)) ;
				document.cookie ="localarr="+localarr; 
		    }
		});
		
		//拿区域id
		$.ajax({
		    url: 'https://m.maizuo.com/gateway?cityId=440300&ticketFlag=1&k=4102088',
			type: 'get',
			headers:{
				"X-Client-Info": '{"a":"3000","ch":"1002","v":"5.0.4","e":"1563798652721554505868"}',
		        "X-Host": "mall.film-ticket.cinema.list",
			},
		    dataType: '',//发送 json 请求
		    success:function (data){
				var locallist =data.data.cinemas;
				var localarrid=[];
				for(var i=0,leng=locallist.length;i<leng;i++){
					localarrid.push(locallist[i].districtId);
				}
				 localarrid =[...new Set(localarrid)];
				var localstr =JSON.parse(JSON.stringify(localarrid)) ;
				document.cookie ="localarrid="+localarrid; 
		    }
		});
		//拿日期
		 $.ajax({
		    url: 'https://www.tianqiapi.com/api?callback=mycb&city=',
		    type: 'get',
		    data: '深圳',
		    dataType: 'jsonp',//发送 jsonp 请求
		    jsonp: 'cb',
		    jsonpCallback: 'mycb',
		    success: function (data){
				//console.log(data.data);
				var datalist=data.data;
		        for(var i=0,leng=data.data.length;i<leng;i++){
					str2+=`<li >${datalist[i].day}</li>`;
				}
				$('.yweekdate').append(str2);
				$('.yweekdate').children(':first').addClass('ybgc');
		    },
		    error: function (er){
		        alert('请求失败');
		    }
		});
	
	});
	
	//标记喜欢效果
	$('.ylike').toggle(function(){
		$('.ylike').find('.ywantlook').html('已标记想看');
		$('.icon-icon-test').css('color','#ff318c');
	},function(){
		$('.ylike').find('.ywantlook').html('想看');
		$('.icon-icon-test').css('color','#fff');
	});
	
	//拿区域数据 点击区域全部区域模块隐藏
	$('.yadministrativeregion').click(function(){	
		var areaname ='';
		$('.ylocalarea').empty();
		$('.yspecificarea').css('display','block');
		var localid = getCookie('localarr');
		var cookies = getCookie('localarrid');
		var arr = localid.split(',')
		var arr1 = cookies.split(',')
		for(var i=0,leng=arr.length;i<leng;i++){
			areaname += `<li localarrid=${arr1[i]}><span>${arr[i]}</span></li>`
		}
		$('.ylocalarea').append(areaname);
	});
	$('.ybgc').click(function(){
		$('.yspecificarea').css('display','none');
	});
	
	//排他去重日期效果
	//排他去重区域效果
	function yCleartwo(ele){
		ele.on('click','li',function(){
			ele.children().each(function(index,item){
				$(this).removeClass('ybgc');
			})
			$(this).addClass('ybgc');
			
		})
	};
	yCleartwo($('.yareadate'));
	yCleartwo($('.yweekdate'));
	// yCleartwo($('.ylocalarea'));
	//获取限制条数影院信息
	$('.ylocalarea').on('click','li',function(){
		var str1='';
		$('.yCineplexList').empty();
		var localarrid =$(this).attr('localarrid');
		$.ajax({
		    url: 'https://m.maizuo.com/gateway?cityId=440300&ticketFlag=1&k=4102088',
			type: 'get',
			headers:{
				"X-Client-Info": '{"a":"3000","ch":"1002","v":"5.0.4","e":"1563798652721554505868"}',
		        "X-Host": "mall.film-ticket.cinema.list",
			},
		    dataType: '',//发送 json 请求
		    success:function (data){
				 // console.log(data.data.cinemas);
				var localcer = data.data.cinemas;
 				for(var i=0;i<localcer.length;i++){
					if(localcer[i].districtId==localarrid){
						 str1+=`<li class="yCineplexInf"><div class="yInf"><h4>${localcer[i].name}</h4><p> ${localcer[i].address}</p></div><div class="yPrices"><i>${localcer[i].lowPrice/100}</i>起</div><div class="yChoosein"><a>选座购票</a></div></li>`;
					}
 				}
				$('.yCineplexList').append(str1);
				if($('.yCineplexList').children().length>5){
					for(let j=5;j<$('.yCineplexList li').length;j++){
						$($('.yCineplexList li').eq(j)[0]).css('display','none');
					}
				}
		    }
		});
	});
	//加载更多效果
	$('.ylookmoreci').click(function(){
		if($('.yCineplexList').children().length>5){
				for(let j=5;j<$('.yCineplexList li').length;j++){
					$($('.yCineplexList li').eq(j)[0]).css('display','block');
				}
				alert('全部送到咯');
		}else {
			alert('没有更多啦');
		}
	});
	

})();