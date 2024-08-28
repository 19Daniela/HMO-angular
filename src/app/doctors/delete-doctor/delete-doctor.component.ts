import { Component,EventEmitter,Output ,Input} from '@angular/core';
import { DoctorsService } from '../../service/doctors.service';
import { Doctors } from '../../model/doctors.model';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-delete-doctor',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './delete-doctor.component.html',
  styleUrl: './delete-doctor.component.css'
})
export class DeleteDoctorComponent {


@Output() deleteDoctor = new EventEmitter<number>();
 @Input() id! :number
 
constructor(private _doctorsService: DoctorsService) { }

public onDelete(){
  this.deleteDoctor.emit(this.id);
  this._doctorsService.getDoctorsListFromServer().subscribe();
}
}
