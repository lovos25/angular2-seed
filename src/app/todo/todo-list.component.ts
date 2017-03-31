import { Component } from '@angular/core';
import { Todo } from './todo';
import { TodoDataService } from './todo-data.service';

@Component({
	selector: 'todo-list',
	templateUrl: './todo-list.html',
	//providers: [TodoDataService]
})

export class TodoListComponent {
	newTodo: Todo = new Todo();

	constructor(private todoDataService: TodoDataService) {
	}

	addTodo() {
		this.todoDataService.addTodo(this.newTodo);
		this.newTodo = new Todo();
	}

	toggleTodoComplete(todo) {
		this.todoDataService.toggleTodoComplete(todo);
	}

	removeTodo(todo) {
		this.todoDataService.deleteTodoById(todo.id);
	}

	get todos() {
		return this.todoDataService.getAllTodos();
	}
}
