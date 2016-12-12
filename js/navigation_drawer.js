var toggle_button, navigation, navigation_el, is_button_pressed

toggle_button = document.querySelector('.link-container');
navigation = document.querySelector('.gnb');
navigation_el = navigation.querySelectorAll('li');
is_button_pressed = true;

toggle_button.onclick = hideShowLinks;


function hideShowLinks(){
	if(is_button_pressed === true){
		is_button_pressed = false;
		navigation.classList.remove('position-changing-right');
		navigation.classList.add('show-content');
	}else{
		is_button_pressed = true;
		// navigation.classList.remove('position-changing-right')
		navigation.classList.add('position-changing-right');
		navigation.classList.remove('show-content');
	}
}
