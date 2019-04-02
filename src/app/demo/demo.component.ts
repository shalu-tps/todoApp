import { Component, OnInit , Input } from '@angular/core';
import Swal from 'sweetalert2';
import { UserService } from '../user.service';
import { Todo } from 'src/app/todo';
import { TodoListComponent } from '../todo-list/todo-list.component';

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
  name: string;

  ngOnInit() {
    if (localStorage.length) {
    const temp = localStorage.getItem('todos');
    const a1 = JSON.parse(temp);
    this.ser.s = a1.todos.map(todos => {
    return new Todo(todos.id, todos.name, todos.items);
    });
  }
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
    q.deleteItem(index);
    this.ser.localStorageData(this.ser.s);
   }
  }
