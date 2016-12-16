import angular from 'angular';

import todoElem from './todo/todo.component.js';
import settingTodo from './settingTodo/settingTodo.component.js';
import listTodo from './listTodo/listTodo.component.js';
/*import todoAdd from './add.todo.component.js';
import todoView from './view.todo.component.js';
import todoDelete from './delete.todo.component.js';
*/
export default angular
	.module('app.board', [])
	.component('todoElem', todoElem)
	.component('settingTodo', settingTodo)
	.component('listTodo', listTodo);/*
		.component('todoList', todoList)
		.component('todoAdd', todoAdd)
		.component('todoView', todoView)
		.component('todoDelete', todoDelete);*/