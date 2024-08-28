import { CustomerService } from '../service/customer.service';

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormsModule, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { Customer } from '../model/customer.model';
import { Router } from '@angular/router';
import { DoctorsService } from '../service/doctors.service';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  public loginForm!: FormGroup;
  public list!: Customer[];
  // public isLogin!: boolean;

    constructor(private _customerService: CustomerService, private _doctorsService: DoctorsService, private router: Router) { }

//שמירת הנתונים במשתנים
    ngOnInit(): void {
          this.loginForm = new FormGroup({
            "userName": new FormControl ("", Validators.required),
            "password": new FormControl ("", [Validators.required, Validators.minLength(8)])
          });
        }

        hide = true;
  clickEvent(event: MouseEvent) {
    this.hide = !this.hide;
    event.stopPropagation();
  }

//בדיקה אם השם משתמש וסיסמא נכונים אם כן מעביר לעמוד הבית אחרת מציג הודעת שגיאה
        onSubmit() {
          const username = this.loginForm.get('userName')?.value;
          const password = this.loginForm.get('password')?.value;
          if (username === 'sec' && password === '12345678') {
            this.router.navigate(['/homePage']);
          this._customerService.isLogin = true;
          this._doctorsService.isLogin = true;
          } else {
            this._customerService.isLogin = false;
            this._doctorsService.isLogin = false;
            alert('one of the field is uncorrect ,Please try again!');
          }
          if(this._customerService.isLogin){

          }
        }
}
