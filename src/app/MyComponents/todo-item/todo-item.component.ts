import { Component, OnInit, EventEmitter, Input, Output, NgModule } from '@angular/core';
import { Todo } from '../../Todo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  @Input() todo!: Todo;
  @Input() i!: number;

  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();

  constructor() {}

  ngOnInit() : void { }

  onClick(todo: Todo) {
    this.todoDelete.emit(todo);
    console.log("onClick has been triggered");
  }

  onCheckboxClick(todo: any) {
    console.log(todo);
    this.todoCheckbox.emit(todo);
    console.log(todo);
    
  }
}
