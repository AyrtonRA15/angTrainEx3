import { ITodo } from './../todo.interface';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input() todo: ITodo;
  @Output() onChangeState = new EventEmitter();
  @Output() onDelete = new EventEmitter();

  private _showDelete = false;

  constructor() { }

  ngOnInit() {
  }

  delete(): void {
    this.onDelete.emit();
  }

  changeState(event): void {
    this.onChangeState.emit({ e: event });
  }

  changeDeleteVisibility(showDelete: boolean): void {
    this._showDelete = showDelete;
  }

  get showDelete() {
    return this._showDelete;
  }

}
