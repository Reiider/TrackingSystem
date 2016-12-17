var template = require('html!./settingTodo.template.html');

'use strict'

class SettingTodo{
  static get $inject(){ return ['mainService']; };

  constructor(mainService){
    this.mainService = mainService;

    this.users = mainService.getUsers();
  }

  showWindow(){
  	alert("nothing");
  }

  deleteUser(id){
    this.object.users.splice(id,1);
    this.object.serves--;
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
    }
  }

  close(){
    this.mainService.setSetting(null,false);
  }
}

export default {
  template,
  controller: SettingTodo,
  bindings:{
  	object:'<'
  }
};