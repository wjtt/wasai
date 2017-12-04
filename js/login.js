require(["config"],function(){
	require(["jquery","load"],function(){
		
		$("#btn").onclick = function(){
			post(
				"/wawsai/php/login.php", 
				{email:$("#email").value,password:$("#password").value},
				function(respData){
					if (respData.status === 1) {
						// 登录成功，将登录成功用户数据保存到 cookie 中
						var user = respData.data;
						cookie("login_user", JSON.stringify(user), {path:"/"});
						// 跳转到首页面
						location = "/wawsai/index.html";
					} else {
						$("#error").innerText = "用户名或密码错误";
					}
				},
				"json");
		}
		
	});
});