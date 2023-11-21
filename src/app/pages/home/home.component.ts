import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Model/todo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit {
  todos:Todo[]=[];

  addTodo(newTodo: Todo) {
    this.todos.push(newTodo);
    console.log(`Todo added: ${newTodo.title}`);
    /*localStorage.setItem('todos', JSON.stringify(this.todos));*/
  }

  ngOnInit(): void {
    
  }

}
