var container, controls, view, active_index;
container = document.querySelector('.carousel-container');
view = container.querySelector('.carousel-view');
controls = document.querySelector('.carousel-controls');
// 현재 활성화된 컨텐츠의 인덱스
active_index = 0
// console.log(container);
// console.log(controls);
// console.log(view);

// view 영역 내부의 img 폭을 가져와서 이미지 개수만큼 폭을 view 영역에 설정한다.
var view_contents = view.querySelectorAll('article');
// console.log(view_contents);
var view_contents_length = view_contents.length;
// console.log(view_contents_length);
var view_content_width = container.clientWidth;
// console.log(view_content_height);
var view_width = view_content_width * view_contents_length
// console.log(view_width)
view.style.width = view_width + 'px' ;

// 각 article을 순환 처리하여 컨테이너 요소의 너비만큼 이미지 높이를 설정한다.
for(var i=0, l=view_contents_length; i<l; i++){
	var view_content = view_contents[i];
	// console.log(view_content)
	view_content.style.width = view_content_width + 'px';
}

// 버튼 이벤트 연결
var prev_btn = controls.querySelector('.carousel-previous-btn');
// console.log(prev_btn);
var next_btn = controls.querySelector('.carousel-next-btn');

prev_btn.onclick = prevMoveCarouselContentView;
next_btn.onclick = nextMoveCarouselContentView;

function prevMoveCarouselContentView(){
	active_index = --active_index % view_contents_length;
	if( active_index < 0 ){
		active_index = view_contents_length -1;
	}
	view.style.transform = 'translateX('+ (-1 * view_content_width * active_index) + 'px)';
};

function nextMoveCarouselContentView(){
	active_index = ++active_index % view_contents_length;
	view.style.transform = 'translateX('+ (-1 * view_content_width * active_index) + 'px)';
};


