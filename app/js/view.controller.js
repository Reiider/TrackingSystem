'use strict'

class ViewController{
  //static get $inject(){ return ['mainService']; };

  constructor(){
  	this.object = [];
  	this.selectedTodo = {};
    this.viewSetting = false;
    this.showAddList = false;
    this.showDelete = [];
    this.textNewList = "";

    this.object.push(this.newList('Новые задачи'));
    this.object.push(this.newList('Выполняемые задачи'));

  }

  showSetting(obj){
  	this.selectedTodo = obj;
  	this.viewSetting = true;
  }

  appendNewList(){
    if(this.textNewList){
      this.object.push(this.newList(this.textNewList));
      this.textNewList = "";
      this.showAddList = !this.showAddList;
    }
  }

  newList(text){
    var obj = {};
    obj.header = text;
    obj.listTodo = [];
    return obj;
  }

  deleteList(index){
    this.object.splice(index,1);
  }

  showSetting(obj){
    
  }
}

export default ViewController;