import angular from 'angular';

import mainService from './main.service.js';

export default angular
	.module('app.service', [])
		.service('mainService', mainService);