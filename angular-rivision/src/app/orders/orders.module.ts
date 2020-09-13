import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule } from '@angular/forms';
import { TourOfHeroesComponent } from './tour-of-heroes/tour-of-heroes.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [OrdersComponent, LoginComponent, RegistrationComponent, TourOfHeroesComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    FormsModule,
    MatSnackBarModule
  ]
})
export class OrdersModule { }
