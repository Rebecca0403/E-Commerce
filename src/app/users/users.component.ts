import { Component, OnInit } from '@angular/core';
import { usersInterface } from '../users';
import { usersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  constructor(private users_service: usersService) {}
  users: usersInterface[] = [];
  ngOnInit() {
    console.log('users component');

    this.users_service.getUsers().subscribe((data) => console.log(data));
    this.users_service.getUsers().subscribe((test) => (this.users = test));
  }
}
