import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from '../todo-service.service';
import { Todo } from '../todo.model';

const ELEMENT_DATA: Todo[] = []

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  displayedColumns: string[] = ['ID', 'Name', 'Task', 'Deadline'];
  dataSource:Array<Todo> = ELEMENT_DATA;

  constructor(public todoserv: TodoServiceService ) { }

  ngOnInit(): void {
    this.getTodo()
  }

  addTodo(todo:any){
    if(
      todo.id != "" && todo.name != "" && todo.task != "" && todo.deadline != ""
    ){
      this.todoserv.addTodo(todo)
    }
  }

  getTodo() {
    this.todoserv.getTodo().subscribe(result => this.dataSource = result, error => console.log(error))
  }
}
