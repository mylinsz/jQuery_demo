
$(function(){
	
	$("img").each(function(i){
	   this.src = "test" + i + ".jpg";
	 });
	 
	 $("img").each(function(){
	  $(this).toggleClass("example");
	});
	
	$("button").click(function () { 
		$("div").each(function (index, domEle) {
		  // domEle == this 
		  //alert(index);
		  //alert(domEle);
		  $(domEle).css("backgroundColor", "yellow");  
		  if ($(this).is("#stop")) {
			  $("span").text("Stopped at div index #" + index); 
			  return false; 
		  } 
		});
	});
	
})