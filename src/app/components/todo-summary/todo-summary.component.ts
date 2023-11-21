import { Component, Input } from '@angular/core';
import { Todo } from '../../Model/todo';

@Component({
  selector: 'app-todo-summary',
  templateUrl: './todo-summary.component.html',
  styleUrl: './todo-summary.component.css'
})
export class TodoSummaryComponent {
  @Input() todos:Todo[]=[];

  getTodos(){
   return this.todos;
  }

  getTotal(){
    return this.todos.length;
  }

  getCompleted(){
    return this.todos.filter(todo=>todo.completed).length;
  }

  getPending(){
    return this.todos.filter(todo=>!todo.completed).length;
  }


}
