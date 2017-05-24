import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserListComponent } from './admin.barrel'

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'admin', component: UserListComponent }
  ])],
  exports: [RouterModule]
})
export class AdminRoutingModule {
  //
}
