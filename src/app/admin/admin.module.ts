import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UserListComponent } from './components/user-list/user-list.component';
import { UserListItemComponent } from './components/user-list-item/user-list-item.component';

import {
  AdminRoutingModule,
  AdminService
} from './admin.barrel';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule
  ],
  declarations: [
    UserListComponent,
    UserListItemComponent
  ],
  providers: [
    AdminService
  ]
})
export class AdminModule { }
