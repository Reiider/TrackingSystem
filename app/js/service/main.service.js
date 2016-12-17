'use strict'

class MainService{
  //static get $inject(){ return ['loaderService']; };

  constructor(){
    this.board = {};
    this.board.lists = [];

    this.users = [];

    this.addition = {};
    this.addition.setting = {};
    this.addition.setting.selectedTodo = {};
    this.addition.setting.viewSetting = false;

    this.loadBoard();
    this.loadUsers();
  }
  
  loadBoard(){

  }

  loadUsers(){
    this.users.push({"name":"Andre", 'id':0});
    this.users.push({"name":"John", 'id':1});
    this.users.push({"name":"Tim", 'id':2});
    this.users.push({"name":"Tommi", 'id':3});
    this.users.push({"name":"Mikl", 'id':4});
  }

  getUsers(){
    return this.users;
  }

  setSetting(selTodo, view){
    this.addition.setting.selectedTodo = selTodo;
    this.addition.setting.viewSetting = view;
  }

  getSetting(){
    return this.addition.setting;
  }

  getList(){
    return this.board.lists;
  }

}

export default MainService;