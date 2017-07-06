import { Component } from '@angular/core';
import { Todo } from "./todo";
import { TodoDataService } from './todo-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoDataService]
})
export class AppComponent {
  //title = 'app works!';
  //newTodo: Todo = new Todo();
  constructor(private todoDataService: TodoDataService) {}

  // addTodo() {
  //   this.todoDataService.addTodo(this.newTodo);
  //   this.newTodo = new Todo();
  // }
  onAddTodo(todo: Todo) {
    this.todoDataService.addTodo(todo);
  }

  onToggleTodoComplet(todo) {
    this.todoDataService.toggleTodoComplete(todo);
  }

  onRemoveTodo(todo) {
    this.todoDataService.deleteTodoById(todo.id);
  }

  getTodos() {
    this.todoDataService.getAllTodos();
  }
}
