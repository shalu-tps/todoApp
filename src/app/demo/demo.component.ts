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
    localStorage.getItem('data');
  }

  addItem(vl: string, d) {
     console.log(d.addItem(vl));
     localStorage.setItem('data', JSON.stringify(d));
    //  this.setValue(d);
    //  console.log(this.getValue());
    }

    delete(q, index) {
     q.deleteItem(index);
    }
    // setValue(q) {
    //   localStorage.setItem('data', JSON.stringify({q}));
    // }
    // getValue() {
    //  return localStorage.getItem('data');
    // }
    }
