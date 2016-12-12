angular.module('todomvc')
    .controller('TodomvcCtrl', function($scope, todomvcStorage) {
   	// $scope.todos = [{
   	// 	id: 1,
   	// 	title: '필라테스 하기',
   	// 	completed: false
   	// }, {
   	// 	id:2,
   	// 	title: '초코 목욕시키기',
   	// 	completed: true
   	// }];
    $scope.todos = todomvcStorage.get();


   	$scope.remove = function(id){
   		if(!id) return;

   		// 배열에서 제거할 인덱스를 검색
   		var deletedTodoIdx = $scope.todos.findIndex(function(todo){
   			return todo.id === id;
   		});

   		if(deletedTodoIdx === -1) return;

   		// 배열에서 제거
   		$scope.todos.splice(deletedTodoIdx, 1);
   	};

   	$scope.addTodo = function(todoTitle){
   		todoTitle = todoTitle.trim();
   		if(!todoTitle) return;

   		var newId = !$scope.todos.length ?
   		1 : $scope.todos[$scope.todos.length -1].id+1;
   		// 여기에서 .id를 붙여줌으로써 숫자를 id로 바꾸어 주기 때문이다.
   		// 1을 더하는 이유는 더해주지 않으면 그 전 인덱스가 반복되기 때문이다.

   		var newTodo = {
   			id: newId,
   			title: todoTitle,
   			completed: false
   		};


   		$scope.todos.push(newTodo);
   	};

      $scope.$watch('status', function () {
        if ($scope.status === 'completed') {        // Completed 클릭시
          $scope.statusFilter = {completed: true};  // 필터를 설정한다.
        } else if ($scope.status === 'active') {    // Active 클릭시
          $scope.statusFilter = {completed: false}; // 필터를 설정한다.
        } else {                                    // All 클릭시
          $scope.statusFilter = {};                 // 필터를 해제한다.
        }
      });

      $scope.clearCompleted = function(){
         var incompleteTodos = $scope.todos.filter(function(todo){
            return !todo.completed;
         });
         angular.copy(incompleteTodos, $scope.todos)
      }
   })














