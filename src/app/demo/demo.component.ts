import { Component, OnInit , Input } from '@angular/core';
import Swal from 'sweetalert2';
import { UserService } from '../user.service';
import { Todo } from 'src/app/todo';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.sass']
})
export class DemoComponent implements OnInit {
  constructor(private ser: UserService) {
   }
  public todos: Todo[] = [];
  public todo = [];
  items: any;
  public temp;
  a1 = [];
  value = [];
  public arr: any[] = [];
  result = [];
  id: number;

  ngOnInit() {
    if (localStorage.length > 0) {
    const temp = localStorage.getItem('todos');
    const a1 = JSON.parse(temp);
    this.ser.s = a1.todos;

  }
    // this.getData();
  }
  addList() {
    this.ser.getList();
    this.ser.localStorageData(this.ser.s);
  }

  addItem(vl: string, d) {
     console.log(d.addItem(vl));
     this.ser.localStorageData(this.ser.s);
  }

  delete(q, index) {
    const todo = this.ser.s.indexOf(index);
    this.ser.s.splice(todo, 1);
    this.ser.localStorageData(this.ser.s);
    q.deleteItem(index);
    }

  //   getData() {
  //   for (let i = 0; i < localStorage.length; i++) {
  //     console.log(localStorage.key(i));
  //     const value = localStorage.removeItem(key);
  //     console.log(key, value);
  //   }
  //  }
  }
