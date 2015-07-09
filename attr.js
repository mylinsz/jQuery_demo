
//延迟加载
$(function(){
	/*
	alert($('div').attr('title')); //undefined
	
	$('div').attr('title', '我是标题');
	alert($('div').attr('title'));
	$('div').attr('title', function(index){
		return '我是标题' + index;
	});
	//value：表示属性原本的值
	$('div').attr('title', function(index, value){
		return '由' + value + ' 改为：新标题' + (index+1);
	});
	
	alert($('div').html());
	$('div').html(function(index){
		return '我是' + (index+1) + '号div';
	});
	$('div').html(function(index, value){
		return '我是' + (index+1) + '号div，覆盖了原来的内容：' + value;
	});
	
	alert($('div').css('color')); //rgb(0, 0, 0)
	$('div').css('color', 'red'); //设置元素行内CSS样式颜色为红色：style="color: red;"
	$('div').css('color', function(){ //和上面的实现效果一样，但是没有涉及到计算的话，使用函数没有意思。
		return 'red';
	});
	
	alert($('div').css(['color', 'height', 'width'])); //[object Object]
	var box = $('div').css(['color', 'height', 'width']);
	alert(box); //[object Object]
	alert(box[0]); //[object HTMLDivElement]
	alert(box[1]); //undefined
	for(var i in box){
		alert(i + ':' + box[i]);
	}

	var box = $('div').css(['color', 'height', 'width']);
	for(var i in box){
		alert(i + ':' + box[i]); //打印的东西看不懂？？？
	}
	*/
	
	// var box = $('div').css(['color', 'height', 'width']);
	// alert(box); //对象数组 [object Object]
	// for(var i in box){
	// 	alert(i + ':' + box[i]);
	// }
	// $.each(box, function(attr, value){
	// 	alert(attr + ':' + value);
	// });

	// alert($('div')[0]);
	// alert($('div')[1]);

	// $('div').each(function(index, element){
	// 	alert(index + ':' + element);
	// });
	
	// $('div').css({
	// 	'color' : 'red'
	// });

	$('div').css('width', function(index, value){
		// alert(value); //1424
		return parseInt(value)-500 + 'px';
	});

});
