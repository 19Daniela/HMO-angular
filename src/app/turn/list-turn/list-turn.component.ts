import { Component, OnInit } from '@angular/core';
import { DeleteTurnComponent } from '../delete-turn/delete-turn.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { CommonModule } from '@angular/common';
import { UpdateTurnComponent } from '../update-turn/update-turn.component';
import { Router } from '@angular/router';
import { Turn } from '../../model/turn.model';
import { TurnService } from '../../service/turn.service';

@Component({
  selector: 'app-list-turn',
  standalone: true,
  imports: [CommonModule, MatExpansionModule, UpdateTurnComponent],
  templateUrl: './list-turn.component.html',
  styleUrl: './list-turn.component.css'
})
export class ListTurnComponent implements OnInit {

  panelOpenState = false;

  public customerList!: Turn[];
  public showAddTurn!: boolean;
  public showDeleteTurn!: boolean;
  public isUpdate!: boolean;
  // public isLogin!: boolean;

  constructor(private router: Router, public _turnService: TurnService){}

     ngOnInit(): void{
         this._turnService.getTurnListFromServer().subscribe({
      next:(res) =>{
        this.customerList = res;
      }
      });
     }

//קריאה לפונקציית לקומפוננטת הוספה ע"י כפתור שקיים ברשימה
    public add(){
      this.showAddTurn = true;
      // this.router.navigate(['/addCustomer']);
    }

    public delete(){
      this.showDeleteTurn = true;
    }


   public handleDelete( id : number){
    this._turnService.deleteTurnFromServer(id).subscribe({
      next:(res)=>{
        console.log("i success delete:"+ res)}});
   }

   public update(){
      this.isUpdate = true;
   }

   public handleUpdate( t: Turn){
    this._turnService.isUpdate = true;
    this._turnService.updateTurn(t).subscribe({
      next:(res)=>{
        console.log("i success delete:"+ res)}});
   }


}
