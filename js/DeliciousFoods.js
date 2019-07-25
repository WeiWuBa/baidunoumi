(function(){
    $('header').load('header.html');
})();
var yema = 0;
var dataBase =null;
$.ajax({
    url:"./json/L-DeliciousFoods.json",
    type:"POST",
    dataType:"json",
    success:function(data){
        yema = data.length;
        dataBase = data;
        L_jisuan(data,1);
    },
    failed:function(data){
        console.log(data);
    }
})

$(".L-yema").click(function(e){
        var e = e.target;
        if(e.nodeName.toLowerCase()=="button"){
            if (e.name == "last") {
                var y= Math.ceil(yema/20);
                if(y==e.parentNode.children.length-1){
                    history.go(0);
                    return;
                }else{
                    for(var i=0 ,len=e.parentNode.children.length-1;i<len;i++){
                        $('.L-yema button:nth-of-type(1)').remove();
                    }
                    for(var i=0;i<y;i++){
                        $(`.L-yema button:nth-child(${i+1})`).before($(`<button>${i+1}</button>`));
                        console.log($(`<button>${i+1}</button>`));
                    }
                    return;
                }
            }
            var x = parseInt(e.innerHTML);
            for(var i=0;i<20;i++){
                $('.L-shopping li:nth-of-type(2)').remove();
            }
             L_jisuan(dataBase,x);
             for(var i=0;i<e.parentNode.children.length;i++){
                e.parentNode.children[i].className = " iconfont";
             }
             e.className += " L-now";
             
        }
    }) ;

function L_jisuan(data,ma) {
    $(".L-tipdata").html(yema);
    var zhongshu=0;
    if(ma*20 > yema){
        zhongshu=yema;
    }else{
        zhongshu=ma*20;
    }
        for (var i =(ma-1)*20; i<zhongshu;i++) {
            var li = $('.L-shopping li:nth-of-type(1)').clone(true);
            li.css({"display":"block"});
            li.attr("L_code",i);
            switch (i%4) {
                case 0: 
                case 1:
                case 2:
                case 3: 
                    var x = i;
                    li[0].children[0].children[0].src=Lcode(x).L_FoodsImg;
                    li[0].children[1].children[0].innerText=Lcode(x).L_FoodsName;
                    li[0].children[2].children[0].innerHTML =Lcode(x).L_pingfen;
                    if(Lcode(x).L_pingfen.length>10){
                        li[0].children[2].children[0].className = "L-pingfen";
                        var fen = parseFloat(li[0].children[2].children[0].children[2].innerHTML);
                        li[0].children[2].children[0].children[1].style.width = (fen/5)*72+"px";
                    }
                    li[0].children[2].children[3].html =Lcode(x).L_price;
                    li[0].children[2].children[5].html =Lcode(x).L_addres;
                    li[0].children[3].children[0].html =Lcode(x).L_youhui1;
                    li[0].children[4].children[0].html =Lcode(x).L_youhui2;
                    $(".L-shopping").append(li);
                    break;
                default:
                    break;
            }   
        }
        function Lcode(Lcode){
            for(var i=0 ,len= data.length;i<len;i++){
                if(data[i].L_code==Lcode){
                    return data[i];
                }
            }
        }
}
var L_area = $(".L-bar-area");
var L_shenzsou = $(".L-shenzsou");
window.onscroll = function(){
   if(document.documentElement.scrollTop > 510){
        L_area.css({"position":"fixed","top":0,"background":"white"})
        L_shenzsou.css("display","inline-block");
   }
   else{
        L_area.css({"position":"static","top":0})
        L_shenzsou.css("display","none");
   }
}

$('.Lpinzhong2').click(function(){
    console.log(1);
    console.log($(".L-zhanwei").hasClass('L_tiaozheng'));
    if($(".L-zhanwei").hasClass('L_tiaozheng')){
        $(".L-zhanwei").removeClass("L_tiaozheng");
        $('.Lpinzhong2').html("更多&#xe615");
    }else{
        console.log(2);
        $(".L-zhanwei").addClass("L_tiaozheng");
        $('.Lpinzhong2').html("更多&#xe610");
    } 
});

$(".L-shopping").on('click','a',function(){
    //点击商品
    var L_code = $(this).parent().attr('L_code');
    console.log($(this).parent().attr('L_code'));
    if(localStorage.getItem("L_goods")){
        var codeArr = JSON.parse(localStorage.getItem("L_goods")).L_code;
    }else{
        var codeArr = [];
    }
    codeArr[0]=L_code;
    var jsonStr = JSON.stringify({"L_code":codeArr});
    localStorage.setItem('L_goods',jsonStr);
})







