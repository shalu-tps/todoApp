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

  localStorageData(todos: Todo[]) {
  localStorage.setItem('todos', JSON.stringify({todos}));
  for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      console.log(key, value);
     }
    }
  }
