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