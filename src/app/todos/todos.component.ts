import { ITodo } from './todo.interface';
import { TodoService } from './todo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  constructor(
    private _todoService: TodoService
  ) { }

  ngOnInit() {
  }

  todoInput = '';

  get todoService() {
    return this._todoService;
  }

  addTodo() {
    this._todoService.add(this.todoInput);
    this.todoInput = '';
  }

  onDelete(todo: ITodo) {
    this._todoService.onDelete(todo);
  }

  onChangeState($event, index) {
    this._todoService.onChangeState($event, index);
  }

  changeFilter(filterBy: string) {
    this._todoService.changeFilter(filterBy);
  }

  clearCompleted() {
    this._todoService.clearCompleted();
  }
}
