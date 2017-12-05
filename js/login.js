require(["config"],function(){
	require(["jquery","cookie","load"],function(){
		console.log(123);
		$.cookie.json=true;
		$(".login_button").on("click",function(){
			console.log(22222222222)
			var _email=$("#email").val();
			var _password=$("#password").val();
			console.log(_email)
			$.ajax({
				type: "post",
				url: "/wawsai/php/login.php",
				data:{
					email:_email,
					password:_password
					},
				dataType: "json",
				success:function(respData){
					console.log(12311111111111);
					if (respData.status === 1) {
						// 登录成功，将登录成功用户数据保存到 cookie 中
						var user = respData.data;
						$.cookie("login_user", JSON.stringify(user), {path:"/"});
						// 跳转到个人信息页面
						location = "/wawsai/index.html";
					} else {
						
						alert("登录失败")
					}
				}
			});
		});
		
	});
});