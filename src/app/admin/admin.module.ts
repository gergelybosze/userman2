import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserListItemComponent } from './components/user-list-item/user-list-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UserListComponent, UserListItemComponent]
})
export class AdminModule { }
