function img(){
   	document.getElementById("show").scrollLeft+=2%;
   	if(document.getElementById("show").scrollLeft>=100%){
   		document.getElementById("big").appendChild(document.getElementById("big").children[0]);
   		document.getElementById("show").scrollLeft=0;
   	}
   	 i=setTimeout("img()",100);
   }
   img();