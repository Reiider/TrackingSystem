var template = require('html!./todo.template.html');

'use strict'

class Todo{
  constructor(){
  	this.textTask="this task";
  	this.timeEnd = "12.02";
  }

  showWindow(){
  	alert("nothing");
  }
}

export default {
  template,
  controller: Todo,
  comtrollerAs: "Todo",
  bindings:{

  }
};