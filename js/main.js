let loginForm = document.querySelector('.header .login-form');
let otpForm = document.querySelector('.header .otp-form');



document.querySelector('#login-btn').onclick = () =>{
   loginForm.classList.toggle('active');
   otpForm.classList.remove('active');
    
};

document.querySelector('#login-button').onclick = () =>{
   loginForm.classList.toggle('active');
   otpForm.classList.remove('active');
    
};

document.querySelector('#login-password').onclick = () => {
   loginForm.classList.toggle('active');
   otpForm.classList.remove('active');
   
}

document.querySelector('#login-otp').onclick = () => {
   otpForm.classList.toggle('active');
   loginForm.classList.remove('active');
}

document.querySelector('#close').onclick = () => {
   loginForm.classList.remove('active');
   
}

document.querySelector('#cls').onclick = () => {
  
   otpForm.classList.remove('active');
}




document.querySelector('.digit-group').querySelector('input').each(function() {
	document.querySelector(this).attr('max-length', 1);
	document.querySelector(this).addEventListener('keyup', function(e) {
		var parent = document.querySelector(document.querySelector(this).parent());
		
		if(e.keyCode === 8 || e.keyCode === 37) {
			var prev = parent.querySelector('input#' + document.querySelector(this).data('previous'));
			
			if(prev.length) {
				document.querySelector(prev).select();
			}
		} else if((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 65 && e.keyCode <= 90) || (e.keyCode >= 96 && e.keyCode <= 105) || e.keyCode === 39) {
			var next = parent.querySelector('input#' + document.querySelector(this).data('next'));
			
			if(next.length) {
				document.querySelector(next).select();
			} else {
				if(parent.data('auto-submit')) {
					parent.submit();
				}
			}
		}
	});
});





// $(function () {
   
//     'use strict';
    
//     var CountSelect = $('.countries'),
    
//         myCountries = ['Africa', 'Antarctica', 'Asia', 'Europe'],
        
//         Africa = ['Algeria', 'Angola', 'Benin', 'Botswana', 'Burundi'],
        
//         Antarctica = ['Amundsen-Scott'],
        
//         Asia = ['Bangladesh', 'Bhutan', 'Brunei', 'Cambodia', 'China', 'East Timor', 'India'],
        
//         Europe = ['Albania', 'Andorra', 'Austria', 'Belarus', 'Belgium', 'Bosnia-Herzegovina', 'Bulgaria'];
        
//     // Function Create Option    
    
//     function CreateOption(variable, elementToAppend) {
        
//         var i;
        
//         for (i = 0; i < variable.length; i += 1) {
    
//             $('<option>', {value: variable[i], text: variable[i], id: variable[i]})
//                 .appendTo(elementToAppend);
//         }
//     }
    
    
//     // Create Option myCountries
//     CreateOption(myCountries, $('.countries'));
    
//     // Create Option Africa
//     CreateOption(Africa, $('.Africa'));
    
//     // Create Option Africa
//     CreateOption(Antarctica, $('.Antarctica'));
    
//     // Create Option Africa
//     CreateOption(Asia, $('.Asia'));
    
//     // Create Option Africa
//     CreateOption(Europe, $('.Europe'));
    
//     // Hide All Select
//     $('.option select').hide();
    
//     // Show First Selected
//     $('.Africa').show().css('display', 'inline-block');
    
    
    
//     // Show List Option City When user Choose Countries
    
//     CountSelect.on('change', function () {
        
//         // get Id option 
//         var myId = $(this).find(':selected').attr('id');
//         console.log($(this).val());
//         // Show Select Has class = Id And Hide Siblings
//         $('.option select').filter('.' + myId).fadeIn(400).siblings('select').hide();
        
//     });
    
// });