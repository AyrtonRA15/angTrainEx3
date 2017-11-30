import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input() todo;
  @Output() onChangeState = new EventEmitter();
  @Output() onDelete = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  delete() {
    this.onDelete.emit();
  }

  changeState(event) {
    this.onChangeState.emit({ e: event });
  }

}
