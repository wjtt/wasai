
require(["config"],function(){
	require(["jquery","load"],function(){
		console.log("加载注册页面的头尾");
		
		
		var isUsernameExist = true; // 标记用户名是否存在 true:存在   false:不存在
		$("#nickname").onblur = function() {
			/* 使用ajax动态验证用户名是否已存在 */
			$.ajax({
				type : "get",
				url : "/wawsai/php/check.php",
				data : {nickname : this.value},
				dataType : "json",
				success : function(respData){
					if (respData.status === 1){
						$("#field_notice").innerText = "用户名已被占用";
						isUsernameExist = true;
					} else {
						$("#field_notice").innerText = "可用";
						isUsernameExist = false;
					}
				}
			});
		}
//
		$("#submit").on("click",function(){
			//console.log("das");
			//if (!isUsernameExist) {
				/* 通过ajax向服务器发送注册用户信息，保存注册用户 */
				$.ajax({
					type : "post",
					url : "/wawsai/php/register.php",
					data : {
						username : $("#nickname").val(),
						password : $("#password").val(),
						sex : $("#male").checked ? $("#male").val() : $("#female").val(),
						email : $("#email").val()
					},
					dataType : "json",
					success : function(data){
						console.log("data")
						if (data.status === 1) { // 注册成功
							location = "/wawsai/html/login.html";
						} else {
							$(".checking").text() = "注册失败，请稍候重试";
						}
					}
				});
			//}
		});
		
		
		
		
		
		// 生成验证码
		function generateCode() {
			$.ajax({
				type : "get",
				url : "http://route.showapi.com/932-2",
				data : {
					showapi_appid : "48344",
					showapi_sign : "09168fc73b1748ea9fc1f278a590cb83"
				},
				dataType : "json",
				success : function(resdata){
					console.log(resdata)
					var val = resdata.showapi_res_body;
					$("#gen_code").attr("src",val.image);
					$("#gen_code").data("sid",val.sid); // 添加自定义属性，保存关联标识
				}
			});
		}

		generateCode();
		$("#gen_code").on("click",function(){generateCode();});
		//失去焦点时自动检测验证码的正确性
		$("#input_code").blur(function(){
			$.ajax({
				type : "get",
				url : "http://route.showapi.com/932-1",
				data : {					
					showapi_appid : "48344",
					showapi_sign : "09168fc73b1748ea9fc1f278a590cb83",
					checkcode : $("#input_code").val(),
					sid : $("#gen_code").data("sid")
				},
				dataType : "json",
				success : function(data){
					if(data.showapi_res_body.valid)
						$("#checking").text("输入正确");
					else
						$("#checking").text("验证码输入有误");
				}
			});
		});
		
		
		
		
		
//		function loadCode(){
//		   var url = "http://route.showapi.com/932-2?showapi_appid=48344&showapi_sign=09168fc73b1748ea9fc1f278a590cb83&length=4&specials=false&";
//			$.getJSON(url, {}, function(data){
//				var resData = data.showapi_res_body;
//				$("#gen_code").attr("src", resData.image);
//				$("#gen_code").attr("sid", resData.sid);
//			});
//		}
//		// 调用
//		$("#gen_code").on("click", function(){ // 给 “换一个” 绑定点击事件
//			loadCode();
//		});
//		
//		// 验证有效性
//		$("#input_code").blur(function(){
//			var url = "http://route.showapi.com/932-1?showapi_appid=48344&showapi_sign=09168fc73b1748ea9fc1f278a590cb83&checkcode="+$("#input_code").val()+"&sid="+$("#gen_code").attr("sid");
//			$.getJSON(url, {}, function(data){
//				if(data.showapi_res_body.valid){
//					$("#checking").text("验证通过");
//					console.log("succe")
//				}else{
//					$("#checking").text("验证错误");
//					console.log("error")
//				}
//			});
//		});
//		loadCode(); // 调用加载验证码方法
//		
	});
});
