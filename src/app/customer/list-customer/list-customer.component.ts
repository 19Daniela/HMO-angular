import { Component, OnInit } from '@angular/core';

import { CustomerService } from '../../service/customer.service';
import { Customer } from '../../model/customer.model';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddCustomerComponent } from '../add-customer/add-customer.component';
import { DeleteCustomerComponent } from '../delete-customer/delete-customer.component';
import { MatIconModule } from '@angular/material/icon';
import { UpdateCustomerComponent } from '../update-customer/update-customer.component';
import { Dialog1Component } from '../dialog1/dialog1.component';

@Component({
  selector: 'app-list-customer',
  standalone: true,
  imports: [CommonModule, FormsModule, AddCustomerComponent, DeleteCustomerComponent, MatIconModule, UpdateCustomerComponent, Dialog1Component],
  templateUrl: './list-customer.component.html',
  styleUrl: './list-customer.component.css'
})
export class ListCustomerComponent implements OnInit{

  public customerList!: Customer[];
  public showAddCustomer!: boolean;
  public showDeleteCustomer!: boolean;
  public isUpdate!: boolean;
  // public isLogin!: boolean;

  constructor(private router: Router, public _customerService: CustomerService){}

     ngOnInit(): void{
         this._customerService.getCustomerListFromServer().subscribe({
      next:(res) =>{
        this.customerList = res;
      }
      });
     }

//קריאה לפונקציית לקומפוננטת הוספה ע"י כפתור שקיים ברשימה
    public add(){
      this.showAddCustomer = true;
      // this.router.navigate(['/addCustomer']);
    }

    public delete(){
      this.showDeleteCustomer = true;
    }


   public handleDelete( id : number){
    this._customerService.deleteCustomerFromServer(id).subscribe({
      next:(res)=>{
        console.log("i success delete:"+ res)}});
   }

   public update(){
      this.isUpdate = true;
   }

   public handleUpdate( c: Customer){
    this._customerService.isUpdate = true;
    this._customerService.updateCustomer(c).subscribe({
      next:(res)=>{
        console.log("i success delete:"+ res)}});
   }
}
