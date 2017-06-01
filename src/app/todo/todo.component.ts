import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos: string[];
  todoItem: string;
  constructor() {
    this.todos = [];
  }

  ngOnInit() {
  }

  add() {
    this.todos.push(this.todoItem);
  }
}
