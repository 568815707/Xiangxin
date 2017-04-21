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

	});

