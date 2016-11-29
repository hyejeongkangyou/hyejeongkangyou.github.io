var arrow_button, main_container, section, section_height

arrow_button = document.querySelector('.button-container');
// console.log(arrow_button);
section = document.querySelector('.bg-video-container');
// section = document.querySelector('.celebrate-container');
section_height = section.clientHeight;

arrow_button.onclick = movingSection;

function movingSection(){
	window.scrollTo(0, section_height);
	// <a>태그의 다른 화면으로 전환되려는 기본 속성을 막아주기 위해 `return false`를 사용함
	return false;
}