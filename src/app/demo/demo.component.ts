import { Component, OnInit , Input } from '@angular/core';
import Swal from 'sweetalert2';
import { UserService } from '../user.service';
import { Todo } from 'src/app/todo';
import { JsonPipe } from '@angular/common';

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
  arr = [];
  result = [];
  id: number;
   console;
     ngOnInit() {
    if (localStorage.length > 0) {
    const temp = localStorage.getItem('todos');
    this.arr.push(temp);
    const todo = JSON.parse(JSON.stringify(this.arr || null ));
    console.log(todo);
  }
    // this.getData();
  }
  addList() {
    this.ser.getList();
  }

  addItem(vl: string, d) {
     console.log(d.addItem(vl));
     this.ser.localStorageData(this.ser.s);
    }

    delete(q, index) {
     q.deleteItem(index);
    }

    // setValue(todos: Todo[]) {
    //   localStorage.setItem('todos', JSON.stringify({todos}));
    // }

    getData() {
    // for (let i = 0; i < localStorage.length; i++) {
    //   const key = localStorage.key(i);
    //   const value = localStorage.getItem(key);
    //   console.log(key, value);
    // }
        // const c = this.arr.filter((ele, i) => {
        // return this.todos;
        // });
        // console.log(c);
  //  let a = this.todos.filter((ele, i) => {
  //    return (ele.items);
  //   });
  //   console.log(a);
    }
   }
