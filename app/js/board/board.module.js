import angular from 'angular';

import todoElem from './todo/todo.component.js';
import settingTodo from './settingTodo/settingTodo.component.js';
import listTodo from './listTodo/listTodo.component.js';

export default angular
	.module('app.board', [])
	.component('todoElem', todoElem)
	.component('settingTodo', settingTodo)
	.component('listTodo', listTodo);