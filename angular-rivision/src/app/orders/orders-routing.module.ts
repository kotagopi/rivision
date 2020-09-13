import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { OrdersComponent } from './orders.component';
import { TourOfHeroesComponent } from './tour-of-heroes/tour-of-heroes.component';
import { RegistrationComponent } from './registration/registration.component';

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
        path: 'heroes',
        component: TourOfHeroesComponent
      }
    ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes),
               MatSnackBarModule],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
