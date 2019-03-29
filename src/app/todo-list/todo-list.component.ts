import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.sass']
})
export class TodoListComponent implements OnInit {

  public name: string;
  constructor(private user: UserService) {
    this.name = '';
  }

  ngOnInit() {
  }
  private addTodo() {
    this.user.addTodo(this.name);
    this.name = '';

  }
}
