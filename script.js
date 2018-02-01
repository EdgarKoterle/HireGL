$(document).ready(function()
{
	
	$("#errorMsg").hide();

	$("#loginBtn").click(function()
	{
		var username=$("#username").val();
		var password=$("#password").val();
		if (username.length<2 || password.length<2)
			$("#errorMsg").show();
		else
			$("#errorMsg").hide();
	});
});