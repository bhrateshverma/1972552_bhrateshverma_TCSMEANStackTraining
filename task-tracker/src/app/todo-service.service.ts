import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  constructor(public http:HttpClient) { }
  
  addTodo(todo:any){
  this.http.post("http://localhost:3000/todo",todo).subscribe(result => console.log(result), error=> console.log(error))
  }

  getTodo():Observable<Todo[]> {
    return this.http.get<Todo[]>("http://localhost:3000/todo")
  }
}
