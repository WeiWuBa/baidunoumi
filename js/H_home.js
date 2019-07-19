
//*****************************搜索框鼠标放上*********************** */
$('#search').on('mouseover',function(){
    $('#search').css({
        'border-color': '#5183ff',
        'box-shadow': '0 0 40px 0 rgba(81,131,255,.35)'
    });
    $('#search').on('mouseout',function(){
        $('#search').css({
            'border-color': '#ccc',
            'box-shadow': '0 0 40px 0 hsla(0,0%,56%,.2)'
        });
        $('.fangdj>i').css({
            'background' : 'url(http://zhaopin.baidu.com/static/newpczhaopin/c8365c4a1acbb89ca909012aa6dba999.png) no-repeat',
            'background-size': 'contain'
        })
    });
    $('.fangdj>i').css({
        'background' : 'url(http://zhaopin.baidu.com/static/newpczhaopin/d13628725f9a6c879b06461e73d0cf1b.png) no-repeat',
        'background-size': 'contain'
    });
})
//*****************************搜索框鼠标放上*********************** */

//*************************搜索框**********************
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
})
//*************************搜索框**********************

//*************************点击document清除掉所有的改挂显示**********************
    $("body").click(function (e) {
        if (!$(e.target).closest(".occupation").length) {
            $(".occupation>div").hide();
        }
    });
//*************************点击document清除掉所有的改挂显示**********************