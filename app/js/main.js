import angular from 'angular';
import uiRouter from 'angular-ui-router';

import service from './service/service.module.js';
import board from './board/board.module.js';

/*import mainConfig from './main.config.js';
import selectDateComponent from './selectDate.component.js';
import FilterController from './filter.controller.js';
import MainController from './main.controller.js';
*/

angular
.module('app', [
		'ui.router',
		service.name,
		board.name
]);/*
.config(mainConfig)
.controller('FilterController', FilterController)
.controller('MainController', MainController)
.component('selectDate', selectDateComponent);
*/