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
  items: any;
  arr = [];
  a1 = [];
  id: number;
  ngOnInit() {
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

    // item() {
    // for (let i = 0; i < localStorage.length; i++) {
    //   const key = localStorage.key(i);
    //   const value = localStorage.getItem(key);
    //   console.log(key, value);
    // }
  // }
}
