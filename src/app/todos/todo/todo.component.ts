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

  constructor() { }

  ngOnInit() {
  }

  showDelete = false;

  delete() {
    this.onDelete.emit();
  }

  changeState(event) {
    this.onChangeState.emit({ e: event });
  }

  changeDeleteVisibility(showDelete: boolean) {
    this.showDelete = showDelete;
  }

}
