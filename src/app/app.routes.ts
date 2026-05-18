import { Routes } from '@angular/router';
import { PortalPeliculas } from './components/portal-peliculas/portal-peliculas';

export const routes: Routes = [
    {
        path: '',
        component: PortalPeliculas,
        title: 'Películas'
    }
];
