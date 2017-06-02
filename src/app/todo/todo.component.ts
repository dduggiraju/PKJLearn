import { Component, OnInit } from '@angular/core';
import { TodoItem } from 'app/todo/todoItem';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos: TodoItem[];
  todoItemText: string;
  constructor() {
    this.todos = [];
  }

  ngOnInit() {
  }

  add() {
    let todoItem = new TodoItem();
    todoItem.TodoText = this.todoItemText;
    todoItem.LikeCount = 0;
    this.todos.push(todoItem);
    this.todoItemText = '';
  }
  like(todoItem: TodoItem) {
    todoItem.LikeCount++;
  }
}
