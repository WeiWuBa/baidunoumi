//1、判断一个数是否是素数。
function isPrime(num){
	for (var i = 2; i < num; i++) {
		if(num % i == 0){
			//只要来这里执行，说明这个数不是一个素数
			return false;
		}
	}
	//以上循环中的代码执行不到，肯定会到这里来执行，说明这个数是一个素数。
	return true;
}
//2、兼容ie8获取class命名的元素对象集合。
		function getAllEleByClassName(className){
			//用于保存class命名的元素对象集合；
			var elements = [];
			//获取页面所有元素对象集合
			var all = document.getElementsByTagName("*");
			//console.log(all);
			//在元素集合中查找所有以className命名的元素，
			for (var i = 0; i < all.length; i++) {
				if(all[i].className == className){
					//把这些元素push到elements中
					elements.push(all[i]);
				}
			}
			return elements;
		}
//3、动态添加更换css
		function includeLinkStyle(conut){
			var url = "css/hs"+conut+".css";
			var head = document.getElementsByTagName('head')[0];
			var link = document.createElement("link");
			link.rel = "stylesheet";
			link.type = "text/css";
			link.href = url;
			head.appendChild(link);
		}
//4、获得随机整数
			function getRand(min_num,max_num){
				return parseInt(Math.random()*(max_num-min_num+1)+min_num);
				}
//5、获得随机数
			function getRandFloat(min_num,max_num){
				return parseFloat(Math.random()*(max_num-min_num+1)+min_num);
			}
//6、生成随机颜色
		function getColor(){
            var str = "#";
            var arr = ["1","2","3","4","4","5","6","7","8","9","a","b","c","d","e","f"];
            for(var i=0;i<6;i++){
                var num = parseInt(Math.random() * 16);
                str+=arr[num];
            }
            return str;
        }
        // setInterval(function (){
        //     document.body.style.background=getColor();
        // },200);

// 7、判断闰年  
	function isLeapYear() {   
    return (0 == this.getYear()%4&&((this.getYear()%100!=0)||(this.getYear()%400==0)));
}   
 //8、日期计算 
Date.prototype.DateAdd = function(strInterval, Number) {   //加在原型类上的新方法
    var dtTmp = this;  
    switch (strInterval) {   
        case 's' :return new Date(Date.parse(dtTmp) + (1000 * Number));  
        case 'n' :return new Date(Date.parse(dtTmp) + (60000 * Number));  
        case 'h' :return new Date(Date.parse(dtTmp) + (3600000 * Number));  
        case 'd' :return new Date(Date.parse(dtTmp) + (86400000 * Number));  
        case 'w' :return new Date(Date.parse(dtTmp) + ((86400000 * 7) * Number));  
        case 'q' :return new Date(dtTmp.getFullYear(), (dtTmp.getMonth()) + Number*3, dtTmp.getDate(), dtTmp.getHours(), dtTmp.getMinutes(), dtTmp.getSeconds());  
        case 'm' :return new Date(dtTmp.getFullYear(), (dtTmp.getMonth()) + Number, dtTmp.getDate(), dtTmp.getHours(), dtTmp.getMinutes(), dtTmp.getSeconds());  
        case 'y' :return new Date((dtTmp.getFullYear() + Number), dtTmp.getMonth(), dtTmp.getDate(), dtTmp.getHours(), dtTmp.getMinutes(), dtTmp.getSeconds());  
    }  
}  
// 9、取得日期数据信息  
//| 参数 interval 表示数据类型  
//| y 年 m月 d日 w星期 ww周 h时 n分 s秒  
  
function DatePart(interval)  {   
    var myDate = this;  
    var partStr='';  
    var Week = ['日','一','二','三','四','五','六'];  
    switch (interval)  
    {   
        case 'y' :partStr = myDate.getFullYear();break;  
        case 'm' :partStr = myDate.getMonth()+1;break;  
        case 'd' :partStr = myDate.getDate();break;  
        case 'w' :partStr = Week[myDate.getDay()];break;  
        case 'ww' :partStr = myDate.WeekNumOfYear();break;  
        case 'h' :partStr = myDate.getHours();break;  
        case 'n' :partStr = myDate.getMinutes();break;  
        case 's' :partStr = myDate.getSeconds();break;  
    }  
    return partStr;  
}  
// 10、若要显示:当前日期加时间(如:2009-06-12 12:00)

function CurentTime()
    { 
        var now = new Date();
       
        var year = now.getFullYear();       //年
        var month = now.getMonth() + 1;     //月
        var day = now.getDate();            //日
       
        var hh = now.getHours();            //时
        var mm = now.getMinutes();          //分
       
        var clock = year + "-";
       
        if(month < 10)
            clock += "0";
       
        clock += month + "-";
       
        if(day < 10)
            clock += "0";
           
        clock += day + " ";
       
        if(hh < 10)
            clock += "0";
           
        clock += hh + ":";
        if (mm < 10) clock += '0'; 
        clock += mm; 
        return(clock); 
    } 

function insertAfter(newNode,goalNode){
		var par = goalNode.parentNode;            //获取目标元素的父节点
		if(par.lastElementChild == goalNode){     //判断如果父节点的最后一个节点是目标节点的化就直接插入新标签
			par.appendChild(newNode);
		}else{			//反之，则最后一个元素节点是目标节点的兄弟节点，则直接在兄弟元素前面插入新节点
			par.insertBefore(newNode,goalNode.nextElementSibling);	//目标节点的下一个兄弟节点
		}
	
}


//11、设置cookie有效期
		function setCookie(key,val,day){
			var date = new Date();
			date.setDate(date.getDate() + day);
			document.cookie = " key +'=' + val'; expires = ' + date';"
		}
//12、获取cookie的方法：
        function getCookie(key){
            var cookies = document.cookie;
            var arr = cookies.split(';');
            for ( var i =0, len = arr.lenth; i < len; i++){
                var arr2 = arr[i].split('=');
                if(arr2[0] == key){
                    return arr2[1];
                }
            }
                return;
        }
//13、



