import { Injectable } from '@angular/core';
import { InitTodos } from './init-todos';


@Injectable()
export class TodoService extends InitTodos {
  constructor(){ 
    super();
      console.log('TodoService initialize')
      this.load();
  }

    getTodos(){
      let todos = JSON.parse(localStorage.getItem('todos'));
      return todos;
    }

    addTodo(newTodo){
      let todos = JSON.parse(localStorage.getItem('todos'));
      //Add New Todo
      todos.push(newTodo);
      //Set New Todo
      localStorage.setItem('todos', JSON.stringify(todos));
    }

    deleteTodo(todoText){
      let todos = JSON.parse(localStorage.getItem('todos')); 
      for(var i = 0; i < todos.length; i++ ) {
        if(todos[i].text == todoText){
          todos.splice(i , 1);
        }
      }
    }

}
