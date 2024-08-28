import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Customer } from '../../model/customer.model';
import { CustomerService } from '../../service/customer.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-customer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './update-customer.component.html',
  styleUrl: './update-customer.component.css'
})
export class UpdateCustomerComponent {

  // public showUpdate!: boolean;

  @Input()
  public customer!: Customer;

  @Output()
  public onUpdateCustomer: EventEmitter<any> = new EventEmitter<any>()

  constructor(public _customerService: CustomerService){}

  save(){
    let c: Customer = {
      id: parseInt(document.getElementById('idId')?.innerText || '') || this.customer.id,
      name: document.getElementById('nameId')?.innerText || this.customer.name,
      phone: document.getElementById('phoneId')?.innerText  || this.customer.phone,
      email: document.getElementById('emailId')?.innerText || this.customer.email,
      age:  parseInt(document.getElementById('ageId')?.innerText || '') || this.customer.age,
    };
     this.onUpdateCustomer.emit();
     this._customerService.updateCustomer(c);
  }
}
