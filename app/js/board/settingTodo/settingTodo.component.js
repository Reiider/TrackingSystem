var template = require('html!./settingTodo.template.html');

'use strict'

class SettingTodo{
  static get $inject(){ return ['mainService']; };

  constructor(mainService){
    this.mainService = mainService;

    this.object = {};
    this.users = mainService.getUsers();
  }

  deleteUser(id){
    this.object.users.splice(id,1);
    this.object.serves--;
    this.mainService.saveBoard();
  }

  appendUser(id){
    var is = false;
    for(var i = 0; i < this.object.users.length; i++){
      if(this.object.users[i].id === this.users[id].id) {
        is = true; 
      }
    }
    if(!is){
      this.object.serves++;
      this.object.users.push(this.users[id]);
      this.mainService.saveBoard();
    }
  }

  close(){
    this.mainService.setSetting(null,false);
    this.mainService.saveBoard();
  }
}

export default {
  template,
  controller: SettingTodo,
  bindings:{
  	object:'<'
  }
};