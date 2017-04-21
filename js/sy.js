$(document).ready(function(){
		// 页签切换
		$(".tabCon").click(function(){
			var index = $(".tab_row1 span").index(this)+1;//默认从0开始，这里+1
			var len = $(".tab_row1 span").length;
			for (var i=1; i<=len; i++) {
				if (i == index) {
					$("#s"+i).show();
					$("#tab"+i).show();
					$($(".tabCon")[i-1]).addClass("active");
				} else {
					$("#s"+i).hide();
					$("#tab"+i).hide();
					$($(".tabCon")[i-1]).removeClass("active");
				}
			}
			// 页脚置底，重新计算
			positionFooter();
		});
	});