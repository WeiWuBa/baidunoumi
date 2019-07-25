(function(){
	$('.Z-st').click(function (){
			
			$('.Z-st').css('display','none');
			$('.Z-bt').css('display','none');
			$('.Z-main-bottom').css('display','block');
			// $('.Z-main-bottom-option').css('display','block');
		})
		$('.Z-sb').click(function (){
			
			$('.Z-st').css('display','block');
			$('.Z-bt').css('display','block');
			$('.Z-main-bottom').css('display','none');
			// $('.Z-main-bottom-option').css('display','block');
		})
		
		//获取尾部a标签链接
		$.ajax({
		    url: 'data/rmrx.json',
		    type: 'get',
		    cache: false,
		    dataType: 'json',
		    success: function (data){
				console.log(data);
		        var results = '';
		        $.each(data,function (index,item){
				results +='<a href="">'+item.ctfly+'</a>';
		        });
		        $('.Z-rmrx').html(results);
		    }
		});
		
		$.ajax({
		    url: 'data/gjx.json',
		    type: 'get',
		    cache: false,
		    dataType: 'json',
		    success: function (data){
				console.log(data);
		        var results = '';
		        $.each(data,function (index,item){
				results +='<a href="">'+item.gj+'</a>';
		        });
		        $('.Z-gjx').html(results);
		    }
		});
		$.ajax({
		    url: 'data/dz.json',
		    type: 'get',
		    cache: false,
		    dataType: 'json',
		    success: function (data){
				console.log(data);
		        var results = '';
		        $.each(data,function (index,item){
				results +='<a href="">'+item.dzjp+'</a>';
		        });
		        $('.Z-dz').html(results);
		    }
		});
			$.ajax({
		    url: 'data/hkjp.json',
		    type: 'get',
		    cache: false,
		    dataType: 'json',
		    success: function (data){
				// console.log(data);
		        var results = '';
		        $.each(data,function (index,item){
				results +='<a href="">'+item.hkjp+'</a>';
		        });
		        $('.Z-hkjp').html(results);
		    }
		});
		//切换出发与返回按钮的显示隐藏
		$('.Z-huan').mouseover(function (){
			$(".Z-huan").css("display","none");
			$(".Z-hover").css("display","block");
		})
		$('.Z-hover').mouseout(function (){
			$(".Z-huan").css("display","block");
			$(".Z-hover").css("display","none");
		})
		// 切换出发城市与返回城市的内容
		$('.Z-hover').click(function (){
			var a  = $('.Z-goto').val();
			$('.Z-goto').val($('.Z-come').val());
			$('.Z-come').val(a);
			var b=$('.Z-goto').attr('placeholder');
			$('.Z-goto').attr('placeholder',$('.Z-come').attr('placeholder'));
			$('.Z-come').attr('placeholder',b);
		})
		
		
		//滚动条向下滚动500px出现置顶按钮
		$(window).scroll(function (){
			console.log(111)
			var top= $(window).scrollTop();
			if(top>500){
				$('.Z-zhiding').css("display","block");
			}else{
				$('.Z-zhiding').css("display","none");
			}
		})
		
		//非动态的置顶
		// $('.Z-zhiding').click(function (){
		// 	$(window).animate(2000,'swing',function(){
		// 		$(window).scrollTop(0);
		// 	})
		// })
		//动态的置顶
		$('.Z-zhiding').click(function(){
			$('html').animate({scrollTop: '0px'}, 200,);
		});
		//选择单程的样式
		$('.Z-dancheng').click(function (){
			$('.Z-diyi').css("display","none");
			$('.Z-dier').css("display","none");
			$('.Z-zhongzhuan').css("display","none");
			$('.Z-gotime').css("display","block");
			$('.fanhui').css("display","block");
			$('.Z-huan').css("display",'block');
			$('.Z-jj').css('display','none');
			$('.fanhui span').css("color",'#CCC');
		})
		//选择往返的样式
		$('.Z-wangfan').click(function (){
			$('.Z-diyi').css("display","none");
			$('.Z-dier').css("display","none");
			$('.Z-zhongzhuan').css("display","none");
			$('.Z-gotime').css("display","block");
			$('.fanhui').css("display","block");
			$('.Z-huan').css("display",'block');
			$('.Z-jj').css('display','inline');
			$('.fanhui span').css("color",'#000');
		})
		
		
		//选择多程后的样式
		$('.Z-duocheng').click(function (){
			console.log(111)
			$('.Z-diyi').css("display","block");
			$('.Z-dier').css("display","block");
			$('.Z-zhongzhuan').css("display","block");
			$('.Z-gotime').css("display","none");
			$('.fanhui').css("display","none");
			$('.Z-huan').css("display",'none');
			$('.Z-jj').css('display','none');
		})
		
		//鼠标划过搜索酒店标签
		$('.Z-jj').on('mousemove',function(){
			$('.Z-jj').css('color','#fff');
			$('.Z-jj').css('background','#0066CC');
		})
		$('.Z-jj').on('mouseout',function(){
			$('.Z-jj').css('color','#33336B');
			$('.Z-jj').css('background','white');
		})
		$('.Z-cxan').click(function (){
			$(".cxt").css("display",'inline');
			$(".cxc").css("display",'none');
			$(".cxf").css("display",'none');
		})
		$('.Z-ctcx').click(function (){
			$(".cxt").css("display",'none');
			$(".cxc").css("display",'inline');
			$(".cxf").css("display",'inline');
		})
})();





