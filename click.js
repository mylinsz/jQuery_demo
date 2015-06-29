
//延时加载
$(function(){
	$('input').click(function(){
		alert("OK");
	});
	
	$("#results").append( "<tt>" + $("form").serialize() + "</tt>" );
	
});



alert($ === jQuery); //相等 恒等

alert($);
