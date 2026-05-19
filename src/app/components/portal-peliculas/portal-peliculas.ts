import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { PeliculaService } from '../../services/pelicula-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portal-peliculas',
  imports: [CommonModule],
  templateUrl: './portal-peliculas.html',
  styleUrl: './portal-peliculas.css',
})
export class PortalPeliculas implements OnInit{
  
  peliculas: any[] = [];
  cargando: boolean = true;

  constructor(private peliculasService: PeliculaService, private cdRef: ChangeDetectorRef) { };
  
  ngOnInit(): void {
    this.obtenerPeliculas();
  }

  public obtenerPeliculas(): void {
    this.peliculasService.obtenerPeliculas().subscribe(
      (response) => {
        this.peliculas = response;
        console.log(this.peliculas);
        this.cargando = false;
        this.cdRef.detectChanges();
      },
      (error) => {
        console.error('Error al obtener las películas:', error);
        this.cargando = false;
      }
    );
  }
}
