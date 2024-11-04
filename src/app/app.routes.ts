import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CharacterFormComponent } from './personajes/componentes/character-form/character-form.component';
import { CharacterDetailComponent } from './personajes/componentes/character-detail/character-detail.component';

export const routes: Routes = [
    {
    path:'characters', component: HomePageComponent
    },
    {
        path:'', redirectTo:'characters',  pathMatch: 'full' //debe coincidir con la ruta completa
    },
    { 
        path: 'add-characters', component: CharacterFormComponent
    },
    { 
        path: 'characters/:id', component: CharacterDetailComponent 
    },
    {
        path: '**', redirectTo:'characters' /// Redirección para rutas no encontradas
    }
];
