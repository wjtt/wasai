require(["config"],function(){
	require(["jquery","load"],function(){
		console.log("加载注册页面的头尾");
		$(".tab").on("click",function(){
			$(".part").eq($(this).index()).addClass("part1").siblings(".part").removeClass("part1")
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