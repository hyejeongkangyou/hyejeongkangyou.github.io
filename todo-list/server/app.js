// part1 - part1에서 express모듈을 로딩한다. 그리고 인스턴스 하나를 생성하여 app변수에 저장한다. 뒤에 app변수를 가지고 서버를 세팅하고 구동시킬 것이다.
var express = require('express');
var app = express();
var path = require('path');

app.use('/', express.static(path.join(__dirname, '../client')));
app.use('/node_modules', express.static(path.join(__dirname, '../node_modules')));
// part2 - 기본 라우팅 설정. 도메인에 접속하면 'Hello World!'문자열을 출력
app.get('/', function(req, res){
	res.sendfile('index.html');
});

// part3 - listen()함수를 구동. 3000번 포트를 사용할 것이며 서버가 구동되는 동시에 사용한 문구('example...')가 서버측 콘솔에 찍힐 것이다.
app.listen(3000, function(){
	console.log('Example app listening on port 3000!');
})