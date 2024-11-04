import { Component, inject, OnInit } from '@angular/core';
import { PersonajeServiceService } from '../../servicios/personaje-service.service';
import { ActivatedRoute, Router, TitleStrategy } from '@angular/router';
import { Personaje } from '../../interface/personaje-interface';

@Component({
  selector: 'app-character-detail',
  standalone: true,
  imports: [],
  templateUrl: './character-detail.component.html',
  styleUrl: './character-detail.component.css'
})
export class CharacterDetailComponent implements OnInit{

  router= inject(Router);
  service= inject(PersonajeServiceService); //inyecto e servicio
  activated= inject(ActivatedRoute); //permite obtener información sobre la URL actual en el componente

  personaje?: Personaje;

  ngOnInit(): void {
    this.activated.paramMap.subscribe({
    next:(param)=>{ //buena paractica tener un netx para manejar ese dato
    const id= param.get('id'); // Obtener el 'id' de los parámetros de la URL
    if(id){
      this.service.getPersonajeById(id).subscribe({
    next: (personaje)=>{
      this.personaje=personaje; // Asignar el personaje recibido
    },
    error:(e: Error)=>{
      console.log("Error al obtener el personaje:", e.message);
     }
    })
  }
  },
  error:(e: Error)=>{
   console.log("Error al obtener el parámetro de la URL:",e.message);
  }
})
}
onEdit() {
  // Navega a la ruta del formulario de edición, pasando el id
  if(this.personaje){
    this.router.navigate([`add-characters`, { id: this.personaje.id }]);
  }
  
}

}
