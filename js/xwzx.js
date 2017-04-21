$(document).ready(function(){
	$("ul.cen_2 li a").click(function(){
		$(this).addClass("vis").next("span").addClass("cen2_sp");
		$(this).parents("li").siblings().children("a").removeClass("vis").next("span").removeClass("cen2_sp");
	})
	$("ul.cen_2 li").click(function(){
		var index=$(this).index();
		$("div.tab").children("div").eq(index).show().siblings().hide();
	})
})
