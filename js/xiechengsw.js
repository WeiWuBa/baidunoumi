var mySwiper = new Swiper ('.sw', {
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项
    autoplay:true,
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
	  clickable:true,
    },
     speed:300,
	autoplay : {
		delay:3000
	},
	
    // 如果需要前进后退按钮
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
    // 
    // // 如果需要滚动条
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  })        
  var mySwiper = new Swiper ('.swn', {
      direction: 'horizontal', // 水平切换选项
      loop: true, // 循环模式选项
			 navigation: {
			  nextEl: '.swiper-button-next',
			  prevEl: '.swiper-button-prev',
			},
    })   
	
