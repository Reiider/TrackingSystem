var template = require('html!./todo.template.html');

'use strict'

class Todo{
  static get $inject(){ return ['mainService']; };

  constructor(mainService){
    this.mainService = mainService;

  	this.object = {};
  }

  showSetting(){
    this.mainService.setSetting(this.object, true);
  }
}

export default {
  template,
  controller: Todo,
  bindings:{
    object: '<'
  }
};