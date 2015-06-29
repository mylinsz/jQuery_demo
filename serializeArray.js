
$(function(){
	var fields = $("select, :checkbox, :radio").serializeArray();
	//alert(fields);
	//jQuery.each( fields, function(i, field){
	$.each( fields, function(i, field){
	  $("#results").append(field.value + " ");
	});
})

