import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  AdminRoutingModule,
  AdminService,
  UserListComponent,
  UserListItemComponent
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
