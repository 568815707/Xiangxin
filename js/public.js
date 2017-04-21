//手机
$(document).ready(function(e) {
	$("#content_mulu").click(function(e){
		$("#bnav").toggle(500);
		e.stopPropagation();
	});
// 点击其他地方收起菜单
	$("*").click(function (event) {
		if ($(this).attr("id") != "content_mulu"){
			if ($('#bnav').css('display') != 'none') {
				$("#content_mulu").click();
				event.stopPropagation();
			}
		}
	});

});
$(window).bind("load", function() {
	positionFooter();
});
function positionFooter() {
	var footerHeight = 0,
		footerTop = 0,
		$footer = $("#footer");
	footerHeight = $footer.height();
	footerTop = ($(window).scrollTop()+$(window).height()-footerHeight)+"px";
	if ( ($(document.body).height()+footerHeight) < $(window).height()) {
		$footer.css({
			position: "absolute",
			top: footerTop,
			width: "100%"
		});
	} else {
		$footer.css({
			position: "static",
			margin: "20px 0 0 0"
		});
	}
}
