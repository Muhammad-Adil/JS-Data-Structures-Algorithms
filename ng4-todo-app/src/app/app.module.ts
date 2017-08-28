import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';

import { MdButtonModule, MdCheckboxModule, MdTableModule, MdIconModule } from '@angular/material';




import { TodoService } from "./todo.service";

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent
  ],
  imports: [
    BrowserModule, FormsModule, MdButtonModule, MdCheckboxModule, MdTableModule, MdIconModule 
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
