require(["config"],function(){
	require(["jquery","load"],function(){
		console.log("加载注册页面的头尾");
	
		
		$(".tab").on("click",function(){
			$(".part").eq($(this).index()).addClass("part1").siblings(".part").removeClass("part1");
			console.log($(this).index());
		});
		//产品详情展示的tab切换
		$(".tabTip .chan1").on("click",function(){
//			console.log($(this).parent().index());
			$(this).css({"border-bottom":"none","background-color":"white"});
			$(".p").eq($(this).parent().index()).addClass("p1").siblings(".p").removeClass("p1");
			
		});
		
		//点击时将隐藏的元素显示出来
		$(".buyer_add").on("click",function(){
			$(".address_area_over").show();
		});
		$(".address_area_over dl dd").on("click",function(){
			$(".address_area_over").hide();
		});
		
		
		
		//放大镜
		require(["zoom"],function(){
			$("#img_0").elevateZoom({
				gallery:'gal1',
				cursor: 'pointer',
				galleryActiveClass: 'active', 
				imageCrossfade: true, 
				loadingIcon: 'http://www.elevateweb.co.uk/spinner.gif',
				lensShape : "square",
				zoomType : "window",
				zoomWindowWidth: 463,
				zoomWindowHeight: 463,
				cursor:"pointer",
				zoomWindowOffetx: 50,
				imageCrossfade:true,
				borderSize:2
				}); 
			$("#gal1").bind("click", function(e) {  
			  var ez=$('#gal1').data('elevateZoom');	
				$.fancybox(ez.getGalleryList());
			  return false;
			});
		});
		//放大镜完
	});
	
	
	
});