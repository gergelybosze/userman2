import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'admin', component: UserListComponent }
  ])],
  exports: [RouterModule]
})
export class AdminRoutingModule {
  //
}
