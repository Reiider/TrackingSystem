var template = require('html!./settingTodo.template.html');

'use strict'

class SettingTodo{
  constructor(){
    this.object = {};
  	this.object.header="this task";
  	this.object.description = "adasdasdasdasd";
    this.object.time = "10.20.30";
    this.object.serves = 0;
    
    this.object.users = {};
    this.object.users[0] = {"name":"Andre", 'id':0};
    this.object.users[1] = {"name":"John", 'id':1};
    this.object.users[2] = {"name":"Tim", 'id':2};

    this.allUsers = [];
    this.allUsers[0] = {"name":"Andre", 'id':0};
    this.allUsers[1] = {"name":"John", 'id':1};
    this.allUsers[2] = {"name":"Tim", 'id':2};
    this.allUsers[3] = {"name":"Tommi", 'id':3};
    this.allUsers[4] = {"name":"Mikl", 'id':4};

    for(var user in this.object.users){
      this.object.serves++;
    }
  }

  showWindow(){
  	alert("nothing");
  }

  deleteUser(id){
    delete this.object.users[id];
    this.object.serves--;
  }

  appendUser(id){
    if(!this.object.users[id]) this.object.serves++;
    this.object.users[id] = this.allUsers[id];
  }
}

export default {
  template,
  controller: SettingTodo,
  bindings:{
  	
  }
};