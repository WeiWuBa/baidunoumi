$ (function(){
	
	
	$('#C_hotelSearchCity').blur(function(){
		$.ajax({
			url:'https://t.nuomi.com/sz',
			// data:{
			// 	
			// },
			dataType:'json',//服务器返回json格式数据
			type:'get',//HTTP请求类型
			success:function(data){
				console.log(data);
			},
			error:function(xhr,type,errorThrown){
				
			}
		});
	});
	$('C_hotelCityDetail_tab').on('click',this,function(){
		alert(1);
	});
	

	
	
	
	
});








