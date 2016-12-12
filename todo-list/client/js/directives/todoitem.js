angular.module('todomvc')
     .directive('todoItem', function(){
     	return{
     		restrict: 'E',
     		scope: {
     			todo: '=',
     			remove: '&'
     		},
     		template: '<label for="checkbox" class="checkbox-label">'+
			  '<input id="checkbox" type="checkbox" ng-model="todo.completed" ng-click="update(todo)">'+
			'</label>'+
		  '<label for="txt-container">'+'<input id="txt-container" class="txtbox" type="text" ng-model="todo.title" ng-blur="update(todo)">'+'</label>'+
		  '<button class="btn-remove" type="button" ng-click="remove(todo)">REMOVE</button>'
     	}
     })