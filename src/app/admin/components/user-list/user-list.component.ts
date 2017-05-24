import { Component, OnInit } from '@angular/core';

import {
  User,
  AdminService
} from '../../admin.barrel';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  public users: User[];
  public loading: boolean = true;

  constructor(private _adminService: AdminService) { }

  public ngOnInit() {
    this.loadUsers();
  }

  public loadUsers() {
    this.loading = true;
    this._adminService.list({
      success: response => this.users = response,
      finally: () => this.loading = false
    });
  }

  public addNewUser() {
    this.loading = true;
    let user = new User();
    user.name = 'New User';
    this._adminService.create(
      user,
      {
        finally: () => this.loadUsers()
      }
    )
  }

  public removeUser(user: User) {
    let index: number = this.users.indexOf(user);
    if (index !== -1) {
      this.users.splice(index, 1);
    }
  }

}
