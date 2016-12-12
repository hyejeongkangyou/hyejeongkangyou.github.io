var logo, current_state;

// selecting elements
logo = document.querySelector('.contact');
current_state = true;

function playAnimation(callback, time){
  if(callback === undefined){return;}
  if(time === undefined){time=3000;}
  window.setInterval(callback,time);
}

changingLogoText();

function changingLogoText(){
	playAnimation(changingLogo, 6000);
}

function changingLogo(){
	if(current_state){
	  logo.innerHTML = 'Contact Me';
	  logo.style.color = '#c24747';
	  logo.style.transform = 'scale(1.1)';
	  logo.style.transition = 'all 1s';
	}else{
	  logo.innerHTML = 'Contact';
	  logo.style.color = '#c24747';
	  logo.style.transform = 'scale(1)';
	}
	current_state = !current_state
}