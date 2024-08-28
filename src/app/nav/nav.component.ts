import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { Router, RouterModule } from '@angular/router';
import { CustomerService } from '../service/customer.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterModule, CommonModule, LoginComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
    constructor( public login: CustomerService, private router: Router) { }

    // navigateToListCustomer(){
    //   this.router.navigate(['/listCustomer']);
    // }
    // navigateToListDoctors(){
    //   this.router.navigate(['/listDoctors']);
    // }
    // navigateToListTurns(){
    //   this.router.navigate(['/listTurns']);
    // }
    // navigateToListLogin(){
    //   this.router.navigate(['/login']);
    // }
    // navigateToListHomePage(){
    //   this.router.navigate(['/homePage']);
    // }
}
