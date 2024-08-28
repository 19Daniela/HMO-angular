import { HttpClient } from '@angular/common/http';
import { Customer } from '../model/customer.model';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  isLogin: boolean = false;
  isUpdate: boolean = false;
  customerList!: Customer[];

  // public customerList: Customer[] =[
  //   {
  //     customerId: 1,
  //     customerName: "Ravid",
  //     phone: 544847744,
  //     address: "aaa",
  //     email: "r@gmail.com",
  //     age: 22
  //   },
  //   {
  //     customerId: 2,
  //     customerName: "Liel",
  //     phone: 544846253,
  //     address: "mkv",
  //     email: "l7@gmail.com",
  //     age: 22
  //   }
  // ]

  constructor(private _http: HttpClient) { }

     getCustomerList(): Customer[] {
      return this.customerList
     }

     getCustomerListFromServer(): Observable<Customer[]>{
       return this._http.get<Customer[]>('https://localhost:7024/HMO/Customer')
     }

     getByIdFromServer(id: number): Observable<Customer>{
      return this._http.get<Customer>(`https://localhost:7024/HMO/Customer/${id}`)
     }

     addNewCustomerToServer(customer: Customer): Observable<Customer> {
      return this._http.post<Customer>('https://localhost:7024/HMO/Customer', customer)
     }

     updateCustomer(c: Customer): Observable<Customer>{
      let index = this.customerList.indexOf(c);
      return this._http.put<Customer>(`https://localhost:7024/HMO/Customer`, index)
     }

     deleteCustomerFromServer(id: number): Observable<Customer>{
      return this._http.delete<Customer>(`https://localhost:7024/HMO/Customer/${id}`);
     }
  }
