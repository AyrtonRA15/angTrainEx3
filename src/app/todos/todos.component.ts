import { ITodo } from './todo.interface';
import { TodoService } from './todo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  private _todoInput: string;

  constructor(
    private _todoService: TodoService
  ) {
    this.todoInput = '';
  }

  ngOnInit() {
  }

  addTodo(): void {
    this._todoService.add(this._todoInput);
    this._todoInput = '';
  }

  onDelete(todo: ITodo): void {
    this._todoService.onDelete(todo);
  }

  onChangeState($event, index): void {
    this._todoService.onChangeState($event, index);
  }

  changeFilter(filterBy: string): void {
    this._todoService.changeFilter(filterBy);
  }

  clearCompleted(): void {
    this._todoService.clearCompleted();
  }

  get todoService() {
    return this._todoService;
  }

  get todoInput() {
    return this._todoInput;
  }

  set todoInput(todoInput: string) {
    this._todoInput = todoInput;
  }
}
