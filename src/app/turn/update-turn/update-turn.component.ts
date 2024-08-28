import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Turn } from '../../model/turn.model';
import { ListTurnComponent } from '../list-turn/list-turn.component';

@Component({
  selector: 'app-update-turn',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule,ListTurnComponent],
  templateUrl: './update-turn.component.html',
  styleUrl: './update-turn.component.css'
})
export class UpdateTurnComponent implements OnInit{

  public updateTurn!: FormGroup
  @Input() turn! : Turn
  @Output() saveUpdate = new EventEmitter<any>();

  ngOnInit(): void {
    this.updateTurn = new FormGroup({
      "customerId": new FormControl(this.turn.customerId, Validators.required),
      "doctorId": new FormControl(this.turn.doctorId, Validators.required),
      "type": new FormControl(this.turn.type, Validators.required)

    })
  }

 public onSubmit() {

        this.saveUpdate.emit(this.updateTurn.value);

  }
}
