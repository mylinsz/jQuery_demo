
$(function(){
	// $('input:radio[name=serviceRadio]:checked').val()
	// alert($('input:radio[name=serviceRadio]:checked').val());

	//单选按钮
	// var serviceRadio = $('input:radio[name=serviceRadio]:checked').val();
	// if(serviceRadio=="是"){
	// 	// loadServiceIP();
	// 	alert($('input:radio[name=serviceRadio]:checked').val());
	// }else{
	// 	alert($('input:radio[name=serviceRadio]:checked').val());
	// }

	// alert($(':reset'));


	// document.write($(':reset').size());

	// document.write($(':radio').size());

	// document.write($(':input')[12]);

	var obj = $(':input');
	// for(var i in obj){
	// 	document.write("第" + i + "个input元素是：" + $(':input')[i] + "<br/>");
	// }

	for(var i=0; i<obj.size(); i++){
		document.write("第" + (i+1) + "个input元素是：" + obj[i] + "<br/>");
	}

});
