require(["config"],function(){
//	require(["jquery","load"],function(){
//		console.log("加载注册页面的头尾");
//	});
	
	
	require(["jquery","template","load"],function($,template){
		//渲染当日精选板块
		$.ajax("/wawsai/mock/list.json").done(function(responseData){
			var html=template("goodList",{shangping:responseData.data});
			$(".list").html(html);
		});
	});
});