// import { Component, Inject, OnInit } from '@angular/core';


import {Component, Inject,OnInit} from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {FormBuilder, FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { DoctorsService } from '../../service/doctors.service';
import { CommonModule } from '@angular/common';
import { DialogData } from './dialog-data';

@Component({
  selector: 'app-dialog2',
  standalone: true,
  imports: [  MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, CommonModule],
  templateUrl: './dialog2.component.html',
  styleUrl: './dialog2.component.css'
})
export class Dialog2Component {


  constructor( public dialogRef: MatDialogRef<Dialog2Component>,@Inject(MAT_DIALOG_DATA) public data: any,
    private _doctorsService: DoctorsService)
   {
    console.log(data)
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  public onSubmit() {
    this._doctorsService.addNewDoctorsToServer(this.data.doctor).subscribe({
      next:(form)=>{console.log(form)}
    });
    this.dialogRef.close();
}
}
