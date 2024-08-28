import { MatIconModule } from '@angular/material/icon';
import { Component, EventEmitter, Output, Input } from '@angular/core';
import { CustomerService } from '../../service/customer.service';
import { ListCustomerComponent } from '../list-customer/list-customer.component';

@Component({
  selector: 'app-delete-customer',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './delete-customer.component.html',
  styleUrl: './delete-customer.component.css'
})
export class DeleteCustomerComponent {

  constructor(private _customerService: CustomerService){}

  @Output()
    deleteCustomer = new EventEmitter<number>();
  @Input()
    id!: number;

public onDelete(){
  this.deleteCustomer.emit(this.id);

  this._customerService.getCustomerListFromServer().subscribe();
}

}
