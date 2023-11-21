import { Component, Input, OnInit} from '@angular/core';
import { Todo } from '../../Model/todo';


@Component({
  selector: 'app-todo-table',
  templateUrl: './todo-table.component.html',
  styleUrl: './todo-table.component.css'
})
export class TodoTableComponent implements OnInit {
  @Input() todos:Todo[]=[];

  ngOnInit(): void {
    /*const storedTodos=localStorage.getItem('todos');
    if(storedTodos){
      this.todos=JSON.parse(storedTodos);
    }    */
  }

  toggleTodo(todoId:number):void{
    const todo=this.todos.find(t=>t.id===todoId);
    if(todo){
      todo.completed=!todo.completed;
    }
  }

   deleteTodo(todoId:number):void{
    this.todos = this.todos.filter(t => t.id !== todoId);
  }


}
