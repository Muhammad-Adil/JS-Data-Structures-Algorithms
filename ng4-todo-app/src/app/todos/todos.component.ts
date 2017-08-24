import { Component, OnInit, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos;
  text;

  constructor() { }

  ngOnInit() {

    this.todos = [
      {
        text: 'todo 1'
      },{
        text: 'todo 2'
      },{
        text: 'todo 3'
      }
    ];
  }

  addTodo(){
    console.log(this.text);
    this.todos.push({
      text: this.text
    });
  }

  deleteTodo(todoText){
    for(var i = 0; i < this.todos.length; i++ ) {
      if(this.todos[i].text == todoText){
        this.todos.splice(i , 1);
      }
    }
  }
}
