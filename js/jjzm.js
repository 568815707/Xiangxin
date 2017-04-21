$(function(){
	$("div.child").children("div.imgs").hover(function(){
		$(this).find($("div.imgs-tit")).css({"background-color":"rgb(136,194,63)","top":"20%","transition-property":"all","transition-duration":"0.8s"});
		$(this).find($("div.imgs-tit")).find("a").css({"color":"#fff","transition-property":"all","transition-duration":"0.8s"});
	},function(){
		$(this).find($("div.imgs-tit")).css({"background-color":"rgba(51,51,51,0.5)","top":"90%","transition-property":"all","transition-duration":"0.8s"});
		$(this).find($("div.imgs-tit")).css({"color":"#ddd","transition-property":"all","transition-duration":"0.8s"});
	})
    
    // 轮播图*****************
    function mq(){
       $("#ul-img").animate({"left":"-=210px"},2500,function(){
          $(this).children().first().appendTo($(this));
          $(this).css("left","0px");
       })
    }
   j=setInterval(mq,2500);
   $("#ul-img").children("li").hover(function(){
   	clearInterval(j);
    $(this).children().children("img").css("border","1px solid #95be1f");
   },function(){
   	j=setInterval(mq,2500);
    $(this).children().children("img").css("border","1px solid #999");
   })
})
// var contents=document.getElementById('cont');
//     var ul1=document.getElementById('ul-img');
//     function mq(){
//     	contents.scrollLeft+=20;
//         if(contents.scrollLeft==210){
//         	ul1.appendChild(ul1.children[0]);
//         }
//      }
//      i=setInterval(mq(),500);