import { Personaje } from './../../interface/personaje-interface';
import { CommonModule } from '@angular/common';
import { Component, inject, Inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { PersonajeServiceService } from '../../servicios/personaje-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-character-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './character-form.component.html',
  styleUrl: './character-form.component.css'
})
export class CharacterFormComponent implements OnInit{
  id ?: string | null;


  ngOnInit(): void {
    this.verificarEdicion();
  }

  fb= inject(FormBuilder);
  service= inject(PersonajeServiceService);
  router= inject(Router);
  activated= inject(ActivatedRoute);

  personaje?: Personaje;
  
  formulario= this.fb.nonNullable.group({
   name: ['', [Validators.required]],
   alias: ['', [Validators.required]],
   description: ['', [Validators.required]],
   powers: ['', [Validators.required]]
  })

  agregarPersonaje(){

    if(this.formulario.invalid) return
    this.personaje= this.formulario.getRawValue(); //obtenemos los datos del formulario

    if(this.id){// si existe un id
      this.service.putPersonaje(this.id, this.personaje).subscribe({
        next:()=>{
         alert('Personaje actualizado...');
         this.router.navigateByUrl('');
         alert('Home Page...');
        },
        error: (e: Error)=> {
            console.log(e.message);
        }
       })
    }else{
      this.service.postPersonaje(this.personaje).subscribe({
        next:()=>{
         alert('Personaje agregado...');
         this.router.navigateByUrl('');
        },
        error: (e: Error)=> {
            console.log(e.message);
        }
       })
    }
  
   
}

verificarEdicion(){
  this.activated.paramMap.subscribe({
    next:(param)=>{
      this.id= param.get('id');//puede devolver string o null
      if (this.id) {
        this.service.getPersonajeById(this.id).subscribe(
          {
          next:(personaje)=>{
          this.formulario.patchValue(personaje); // Rellena el formulario con los datos del personaje
          }
    });
    } 
    },
  error:(e: Error)=>{
    console.log('error');
  }
})
}
}
