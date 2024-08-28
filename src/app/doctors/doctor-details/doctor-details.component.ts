import { DoctorsService } from './../../service/doctors.service';
import { Component ,Input} from '@angular/core';
import { FormControl, FormGroup, FormBuilder,FormsModule,ReactiveFormsModule, Validators } from '@angular/forms';
import {  Output } from '@angular/core';
import { Doctors } from '../../model/doctors.model';

@Component({
  selector: 'app-doctor-details',
  standalone: true,
  imports: [],
  templateUrl: './doctor-details.component.html',
  styleUrl: './doctor-details.component.css'
})
export class DoctorDetailsComponent {

     @Input() details!: Doctors[]


  // @Input() item: string;

public call()
{

}

}
