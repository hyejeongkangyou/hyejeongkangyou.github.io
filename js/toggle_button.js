var is_button_pressed, toggle_btn, navigation, body;

is_button_pressed = true;
toggle_btn = document.querySelector('.bar-menu');
navigation = document.querySelector('.navigation-bar');
body = document.querySelector('body');

toggle_btn.onclick = toggleButtonAction;

function toggleButtonAction(){
	if(is_button_pressed === true){
		// console.log('눌려진 상태');
		is_button_pressed = false;
		navigation.classList.remove('hidden-content');
		body.classList.add('overflow-hidden');

	}else{
		// console.log('버튼 눌려지지 않은 상태');
		is_button_pressed = true;
		navigation.classList.add('hidden-content');
		body.classList.remove('overflow-hidden');
	}
}