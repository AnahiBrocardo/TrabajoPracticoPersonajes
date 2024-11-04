import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { Personaje } from '../../interface/personaje-interface';

@Component({
  selector: 'app-character-card',
  standalone: true,
  imports: [],
  templateUrl: './character-card.component.html',
  styleUrl: './character-card.component.css'
})
export class CharacterCardComponent {

  @Input()  //recibo datos del padre
  personaje!: Personaje; //inicializada antes de su uso, posibilidad undefined

  @Output() verDetallesEvent= new  EventEmitter<string>();
  @Output() deleteEvent= new  EventEmitter<string>();

  OnDetalles(){
    this.verDetallesEvent.emit(this.personaje.id);
  }

  OnDelete(){
    this.deleteEvent.emit(this.personaje.id);
  }
}
