require(["config"],function(){
	
	require(["jquery","template","load"],function($,template){
		//渲染当日精选板块
		$.ajax("mock/jingxuan.json").done(function(responseData){
			var html=template("jingxuan",{goods:responseData.data});
			$(".dangrijingxuan").html(html);
		});
		//渲染定制和设计
		$.ajax("mock/dingzhituijian.json").done(function(responseData){
			var html=template("dingzhituijian",{dings:responseData.data});
			$(".dingzhi_box").html(html);
		});
		//设计
		$.ajax("mock/shejijingxuan.json").done(function(responseData){
			var html=template("shejijingxuan",{shejis:responseData.data});
			$(".sheji_box").html(html);
		});
		//创意（idea）
		$.ajax("mock/desinger.json").done(function(responseData){
			var html=template("desin",{ideas:responseData.data});
			$(".designerList").html(html);
		});
		
		
		console.log("...........................");
		
		
		require(["jquery","carcousl"],function(){
			console.log("轮播加载完毕");
			$('.carousel').carousel({
				  interval: 2000
			});
			
			
		});
	});
});
