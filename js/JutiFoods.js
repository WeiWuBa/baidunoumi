(function(){
    $('header').load('header.html');
})();
(function(){
    $('footer').load('footer.html');
})();

window.onscroll = function(){
    if(document.documentElement.scrollTop>573){
        $('.L-content2 .L-dlwai').css({"position":"fixed","top":0,"margin-left":"30px"});
    }else{
        $('.L-content2 .L-dlwai').css("position","static");
    }
};
var L_shujuku = null;
$.ajax({
    url:"./json/L-DeliciousFoods.json",
    type:"POST",
    dataType:"json",
    success:function(data){
        L_shujuku = data;
        console.log(1);
        L_jiashuju();
    },
    failed:function(data){
        console.log(data);
    }
})

function  L_jiashuju(){
    console.log(2);
    var index = JSON.parse(localStorage.getItem("L_goods")).L_code;
    for(var i=0 ,len=L_shujuku.length;i<len;i++){
        if(L_shujuku[i].L_code==index){
            console.log(3);
            $(".L-mianbao").html(L_shujuku[i].L_FoodsName);
            $(".L-shop-box .L-shop-title span").html(L_shujuku[i].L_FoodsName);
            $(".L-content .L-content-left .L-shop-box .L-shop-logo img").attr("src",L_shujuku[i].L_FoodsImg);
            $(".L-ulwai .L-shopping1 .L-shop-foods1 .L-a1-img1 img").attr("src",L_shujuku[i].L_FoodsImg);
            $(".L-ulwai .L-shopping1 .L-shop-foods1 .L-a2-h31 h3").html(L_shujuku[i].L_FoodsName);;
            $(".L-ulwai .L-shopping1 .L-shop-foods1 .L-a1-img1 img ").attr("src",L_shujuku[i].L_FoodsImg);
            $(".L-ulwai .L-shopping1 .L-shop-foods1 .L-message11 ").html(L_shujuku[i].L_FoodsName);
            $("title").html(L_shujuku[i].L_FoodsName);
            $(".L-dlwai dl dd .L-a1-img1 img ").attr("src",L_shujuku[i].L_FoodsImg);
        }
    }
    for(var j=0;j<17;j++){
        var li=$(".L-ulwai .L-haohua .L-shop-haohua:nth-child(1)").clone(true);
        $(".L-ulwai .L-haohua").append(li);
    }
   
}
// setTimeout(function(){
//     $('footer .re-footer-inner').css('margin','0 auto');
//     $('.tijiao').css('height','36px');
//     $('.searchInput').css('height','36px');
//     // $('.HeaNav1 .dl_f_xr').css({"display":"block","z-index":"999"});
//     $('.interlock_xr').css({'left':"217px"});
//     $('.HeaNav1 dl').css({'display':'block','width':"217px"});
// },0);

setTimeout(function(){
    $('footer .re-footer-inner').css('margin','0 auto');
    $('.tijiao').css('height','38px');
    $('.searchInput').css('height','36px');
	$('.HeaNav1 .dl_f_xr').css({"z-index":"999","position": "relative",
    "top": '-44px',"left": '-16px'});
    $('.interlock_xr').css({'left':"217px"});
    $('.HeaNav1 dl').css({'display':'block','width':"217px"});
	$('.form-right').css({'border':"2.5px solid #d6ad62"});
	$('.HeaNav1 dl dd a').css('font-size','14px');
},70);






    
