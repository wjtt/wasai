require(["config"], function() {

	require(["jquery", "template", "load", "cookie"], function($, template) {
		$.cookie.json = true;
		//渲染板块
		$.ajax("/wawsai/mock/list.json").done(function(responseData) {
			var html = template("goodList", {
				shangping: responseData.data
			});
			$(".list").html(html);
		});
		//添加到购物车
		$(function() {
			// 将“加入购物车”的点击事件委派给 class为list 的元素
			$(".list").on("click", ".addTocar", function(e) {
				/* 将当前点击的"加入购物车"所在盒子商品数据保存到对象中 */
				// 获取"加入购物车"的父节点
				var user = $.cookie("login_user");
				if(!user){location="login.html";}
				else{
					var _p = $(this).parent();
					var product = {
						id: _p.children(".id").val(),
						title: _p.children(".title").text(),
						price: _p.children(".price").text(),
						img: _p.find("img").attr("src"),
						amount: 1
					};
				}
				

				/* cookie操作 */
				$.cookie.json = true;
				// 将 cookie 中所有购物车中的商品读取出来
				var _products = $.cookie("shangping") || [];
				// 当前商品是否已被选购过
				var index = exist(product.id, _products);
				if (index !== -1) { // 已选购，数量自增
					_products[index].amount++;
				} else { // 未选购，将当前选购商品对象添加到数组中
					_products.push(product);
				}
				// 将数组重新保存回 cookie
				$.cookie("shangping", _products, {
					expires: 7,
					path: "/"
				});

			});
			//			}

			// 指定id的商品在所有已选购的数组中是否存在
			// 存在则返回其在数组中的下标，不存在返回-1
			function exist(id, products) {
				for (var i = 0; i < products.length; i++) {
					if (products[i].id == id)
						return i;
				}
				return -1;
			}
		});

	});
});