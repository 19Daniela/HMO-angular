import {Input, OnInit, } from '@angular/core';
import { Component } from '@angular/core';

import { DoctorsService } from '../../service/doctors.service';
import { Doctors } from '../../model/doctors.model';
import { CommonModule } from '@angular/common';
import {MatExpansionModule} from '@angular/material/expansion';

import { Router } from '@angular/router';
import { UpdateDoctorComponent } from '../update-doctor/update-doctor.component';
import { DeleteDoctorComponent } from '../delete-doctor/delete-doctor.component';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AddDoctorComponent } from '../add-doctor/add-doctor.component';
import { Dialog2Component } from '../../dialog2/dialog2.component';
import { Dialog1Component } from '../../dialog1/dialog1.component';

@Component({
  selector: 'app-list-doctors',
  standalone: true,
  imports: [CommonModule, MatExpansionModule, UpdateDoctorComponent, DeleteDoctorComponent, Dialog2Component, Dialog1Component, AddDoctorComponent],
  templateUrl: './list-doctors.component.html',
  styleUrl: './list-doctors.component.css'
})
export class ListDoctorsComponent implements OnInit {
  panelOpenState = false;

  constructor(private router: Router,public _doctorsService: DoctorsService) { }

  public doctors!: Doctors[];
  public click: boolean =false
  public clickDelete: boolean =false
  public currentDoctor: Doctors|undefined
  public id!:number;
  public showAddDoctor!: boolean;



  ngOnInit(): void {
    this._doctorsService.getDoctorsListFromServer().subscribe({
      next: (res) => {
        this.doctors = res;
      }
    });
    this._doctorsService.getDoctorsListFromServer(); //לבדוק אם חסר משהו פה
  }

  public add(){
    this.showAddDoctor = true;
    this.ngOnInit();
    // this.router.navigate(['/addCustomer']);
  }

 public getAllDoctors():Doctors[]
  {
    return this.doctors;
  }

  public navToAddDoctor():void
  {
    this.router.navigate(['/addDoctor']);
  }

  public isUpdate(d: Doctors)
  {
    this.currentDoctor = d;
     this.click = !this.click
  }

  public isDelete()
  {
     this.clickDelete = !this.clickDelete
  }

  public isTrue() :boolean
  {
    return this.click;
  }

  // public onSubmit() {
  //   // this.onSaveEvent.emit(this.addForm.value)
  //   this._doctorsService.updateDoctorInServer(this.updateDoctor.value[1],this.updateDoctor.value).subscribe({
  //     next:(f)=>{console.log(f)}
  //   });

   public handleSaveUpdate( formData : any){
    console.log(formData);
    this._doctorsService.updateDoctors(formData.id).subscribe({
      next:(res)=>{console.log("i update the doctor")
      }
    });
    //this.getList();
   }

  // public handleSaveUpdate():void {
  //   this._doctorsService.getDoctorsListFromServer().subscribe({
  //     next:(res)=>{
  //       this.doctors = res;
  //       console.log(this.doctors)
  //       console.log("i got list")}
  //   });


    // this._doctorsService.updateDoctorInServer(formData.id, formData)
    //   .subscribe(
    //     (updatedDoctor: Doctors) => {

    //       console.log('Doctor updated successfully:', updatedDoctor);
    //       // Handle any additional logic after successful update if needed
    //     },
    //     (error: any) => {
    //       console.error('Error occurred while updating doctor:', error);
    //       // Handle error if needed
    //     }
    //   );
  //}

  public getList()
  {
     this._doctorsService.getDoctorsListFromServer().subscribe();
  }

   public handleDelete( id : number){
    this._doctorsService.deleteDoctorsFromServer(id).subscribe({
      next:(res)=>{

        console.log("i success delete:"+ res)}});
     this.getList();
   }
}

