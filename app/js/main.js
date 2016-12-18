import angular from 'angular';
import dnd from 'angular-drag-and-drop-lists';

import service from './service/service.module.js';
import board from './board/board.module.js';

import ViewContriller from './view.controller.js';

angular
.module('app', [
		'dndLists',
		service.name,
		board.name
])
.controller('ViewController', ViewContriller);