angular.module('todomvc')
     .factory('todomvcStorage', function(){
     	var storage = {
     		todos: [{
     			id: 1,
     			title: '초코 산책시키기',
     			completed: true
     		},{
     			id: 2,
     			title: '대만 여행가기',
     			completed: false
     		}],
     		get: function(){
     			return storage.todos;
     		},
     		post: function(todoTitle){
     			var newId = !storage.todos.length ? 1 : storage.todos[storage.todos.length - 1].id + 1;
     			var newTodo = {
     				id: newId,
     				title: todoTitle,
     				completed: false
     			};
     			storage.todos.push(newTodo);
     		},
     		delete: function(id){
     			var deletedTodoIdx = storage.todos.findIndex(function(todo){
     				return todo.id === id;
     			});
     			if(deletedTodoIdx === -1) return;
     			storage.todos.splice(deletedTodoIdx, 1);
     		},
     		deleteCompleted: function(){
     			var incompleteTodos = storage.todos.filter(function(todo){
     				return !todo.completed;
     			});
     			angular.copy(incompleteTodos, storage.todos);
     		}

     	}
     	return storage;
     })