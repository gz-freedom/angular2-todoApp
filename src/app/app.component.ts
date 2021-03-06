import { Component, OnInit } from '@angular/core';
import { TodoDataService } from './todo-data.service';
import { Todo } from "./todo";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoDataService]
})
export class AppComponent implements OnInit {
  constructor(private todoDataService: TodoDataService) {}

  todos: Todo[] = [];

  public ngOnInit() {
    this.todoDataService
      .getAllTodos()
      .subscribe(todos => {
        this.todos = todos;
      });
  }

  onAddTodo(todo) {
    this.todoDataService
      .addTodo(todo)
      .subscribe(newTodo => {
        this.todos = this.todos.concat(newTodo);
      });
  }

  onToggleTodoComplet(todo) {
    this.todoDataService
      .toggleTodoComplete(todo)
      .subscribe(updatedTodo => {
        todo = updatedTodo;
      });
  }

  onRemoveTodo(todo) {
    this.todoDataService
      .deleteTodoById(todo.id)
      .subscribe((_) => {
        this.todos = this.todos.filter(t => t.id !== todo.id);
      });
  }
}
