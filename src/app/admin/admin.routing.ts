/**
 * Release notes:
 *     20170525 - BoszeG
 *        AdminAuthGuard
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';

import {
  AdminAuthGuard,
} from '../shared/shared.barrel'


@NgModule({
  imports: [RouterModule.forChild([
    { path: 'admin', component: UserListComponent, canActivate: [AdminAuthGuard] }
  ])],
  exports: [RouterModule]
})
export class AdminRoutingModule {
  //
}
