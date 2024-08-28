import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TurnService } from '../../service/turn.service';

@Component({
  selector: 'app-add-turn',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './add-turn.component.html',
  styleUrl: './add-turn.component.css'
})
export class AddTurnComponent  implements OnInit {

  public addTurn!: FormGroup
  public showAddTurn!: boolean;

  constructor(private _turnService: TurnService) { }

  ngOnInit(): void {
    this.addTurn = new FormGroup({
      "customerId": new FormControl("", Validators.required),
      "doctorId": new FormControl("", Validators.required),
      "type": new FormControl("", Validators.required)
    })
  }

  public onSubmit() {
    // this.onSaveEvent.emit(this.addForm.value)
    this._turnService.addNewTurnToServer(this.addTurn.value).subscribe({
      next:(t)=>{console.log(t)}
    });
  }

// public add(){

// }
}
