$(function(){
	// 图片点击切换
		$("div.d2 img").click(function(){
			var urls = $(this).attr("src");
			$("#pdc").children("img").attr("src",urls);
		});
		
		// 页签切换
		$("button").click(function(){
			var index=$(this).index();
			$(this).addClass("active").siblings().removeClass("active");
			$(".tab_row2").children("span:eq("+index+")").show().siblings().hide();
			$("#tab_toggle").children("div:eq("+index+")").show().siblings().hide();
			$("#footer").show();
		});
		

//图片滚动 
        var $move=0;
        function scrollimg(){
           $move+=10;
           if($("#gdtw").scrollLeft()==200){
             $("#gdtw ul").append($("#gdtw ul").children().first());
             $("#gdtw").scrollLeft(0);
            $move=0;
           }else{
           $("#gdtw").scrollLeft($move);
          }
        }
        j=setInterval(scrollimg,200);  
        $("#gdtw").hover(function(){
        	clearInterval(j);
        },function(){
        	j=setInterval(scrollimg,100);  
        })


	});

