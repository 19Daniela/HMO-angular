import { NgModule } from '@angular/core';

import { ListDoctorsComponent } from './doctors/list-doctors/list-doctors.component';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ListCustomerComponent } from './customer/list-customer/list-customer.component';
import { AddCustomerComponent } from './customer/add-customer/add-customer.component';
import { ListTurnComponent } from './turn/list-turn/list-turn.component';
import { LoginComponent } from './login/login.component';
import { UpdateCustomerComponent } from './customer/update-customer/update-customer.component';
import { AddDoctorComponent } from './doctors/add-doctor/add-doctor.component';
import { UpdateDoctorComponent } from './doctors/update-doctor/update-doctor.component';
import { DeleteDoctorComponent } from './doctors/delete-doctor/delete-doctor.component';
import { DeleteCustomerComponent } from './customer/delete-customer/delete-customer.component';
import { AddTurnComponent } from './turn/add-turn/add-turn.component';
import { UpdateTurnComponent } from './turn/update-turn/update-turn.component';
import { DeleteTurnComponent } from './turn/delete-turn/delete-turn.component';

export const routes: Routes = [
  { path: '', redirectTo: 'homePage', pathMatch: 'full'},
  { path: 'homePage', component: HomePageComponent},
  { path: 'login', component: LoginComponent},

  { path: 'listCustomer', component: ListCustomerComponent},
  { path: 'addCustomer', component: AddCustomerComponent},
  { path: 'updateCustomer/:customer', component: UpdateCustomerComponent},
  { path: 'deleteCustomer/:id', component: DeleteCustomerComponent},

  { path: 'addDoctor', component: AddDoctorComponent},
  { path: 'updateDoctor/:doctor', component: UpdateDoctorComponent},
  { path: 'deleteDoctor/:id', component: DeleteDoctorComponent},
  { path: 'listDoctors', component: ListDoctorsComponent},

  { path: 'listTurns', component: ListTurnComponent},
  { path: 'addTurns', component: AddTurnComponent},
  { path: 'updateTurns', component: UpdateTurnComponent},
  { path: 'deleteTurns', component: DeleteTurnComponent},
];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })

