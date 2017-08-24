import { Component, OnInit } from '@angular/core';

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

}
