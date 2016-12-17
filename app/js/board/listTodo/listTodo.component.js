var template = require('html!./listTodo.template.html');

'use strict'

class ListTodo{
  static get $inject(){ return ['mainService']; };

  constructor(mainService){
    this.mainService = mainService;
    this.textNewTodo = "";
    this.showAddTodo = false;
    this.showRename = false;
    this.showDelete=[];
  }

  appendNewTodo(){
    if(this.textNewTodo){
      this.object.listTodo.push(this.newTodo(this.textNewTodo));
      this.textNewTodo = "";
      this.showAddTodo = !this.showAddTodo;
    }
  }

  deleteTodo(index){
    this.object.listTodo.splice(index,1);
  }

  newTodo(text){
    var obj = {};
    obj.header = text;
    obj.description = "";
    obj.time = "";
    obj.serves = 0;
    obj.users = [];
    return obj;
  }

  moved(index){
    this.object.listTodo.splice(index, 1);
    this.mainService.setSetting(null, false);
  }
}

export default {
  template,
  controller: ListTodo,
  bindings:{
    object:'<'
  }
};