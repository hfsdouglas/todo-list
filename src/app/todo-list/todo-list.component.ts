import { Component } from '@angular/core';
import { TodoItem } from './todo-item';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.sass']
})
export class TodoListComponent {
  tasks: TodoItem[] = [
    {description: 'Arrumar a cama', done: false}, 
    {description: 'Fazer o trabalho prático do Bootcamp', done: false}
  ];

  addTask(description: string) {
    this.tasks.push({
      description: description,
      done: false
    });
  }

  deleteTask(i: number) {
    this.tasks.splice(i, 1);
  }
}
