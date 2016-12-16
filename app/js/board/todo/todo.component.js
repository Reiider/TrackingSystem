var template = require('html!./todo.template.html');

'use strict'

class Todo{
  constructor(){
  	/*this.object = {};
    this.object.header = "Название задания";
    this.object.time = "10:23";
    this.object.serves = 2;*/
  }

  show(){
  	this.showSetting({'obj': this.object})
  }
}

export default {
  template,
  controller: Todo,
  bindings:{
    object: '<',
  	showSetting:'&'
  }
};