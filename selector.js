
//延时加载
$(function () {
	
  //$('#box').css('color', 'red'); //添加一个行为
  
  //$('div').css('color', 'green');
  
  //alert($('div').length);
  
  //alert($('#box').length);
  
  //jQuery核心自带的一个属性length或size()方法用于查看返回的元素个数
  //alert($('.box').length); 
  //alert($('.box').size());
  
  $('div').eq(1).css('color', 'red');
  
  $('.box').eq(0).css('color', 'green');
  
});
