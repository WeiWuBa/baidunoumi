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
		// if(getCookie("checkbox") == ""){
		// 	$(".yonhu_xr").css("display","none");
		// }
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
