import {Component} from '@angular/core';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.html'
})
export class TodoListComponent {
  newTodo: Todo = new Todo();
}
