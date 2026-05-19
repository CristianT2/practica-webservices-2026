import { Routes } from '@angular/router';
import { PortalPeliculas } from './components/portal-peliculas/portal-peliculas';
import { MarcasAutos } from './components/marcas-autos/marcas-autos';

export const routes: Routes = [
    {
        path: '',
        component: PortalPeliculas,
        title: 'Películas'
    },
    {
        path: 'marcas-autos',
        component: MarcasAutos,
        title: 'Marcas de Autos'
    }
];
