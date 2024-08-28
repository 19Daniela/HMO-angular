import { CommonModule } from '@angular/common';
import { CustomerService } from '../service/customer.service';
import { NavComponent } from './../nav/nav.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [NavComponent, CommonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  constructor(public _customerService: CustomerService){}

}
