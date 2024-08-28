import { Component, OnInit } from '@angular/core';

import {
  MatDialog,
 // MAT_DIALOG_DATA,
 // MatDialogRef,
 // MatDialogTitle,
 // MatDialogContent,
 // MatDialogActions,
 // MatDialogClose,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {FormBuilder, FormControl, FormGroup, FormsModule, Validators} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Dialog2Component } from '../dialog2/dialog2.component';


@Component({
  selector: 'app-dialog1',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule],
  templateUrl: './dialog1.component.html',
  styleUrl: './dialog1.component.css'
})
export class Dialog1Component implements OnInit{

  public addDoctor!: FormGroup

  constructor(public dialog: MatDialog,  private formBuilder: FormBuilder) {}



  ngOnInit(): void {
    this.addDoctor = this.formBuilder.group({
      "name": new FormControl("", Validators.required),
      "age": new FormControl("", Validators.required),
      "phone": new FormControl("", Validators.required),
      "salary": new FormControl("", Validators.required)
    })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(Dialog2Component, {data: {doctor: this.addDoctor.value}, });
      

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.addDoctor = result;
    });
  }

}


