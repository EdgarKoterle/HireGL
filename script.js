$(document).ready(function()
{
	$("#errorMsg").empty();

	$("#loginBtn").click(function()
	{
		var username=$("#username").val();
		var password=$("#password").val();
		if (username.length<2 || password.length<2)
		{
			$("#errorMsg").text('Username and password must have at least 2 characters');
		}
		else
			$("#errorMsg").empty();

		$.ajax
		({
			url: 'http://akademiasovy.ddns.net:8081/api/auth/login',
			type: 'POST',
			contentType: 'application/json',

			data: JSON.stringify
			({
				"userName": username,
				"password": password
			}),

			success: function(data)
			{
				window.location.href='interview.html';
			},

			error: function()
			{
				$("#errorMsg").empty();
				$("#errorMsg").html('Invalid Username or Password.<br>Please try again.');
			}
		});
		
	});
});