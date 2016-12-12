// selecting Elements
var sectionHeader = document.querySelector('.page-header');
var headerHeight = sectionHeader.clientHeight;
var navigation = document.querySelector('.gnb');
var heading = document.querySelector('.header-logo');
var heading_link = heading.querySelector('a');
var navigation_bar = document.querySelector('.link-container');
// console.log(navigation);
// console.log(videoElement);
var scrollPosition = 100;
var scroll_time;

// 가장 처음 화면에서 navigation_bar가 보이지 않는 상태로 시작
navigation_bar.classList.add('position-changing-right');

window.onscroll = function(){
	clearTimeout(scroll_time);
	var currnet_position = window.scrollY;
	// console.log(currnet_position);
	if(currnet_position <= headerHeight){
		if(currnet_position <= scrollPosition){
			sectionHeader.classList.remove('header-section-changing');
			navigation.classList.remove('position-changing-right');
			navigation_bar.classList.add('position-changing-right')
			heading_link.classList.remove('heading-logo-changing');
			sectionHeader.style.transition = 'all 1s ease-in';
			navigation.style.transition = 'all 1s ease-out';
			heading_link.style.transition = 'all 1s ease-in-out';
		}else{
			sectionHeader.classList.add('header-section-changing');
			navigation.classList.add('position-changing-right');
			navigation_bar.classList.remove('position-changing-right');
			heading_link.classList.add('heading-logo-changing');
			sectionHeader.style.transition = 'all 1s ease-out';
			navigation.style.transition = 'all 1s ease-in';
			heading_link.style.transition = 'all 1s ease-in-out';
		}
	}
	scroll_time = setTimeout(function(){
		scrollPosition = window.scrollY;
	}, 100)
}
