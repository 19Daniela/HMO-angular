import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomerService } from '../../service/customer.service';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-add-customer',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './add-customer.component.html',
  styleUrl: './add-customer.component.css'
})
export class AddCustomerComponent {

  public addForm!: FormGroup;

  constructor(private _customerService: CustomerService, public dialog: MatDialog){}

  ngOnInit(): void{
    this.addForm = new FormGroup({
      name: new FormControl("", Validators.required),
      phone: new FormControl("", [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      address: new FormControl(""),
      email: new FormControl("", Validators.required),
      age: new FormControl("", Validators.required)
    })
  }

  openDialog(){
    this.dialog.open(AddCustomerComponent);
  }

  public add()
  {
   let ans =  this._customerService.addNewCustomerToServer(this.addForm.value).subscribe();
  //  this._customerService.getCustomerListFromServer().subscribe();
    if(!ans){
        alert('Customer can not be added, Please try again');
    }
    this.ngOnInit();
  }
}
