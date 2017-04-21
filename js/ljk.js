$(function(){
	$("#ul1 li a").click(function(){
	   $(this).attr("class","a1");
	   $(this).parent("li").siblings().children("a").attr("class","");
	   $(this).parent("li").children("span").attr("class","sp1");
	   $(this).parent("li").siblings().children("span").attr("class","");
	})
})
document.getElementById("a3").onclick=function(){
	document.getElementById("div2").className+=" show"
	document.getElementById("div6").className+="none";
}
document.getElementById("a4").onclick=function(){
	document.getElementById("div6").className+=" show"
	document.getElementById("div2").className+="none";
}