$(document).ready(function() {
	
  var bgcolors = ["#000000","#e45824","#afd9e8"];                
  var rand = Math.floor(Math.random()*bgcolors.length);           
  $('body').css("background-color", bgcolors[rand]);
  if(rand==1){
      $('div.portrait').html('<img src="./splash_files/raden_bg_768_orangeBG.png" class="img-responsive center-block">');
      $('div.landscape').html('<img src="./splash_files/shorty-bag-orangeBG.png" class="img-responsive center-block">');
  }
  if(rand==2){
      $('body').css("color", '#494949');
      $('.radenlogo').attr('src','./splash_files/bluebg-grey-logo.png');
      $('.subButton').css("color",'#FFF');
      $('div.portrait').html('<img src="./splash_files/raden_bg_768_blueBG.png" class="img-responsive center-block">');
      $('div.landscape').html('<img src="./splash_files/shorty-bag-blueBG.png" class="img-responsive center-block">');
  }
	
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
			    data: 'email='+encodeURIComponent(emailAddress),
			    success: function(data) {
				  //called when successful
				  console.log("User Successfully Registered"+data);
				  $( ".email-form" ).html("You have successfully registered");

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