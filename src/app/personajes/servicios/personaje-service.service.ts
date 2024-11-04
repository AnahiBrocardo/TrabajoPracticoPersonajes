import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Personaje } from '../interface/personaje-interface';

@Injectable({
  providedIn: 'root'
})
export class PersonajeServiceService {
  urlBase= "http://localhost:3000/personajes";

  constructor() { }

  http= inject(HttpClient);

  getPersonajes (): Observable<Personaje[]>{
    return this.http.get<Personaje[]> (this.urlBase);
  }

  getPersonajeById(id: string):Observable<Personaje>{
    return this.http.get<Personaje>(`${this.urlBase}/${id}`);
  } 

  postPersonaje(personaje: Personaje):Observable<Personaje>{
    return this.http.post<Personaje>(`${this.urlBase}`, personaje);
  }
  
  putPersonaje(id: string, personaje: Personaje):Observable<Personaje>{
    return this.http.put<Personaje>(`${this.urlBase}/${id}`, personaje);
  }

  deletePersonaje(id: string):Observable<Personaje>{
    return this.http.delete<Personaje>(`${this.urlBase}/${id}`);
  }

}