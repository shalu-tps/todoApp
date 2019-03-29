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

  hello =  '';
  values = '';
  private todo: Todo;

 arr = [];
 a1 = [];
  ngOnInit() {

  }

  addData(val: string) {
    if (val) {
      this.arr.push(val);
    }
    }

  add() {
    this.ser.getList();
  }

  addItem(vl: string) {
    this.ser.addTodo(vl);
    }

  // delete(): void {
      // this.ser.del(this.todo.id);
      // return this.ser.getList();
    // }
    delete(q, index) {
      this.ser.todos.splice(index, 1);
      // console.log(this.ser.addTodo);
    }
  }
