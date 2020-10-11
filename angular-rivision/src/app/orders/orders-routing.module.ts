import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { OrdersComponent } from './orders.component';
import { RegistrationComponent } from './registration/registration.component';
import { AgriWrapperComponent } from './agri-wrapper/agri-wrapper.component';

const routes: Routes = [
  { path: '', component: OrdersComponent,
    children: [
      {
      path: '',
      redirectTo: '/login',
      pathMatch: 'full'
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegistrationComponent
      },
      {
        path: 'agri',
        component: AgriWrapperComponent
      }
    ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes),
               MatSnackBarModule],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
