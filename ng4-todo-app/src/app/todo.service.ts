import { Injectable } from '@angular/core';
import { InitTodos } from './init-todos';


@Injectable()
export class TodoService {

  constructor() { 
    console.log('TodoService initialize')
  }

    getTodos(){
      let todos = JSON.parse(localStorage.getItem('todos'));
      return todos;
    }

}
