$(document).ready(function(){
$("#myCarousel").carousel({
		interval:2000
	})
})
$(document).ready(function(){
$("#myCarousel1").carousel({
		interval:2000
	})
})

//划过效果
$(document).ready(function(){
				$("#top").mouseenter(function(){
					$(".bottom").css("background","rgb(136,194,63)");
					$(".bottom").stop(true).animate({"top":"60%"},300);
				})
				$("#top").mouseleave(function(){
					$(".bottom").css("background","rgba(051,051,051,0.6)");
					$(".bottom").stop(true).animate({"top":"90%"},300);
				})
				$("#top1").mouseenter(function(){
					$(".bottom1").css("background","rgb(136,194,63)");
					$(".bottom1").stop(true).animate({"top":"60%"},300);
				})
				$("#top1").mouseleave(function(){
					$(".bottom1").css("background","rgba(051,051,051,0.6)");
					$(".bottom1").stop(true).animate({"top":"90%"},300);
				})
				$("#top2").mouseenter(function(){
					$(".bottom2").css("background","rgb(136,194,63)");
					$(".bottom2").stop(true).animate({"top":"60%"},300);
				})
				$("#top2").mouseleave(function(){
					$(".bottom2").css("background","rgba(051,051,051,0.6)");
					$(".bottom2").stop(true).animate({"top":"90%"},300);
				})
			})