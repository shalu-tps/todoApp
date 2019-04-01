import { Injectable } from '@angular/core';
import { Todo } from '../app/todo';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public arry: any[] = [];
  public todos: Todo[];
  public s: any[] = [];
  public a: any[] = [];
  public localD = localStorage.getItem('todos');
  constructor() {
  }

  public getList() {
    (async  () => {
      const {value: listName} = await Swal.fire({
        title: 'Input List Name',
        input: 'text',
        inputPlaceholder: 'List Name',
      });
      this.s.push(new Todo(Date.now(), listName, []));
      })();
    }

  // getLocalData() {
  //   console.log(localStorage.getItem('data'));
  // }

  localStorageData(todos: Todo[]) {
this.arry.push(localStorage.setItem('todos', JSON.stringify({todos})));
// const a = this.arry;
  // this.arry = this.todos;
  // console.log(this.arry);
  // localStorage.getItem('todos');
// console.log(a);
  // console.log(this.localD);
for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      console.log(key, value);
     }
    }
  }
