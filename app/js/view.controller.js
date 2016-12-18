'use strict'

class ViewController{
  static get $inject(){ return ['mainService']; };

  constructor(mainService){
    this.mainService = mainService;

  	this.object = mainService.getList();
  	this.setting = mainService.getSetting();
    this.showAddList = false;
    this.showDelete = [];
    this.textNewList = "";

    if(!this.loadBoard()){
      this.object.lists.push(this.newList('Новые задачи'));
      this.object.lists.push(this.newList('Выполняемые задачи'));
      this.object.lists.push(this.newList('Завершенные задачи'));
    }
  }

  appendNewList(){
    if(this.textNewList){
      this.object.lists.push(this.newList(this.textNewList));
      this.textNewList = "";
      this.showAddList = !this.showAddList;
      this.saveBoard();
    }
  }

  newList(text){
    var obj = {};
    obj.header = text;
    obj.listTodo = [];
    return obj;
  }

  deleteList(index){
    this.object.lists.splice(index,1);
    this.saveBoard();
  }

  saveBoard(){
    this.mainService.saveBoard();
  }

  loadBoard(){
    return this.mainService.loadBoard();
  }
}

export default ViewController;