import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Todo } from '../../Model/todo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.css'
})
export class TodoFormComponent implements OnInit {
  newTodoTitle:string="";
  newTodoCompleted=false;

  @Output() newTodo=new EventEmitter<Todo>();

  ngOnInit(): void {}
  
  addTodo(){
    const newTodo:Todo={
      id:Date.now(),
      title:this.newTodoTitle,
      completed:this.newTodoCompleted
    }
    this.newTodo.emit(newTodo);
    this.newTodoTitle="";
  }
}
