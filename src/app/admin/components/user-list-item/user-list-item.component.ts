import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import {
  User,
  AdminService
} from '../../admin.barrel';

import {
  Timekeeper
} from '../../../shared/shared.barrel';

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.css']
})
export class UserListItemComponent implements OnInit {

  public loading: boolean;
  @Timekeeper() public now: number;
  @Input() public disabled: boolean;
  @Input() public user: User;
  @Output() public onError = new EventEmitter();
  @Output() public onDelete = new EventEmitter<User>();

  public constructor(private _adminService: AdminService) {
    //
  }

  ngOnInit() {
  }

  public updateUser(user: User) {
    this.loading = true;
    this._adminService.update(
      user,
      {
        success: updatedUser => user = updatedUser,
        error: error => this.onError.emit(),
        finally: () => this.loading = false
      }
    )
  }

  public deleteUser(user: User) {
    if (!window.confirm(`Are you sure to delete "${user.name}"?`)) {
      return;
    }
    this.loading = true;
    this._adminService.delete(
      user,
      {
        success: response => this.onDelete.emit(user),
        error: error => this.onError.emit(),
        finally: () => this.loading = false
      }
    )
  }


}
