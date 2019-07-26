(function(){
		//取值
		function getCookie(key){
			var cookie = document.cookie;
			var arr = cookie.split("; ");
			for(var i = 0; i<arr.length; i++){
				var arr2 = arr[i].split("=");
				if(arr2[0] == key){
					return arr2[1];
				}
			}
			return '';
		}
		//存储
		function setCookie(key,val,day){
			var d = new Date();
			d.setDate(d.getDate()+day);
			document.cookie = key+'='+val+'; expires='+d;
		}
		//删除
		function removeCookie(key){
		    setCookie(key,'123',-2);
		}
		if(getCookie("imgurl") == '' || getCookie("name") == '' || getCookie("checkbox") == ''){
				$(".yonhu_xr").css("display","none");
		}else{
				var results = '<img src="'+getCookie("imgurl")+'" >&nbsp;&nbsp;Hi，<span class="name">'+getCookie("name")+'</span>&nbsp;&nbsp;<a class="tc" style="color: darkgoldenrod">退出</a>';
				$(".yonhu_xr").html(results);
				$(".yonhu_xr").css("display","block");
		}
		$(".tc").click(function(){
			removeCookie("account");
			removeCookie("password");
			removeCookie("checkbox");
			removeCookie("imgurl");
			removeCookie("name");
			$(".yonhu_xr").css("display","none");
		});	
		if(getCookie("checkbox") == "false"){
			removeCookie("account");
			removeCookie("password");
			removeCookie("checkbox");
			removeCookie("imgurl");
			removeCookie("name");
		}
})();
//个人中心 登录
(function(){
	//取值
	function getCookie(key){
		var cookie = document.cookie;
		var arr = cookie.split("; ");
		for(var i = 0; i<arr.length; i++){
			var arr2 = arr[i].split("=");
			if(arr2[0] == key){
				return arr2[1];
			}
		}
		return '';
	}
	$(".span_hover_xr").click(function(){
		if(getCookie("name")==''){
			$(".span_hover_xr").attr("href","http://10.36.136.49/baidunoumi/register.html");
		}else{
			$(".span_hover_xr").attr("href","http://10.36.136.49/baidunoumi/personalCenter.html");
		}
	});
	
})();
//关键字
(function(){
	if($(".searchInput").val() == ''){
		$(".gjc_xr").css("display","none");
	}
	$(".searchInput").keyup(function(){
		$.ajax({
			url: 'data/baidu.php',
			type: 'get',
			cache: false,
			data: 'wd='+$(".searchInput").val(),
			dataType: 'json',
			success: function(data){
				var str = '';
				$(data.s).each(function(index,value){
					str += '<li>'+data.s[index]+'</li>';
				});
				$(".gjc_xr").html(str);
				$(".gjc_xr li").mouseenter(function(){
					$(".gjc_xr li").each(function(index,value){
						$(".gjc_xr li").removeClass("select");
					});
					$(this).addClass("select");
					$(".searchInput").val($(this).html());
				});
				if($(".searchInput").val() == ''){
					$(".gjc_xr li").remove();
					$(".gjc_xr").css("display","none");
				}else{
					$(".gjc_xr").css("display","block");
				}
			}
		});
	});
	$('body').click(function(){
		$(".gjc_xr").css("display","none");
	});
	$(".searchInput").click(function(){
		$(".gjc_xr").css("display","block");
		return false;
	});
})();
