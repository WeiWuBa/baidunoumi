(function(){
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
	if(getCookie("checkbox") == "false" || getCookie("checkbox") == ''){
		removeCookie("account");
		removeCookie("password");
		removeCookie("checkbox");
		removeCookie("imgurl");
		removeCookie("name");
	}else{
		$(".checkbox").attr("checked",true);
	}
     $(".button_xr").click(function(){
		 var acc = $(".account_xr").val();
		 var pas = $(".password_xr").val();
		 var cbox = true;
		 var tab = false;
		$.ajax({
			url: 'json/register.json',
			type: 'get',
			cache: false,
			dataType: 'json',
			success: function(data){
				$.each(data,function(index,value){
					if(acc == data[index].account && pas == data[index].password){
						$(".mistake_xr").css("display","none");
						window.location.href = "http://10.36.136.49/baidunoumi/index.html";
						if($(".checkbox").prop('checked') == true){
							setCookie("account",acc,7);
							setCookie("password",pas,7);
							setCookie("checkbox",cbox,7);
							setCookie("imgurl",data[index].imgurl,7);
							setCookie("name",data[index].name,7);
						}else{
							setCookie("account",acc,7);
							setCookie("password",pas,7);
							setCookie("imgurl",data[index].imgurl,7);
							setCookie("name",data[index].name,7);
							setCookie("checkbox",tab,7);
						}
						return false;
					}else{
						$(".mistake_xr").css("display","block");
						// return false;
					}
				});
			}
		});
	 });
	    $(".account_xr").val(getCookie("account"));
	    $(".password_xr").val(getCookie("password"));
	    // $(".checkbox").attr("checked",getCookie("checkbox"));
})();
