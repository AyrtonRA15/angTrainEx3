import { TodoService } from './todos/todo.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FilterByPipe } from './filter-by.pipe';
import { TodosComponent } from './todos/todos.component';
import { TodoComponent } from './todos/todo/todo.component';


@NgModule({
  declarations: [
    AppComponent,
    FilterByPipe,
    TodosComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
