import { Injectable } from '@angular/core';
import { Todo } from '../app/todo';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public arr: Todo[] = [];
  public todos: Todo[];
  public s: any[] = [];
  public localD = localStorage.getItem('data');
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
      this.s.push(new Todo(Date.now(), listName, []));
      })();
    }

  // getLocalData() {
  //   console.log(localStorage.getItem('data'));
  // }
  }
