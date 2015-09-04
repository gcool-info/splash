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
			$('#error').addClass('hidden');
			$.ajax({
			    url: 'regUser.php',
			    type: 'GET',
			    data: 'email='+emailAddress,
			    success: function(data) {
				  //called when successful
				  console.log("User Successfully Registered"+data);
				  $( ".email-form" ).html("You have Successfully Registered");

			    },
			    error: function(e) {
				   //called when there is an error
				   console.log(e.message);
			  }
			});

		
		}
		else {
			//alert("Please enter a valid email address");
			$('#error').removeClass('hidden');
		}
	});
	
});