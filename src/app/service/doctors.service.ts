import { HttpClient } from '@angular/common/http';
import { Doctors } from '../model/doctors.model';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DoctorsService {

  doctorsList!: Doctors[];
  isLogin!: boolean;

  // public doctorsList: Doctors[] = [
  //     {
  //       doctorId: 1,
  //       doctorName: "Lior",
  //       age: 45,
  //       phone: "0544847714",
  //       salary: 45000
  //     },
  //     {
  //       doctorId: 2,
  //       doctorName: "Noa",
  //       age: 37,
  //       phone: "0544778714",
  //       salary: 25000
  //     }
  // ]
  constructor(private _http: HttpClient) { }

  getDoctorsListFromServer(): Observable<Doctors[]>{
    return this._http.get<Doctors[]>('https://localhost:7024/HMO/Doctors')
  }

  getByIdFromServer(id: number): Observable<Doctors>{
   return this._http.get<Doctors>(`https://localhost:7024/HMO/Doctors/${id}`)
  }

  addNewDoctorsToServer(doctor: Doctors): Observable<Doctors> {
   return this._http.post<Doctors>('https://localhost:7024/HMO/Doctors', doctor)
  }

  updateDoctors(d: Doctors): Observable<Doctors>{
   let index = this.doctorsList.indexOf(d);
   return this._http.put<Doctors>(`https://localhost:7024/HMO/Doctors`, index)
  }

  deleteDoctorsFromServer(id: number): Observable<Doctors>{
   return this._http.delete<Doctors>(`https://localhost:7024/HMO/Doctors/${id}`);
  }
}
