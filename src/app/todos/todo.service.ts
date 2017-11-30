import { ITodo } from './todo.interface';
import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {

  private _todoInput: string = '';
  private _todos: ITodo[] = [];
  private _todosLeft: number = 0;
  private _filterBy: string = '';

  constructor() { }

  add(todoName: string): void {
    this._todos.push({
      name: todoName,
      completed: false
    });
    this._todosLeft++;
  }

  onDelete(todo: ITodo): void {
    let index = this._todos.indexOf(todo);
    (!this._todos[index].completed) ? this._todosLeft-- : '';
    this._todos.splice(index, 1);
  }

  onChangeState($event, index: number): void {
    if ($event.e.target) {
      if ($event.e.target.checked) {
        this._todos[index].completed = true;
        this._todosLeft--;
      } else {
        this._todos[index].completed = false;
        this._todosLeft++;
      }
    }
  }

  changeFilter(filterBy: string): void {
    this._filterBy = filterBy;
  }

  clearCompleted(): void {
    this._todos = this._todos.filter(todo => !todo.completed);
  }

  get todoInput() {
    return this._todoInput;
  }

  get todos() {
    return this._todos;
  }

  set todos(todos) {
    this._todos = todos;
  }

  get todosLeft() {
    return this._todosLeft;
  }

  get filterBy() {
    return this._filterBy;
  }

  set filterBy(filterBy: string) {
    this._filterBy = filterBy;
  }
}
