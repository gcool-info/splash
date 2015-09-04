$(document).ready(function() {
	
	function validateEmail (email) {
		var email_regex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
		return email_regex.test(email);
	}
	
	$('#subscribe').click(function(event) {
		event.preventDefault();
		console.log("subscribe clicked");
		
		var emailAddress = $('#email').val();
		console.log(emailAddress);
		
		if (validateEmail(emailAddress)) {
			//alert("Email is valid");
			$('#error').addClass('hidden');
		}
		else {
			//alert("Please enter a valid email address");
			$('#error').removeClass('hidden');
		}
	});
	
});