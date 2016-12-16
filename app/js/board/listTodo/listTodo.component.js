var template = require('html!./listTodo.template.html');

'use strict'

class ListTodo{
  constructor(){
    //this.object = {};
    this.textNewTodo = "";
    this.showAddTodo = false;

    /*this.object.header = "list 1";
    var list = this.object.listTodo = [];
    list.push({'header': 'text header',
               'description': 'text desc',
               'time': '12:45',
               'serves':2,
               'users':[
                        {'name':'alex', 'id':0},
                        {'name':'karl', 'id':1}
                       ]
    });*/
  }

  appendNewTodo(){
    if(this.textNewTodo){
      this.object.listTodo.push(this.newTodo(this.textNewTodo));
      this.textNewTodo = "";
      this.showAddTodo = !this.showAddTodo;
    }
  }

  deleteTodo(index){
    if(confirm("Вы действительно этотите удалить элемент '"+this.object.listTodo[index].header+"'?")){
      this.object.listTodo.splice(index,1);
    }
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
}

export default {
  template,
  controller: ListTodo,
  bindings:{
    object:'<'
  }
};