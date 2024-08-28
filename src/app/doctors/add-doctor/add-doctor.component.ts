import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder,FormsModule,ReactiveFormsModule, Validators } from '@angular/forms';
import { DoctorsService } from '../../service/doctors.service';


@Component({
  selector: 'app-add-doctor',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './add-doctor.component.html',
  styleUrl: './add-doctor.component.css'
})
export class AddDoctorComponent implements OnInit {

  public addDoctor!: FormGroup

  constructor(private _doctorsService: DoctorsService) { }

  ngOnInit(): void {
    this.addDoctor = new FormGroup({
      "name": new FormControl("", Validators.required),
      "age": new FormControl("", Validators.required),
      "phone": new FormControl("", Validators.required),
      "salary": new FormControl("", Validators.required)
    })
  }

  // public onSubmit() {

  //   this._doctorsService.addNewDoctorsToServer(this.addDoctor.value).subscribe();
  // }

  public add()
  {
   let ans =  this._doctorsService.addNewDoctorsToServer(this.addDoctor.value).subscribe();
  //  this._customerService.getCustomerListFromServer().subscribe();
    if(!ans){
        alert('Doctor can not be added, Please try again');
    }
  }
}
