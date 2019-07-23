
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
                    console.log(data);
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

//*************************banner轮播_职业选择部分ajax**********************
ajax({
    url: './json/H_banner_left.json',
    type: 'get',
    dataType: 'json',
    success: function(data){
        var json = JSON.parse(data);
        $('.banner_left').html('<li>')
        for(i = 0 ; i < json.length ; i++){
            $('.banner_left').append('<li>');
            for(j = 0 ; j < json[i].career.length ; j++){
                console.log();
                $('.banner_left').append('<a href="#">'+json[i].career[j]+'</a>')
            };
            $('.banner_left').append('<i class="left_arrow jiAnTou"></i></li>');
        }
        $('.banner_left').append('</li>')
    }
});
//*************************banner轮播_职业选择部分ajax**********************

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
var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项
    autoplay:true,
    // 如果需要分页器
    pagination :{
        el: '.swiper-pagination',
        clickable :true,
    },
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })
//*************************banner轮播**********************

//*************************点击document清除掉所有的改挂显示**********************
    $("body").click(function (e) {
        if (!$(e.target).closest(".occupation").length) {
            $(".occupation>div").hide();
        }
    });
//*************************点击document清除掉所有的改挂显示**********************

//*************************点击搜索框替换内容**********************

$('.occupation>div').on('click',function(e){
    var hUan = $('.occupation>span').text();
    $('.occupation>span').text($(e.target).text());
    $(e.target).text(hUan);
})


//*************************点击搜索框替换内容**********************

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

//*************************点击返回顶部**********************
$('.return').click(function(){
    if($('body').scrollTop()+$('html').scrollTop() != 0){
        var index = $('body').scrollTop()+$('html').scrollTop();
        var time = setInterval(function(){
            index-=20;
            $('body,html').scrollTop(index) ;
            if($('body').scrollTop()+$('html').scrollTop() == 0){
                clearTimeout(time)
            }
        },0.1)
    }
})
//*************************点击返回顶部**********************

//*************************点击分类出现侧边框和点击叉去除侧边框**********************
$('.fenlei').on('click',function(){
    var index = -300;
    var index2 = 0;
    var time = setInterval(function(){
        index +=3;
        index2 += 3;
        $('.bianqukuai').css({
            'right':index+'px'
        }) ;
        $('.right_black').css({
            'right':index2+'px'
        }) ;
        if(index == 0){
            clearTimeout(time)
        }
    },1)
});
$('.bianqukuai_top>i').on('click',function(){
    var index = 0;
    var index2 = 300;
    var time = setInterval(function(){
        index -=3;
        index2 -= 3;
        $('.bianqukuai').css({
            'right':index+'px'
        }) ;
        $('.right_black').css({
            'right':index2+'px'
        }) ;
        if(index == -300){
            clearTimeout(time)
        }
    },1)
})
//*************************点击分类出现侧边框和点击叉去除侧边框**********************

//*************************分类框内点击切换ajax**********************
$('.dalei_index').on('click',function(e){
    $('.dalei_index>li').css({
        'background':'#fff'
    })
    $(e.target).css({
        'background':'#f8f8f8'
    })
    console.log(e.target);
})
//*************************分类框内点击切换ajax**********************