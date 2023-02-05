import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.sass']
})
export class TodoListComponent {
  tasks: string[] = [
    'Arrumar a cama', 
    'Fazer o trabalho prático do Bootcamp'
  ];
}
