
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

//*************************ajax**********************
ajax({
    url: './json/H_index.json',
    type: 'get',
    dataType: 'json',
    success: function(data){
        var json = JSON.parse(data);
        var banner_li = '';
        var banner_a = '';
        var banner_span = '';
        var banner_baozhang = '';
//*************************banner轮播_职业选择部分ajax**********************
        for(i = 0 ; i < 12 ; i++){
            banner_a = '';
            for(j = 0 ; j < json[i].career.length ; j++){
                banner_a += '<a href="#">'+json[i].career[j]+'</a>';
            };
            banner_li += '<li QujIan="'+i+'">'+banner_a+'<i class="left_arrow jiAnTou"></i></li>';
        }
        $('.banner_left').html('<ul>'+banner_li+'</ul><div class="banner_level"></div>');
        banner_li='';   
        banner_a = '';
//*************************banner轮播_职业选择部分鼠标滑过事件**********************
        var level_QujIan = []
        function banner_level_QujIan(QujIan){
            switch (QujIan){
                case '0':
                    level_QujIan = [12,16];
                    break;
                case '1':
                    level_QujIan = [16,19];
                    break;
                case '2':
                    level_QujIan = [19,23];
                    break;
                case '3':
                    level_QujIan = [23,29];
                    break;
                case '4':
                    level_QujIan = [29,32];
                    break;
                case '5':
                    level_QujIan = [32,35];
                    break;
                case '6':
                    level_QujIan = [35,39];
                    break;
                case '7':
                    level_QujIan = [39,43];
                    break;
                case '8':
                    level_QujIan = [43,47];
                    break;
                case '9':
                    level_QujIan = [47,49];
                    break;
                case '10':
                    level_QujIan = [49,51];
                    break;
                case '11':
                    level_QujIan = [51,53];
                    break;
            }
            return level_QujIan
        }    
            $('.banner_left>ul>li').on('mouseenter',function(e){
                $(e.target).children('.left_arrow').css({
                    'display':'block'
                });
                $('.banner_level').css({
                    'display':'block'
                });
                
                $('.banner_left>ul>li').on('mouseleave',function(){
                    $('.left_arrow').css({
                        'display':'none'
                    });
                });
                $('.banner_left').on('mouseleave',function(){
                    $('.banner_level').css({
                        'display':'none'
                    })
                })
                banner_level_QujIan($(this).attr('QujIan'))
                for(i = level_QujIan[0] ; i < level_QujIan[1] ; i++){
                    banner_a = '';
                    for(j = 1 ; j < json[i].caRdeTail.length ; j++){
                        banner_a += '<a href="#">'+json[i].caRdeTail[j]+'</a>';
                    };
                    banner_li += '<li><span>'+json[i].caRdeTail[0]+'</span><div class="clearfix">'+banner_a+'</div></li>';
                }
                $('.banner_level').html('<ul>'+banner_li+'</ul>');
                banner_li='';   
            
            })
//*************************banner轮播_职业选择部分鼠标滑过事件**********************

//*************************banner轮播_职业选择部分ajax**********************


//*************************banner轮播_职业排行部分ajax**********************
        for(i = 53 ; i < 61 ; i++){
            banner_a = '';
            banner_a += '<span>'+json[i].seniority.nan+'</span>';
            banner_a += '<span>'+json[i].seniority.zhiye+'</span>';
            banner_a += '<span>'+json[i].seniority.gongzhi1+'</span>';
            banner_li += '<li><a href="#" class="clearfix">'+banner_a+'</a></li>';
        }
        $('.banner_right_cent').html("<ul>"+banner_li+"</ul>");
        banner_li='';   
        banner_a = '';
//*************************banner轮播_职业排行部分ajax**********************

//*************************全职保障部分ajax**********************

        for(i = 61 ; i < 64 ; i++){
            banner_a = '';
            banner_a = '<a href="#">'+json[i].quanzhi[0]+'</a>';
            banner_a += '<em class="string"></em><a href="#">'+json[i].quanzhi[1]+'</a>';
            banner_li += '<div class="subject_quanzhi_left4">'+banner_a+'</div>';
        }
        $('.subject_quanzhi_left').append(banner_li+'<a href="#">查看更多</a>');
        banner_li='';   
        banner_a = '';
//*************************全职保障部分ajax**********************

//*************************全职工作部分ajax**********************
        for(i = 64 ; i < 70 ; i++){
            banner_a = '';
            banner_baozhang ='';
            banner_span = '';
            for(g = 0 ; g < json[i].quanzhiGzuo.yaoqiu.length ; g++){
                banner_span +=   '<em class="string"></em><span>'+json[i].quanzhiGzuo.yaoqiu[g]+'</span>';
            }
            for(c = 0 ; c < json[i].quanzhiGzuo.baozhang.length ; c++){
                banner_baozhang += '<span><em>'+json[i].quanzhiGzuo.baozhang[c]+'</em></span>';
            }
            banner_li += '<li><a href="#" class="subject_quanzhi_right_a"><div>'+json[i].quanzhiGzuo.gongzuo+'</div><div>'+banner_span+'</div><div>'+json[i].quanzhiGzuo.gongshi+'</div><div><span>'+json[i].quanzhiGzuo.gongzhi+'</span>'+banner_baozhang+'</div></a></li>';
        }
        $('.subject_quanzhi_right').html('<ul>'+banner_li+'</ul>')
//*************************全职工作部分ajax**********************
    }
});


//*************************ajax**********************




//*************************点击切换**********************
//*************************点击切换**********************


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
})
//*************************分类框内点击切换ajax**********************