import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { TurnService } from '../../service/turn.service';

@Component({
  selector: 'app-delete-turn',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './delete-turn.component.html',
  styleUrl: './delete-turn.component.css'
})
export class DeleteTurnComponent {



@Output() deleteTurn = new EventEmitter<number>();
@Input() idTurn! :number
constructor(private _turnService: TurnService) { }


public onDelete(){

 this.deleteTurn.emit(this.idTurn);
}
}
