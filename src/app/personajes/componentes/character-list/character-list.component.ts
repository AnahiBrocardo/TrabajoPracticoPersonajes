import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CharacterCardComponent } from '../character-card/character-card.component';
import { Personaje } from '../../interface/personaje-interface';
import { PersonajeServiceService } from '../../servicios/personaje-service.service';

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [CharacterCardComponent, RouterModule],
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.css'
})
export class CharacterListComponent implements OnInit{
  ngOnInit(): void {
    this.listarPersonajes();
  }

  personajes: Personaje[]= [];
  ps= inject(PersonajeServiceService);
  router= inject(Router);

   listarPersonajes(){
    this.ps.getPersonajes().subscribe({
      next: (personajes: Personaje[]) => {
        this.personajes = personajes;
      },
     error: (e: Error)=> {
      console.log(e.message);
     }
    })
  }

  //metodo que recibe id
  OnDetalles(id: string){
   this.router.navigateByUrl(`characters/${id}`); //envio a esa rta el id
  }

  onDelete(id: string){
    this.ps.deletePersonaje(id).subscribe({
      next: () => {
       alert('Tarea eliminada');
      },
     error: (e: Error)=> {
      console.log(e.message);
     }
    })
   }
}
