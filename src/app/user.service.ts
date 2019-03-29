import { Injectable } from '@angular/core';
import { Todo } from '../app/todo';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public arr: Todo[] = [];
  public todos: Todo[];
  public id: number;
  public nm: [];
  public s: any[] = [];
  public x: any[] = [];
  constructor() {
  }

  public getList() {
    (async  () => {
      const arr = [];
      const {value: listName} = await Swal.fire({
        title: 'Input List Name',
        input: 'text',
        inputPlaceholder: 'List Name',
      });
      // if (listName) {
      //  document.writeln(listName);
      this.s.push(listName);
        // Swal.fire('Entered list name is: ' + listName);
      // }
      })();
    }
      public addTodo(vl: string) {
      const todo = new Todo(this.id, vl);
      this.arr.push(todo);
      this.id++;
      }

      public del(id: number) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
      }

  }
