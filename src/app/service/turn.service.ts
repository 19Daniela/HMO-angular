import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Turn } from '../model/turn.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TurnService {

   turnList!: Turn[];
   isUpdate!: boolean;
   isLogin!: boolean;

  constructor(private _http: HttpClient) { }

  getTurnListFromServer(): Observable<Turn[]>{
    return this._http.get<Turn[]>('https://localhost:7024/HMO/Turn')
  }

  getByIdFromServer(id: number): Observable<Turn>{
   return this._http.get<Turn>(`https://localhost:7024/HMO/Turn/${id}`)
  }

  addNewTurnToServer(turn: Turn): Observable<Turn> {
   return this._http.post<Turn>('https://localhost:7024/HMO/Turn', turn)
  }

  updateTurn(t: Turn): Observable<Turn>{
   let index = this.turnList.indexOf(t);
   return this._http.put<Turn>(`https://localhost:7024/HMO/Turn`, index)
  }

  deleteTurnFromServer(id: number): Observable<Turn>{
   return this._http.delete<Turn>(`https://localhost:7024/HMO/Turn/${id}`);
  }

}
