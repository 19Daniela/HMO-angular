import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

import { DoctorsService } from '../../service/doctors.service';
import { Doctors } from '../../model/doctors.model';
import { ListDoctorsComponent } from '../list-doctors/list-doctors.component';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-doctor',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './update-doctor.component.html',
  styleUrl: './update-doctor.component.css'
})
export class UpdateDoctorComponent  {


  constructor(private router : Router,private _doctorsService: DoctorsService) { }

  public updateDoctor!: FormGroup


  @Input()
  public doctor!: Doctors;

  @Output()
  public onUpdateDoctor: EventEmitter<any> = new EventEmitter<any>()

  save(){
    let d: Doctors = {
      id: parseInt(document.getElementById('idId')?.innerText || '') || this.doctor.id,
      name: document.getElementById('nameId')?.innerText || this.doctor.name,
      age: parseInt(document.getElementById('ageId')?.innerText || '') || this.doctor.age,
      phone: document.getElementById('phoneId')?.innerText || this.doctor.phone,
      salary:  parseInt(document.getElementById('salaryId')?.innerText || '') || this.doctor.salary,
    };
     this.onUpdateDoctor.emit();
     this._doctorsService.updateDoctors(d);
  }


}
