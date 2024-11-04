import { Component } from '@angular/core';
import { CharacterListComponent } from '../../personajes/componentes/character-list/character-list.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CharacterListComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
