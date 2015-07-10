
// $(function(){
// });

function createAppSumbit(){
	var appName = $('#appName').val();
	var reg = /^[a-zA-Z][a-zA-Z0-9]*$/;

	if(appName != ""){
		// alert("应用名称是：" + appName);
		// alert(appName.match(reg)); //match(): 该方法类似 indexOf() 和 lastIndexOf()，但是它返回指定的值，而不是字符串的位置。
		if (appName.match(reg) == null) {
			$("#appName").focus();
			alert("应用名称只能包含英文字符和数字，并且只能以英文开头！");
			return;
		}
	}else{
		alert("应用名称不能为空，请输入应用名称！");
		$('#appName').focus();
		return;
	}
	alert(appName);

	// 使用全局匹配的正则表达式来检索字符串中的所有数字：
	// var str="1 plus 2 equal 3";
	// document.write(str.match(/\d+/g)); //整个页面显示了：1,2,3

}

