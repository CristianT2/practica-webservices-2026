import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MarcasService } from '../../services/marcas-service';

@Component({
  selector: 'app-marcas-autos',
  imports: [],
  templateUrl: './marcas-autos.html',
  styleUrl: './marcas-autos.css',
})
export class MarcasAutos implements OnInit {

  marcas: any[] = [];
  modelos: any[] = [];

  constructor(private marcasService: MarcasService, private cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.cargarMarcas();
  }

  cargarMarcas(): void {
    this.marcasService.obtenerMarcas().subscribe(
      (response: any) => {
        this.marcas = response;
        console.log('Marcas cargadas:', this.marcas);
        this.cdRef.detectChanges();
      },
      (error: any) => {
        console.error('Error al cargar las marcas:', error);
      }
    );
  };

  cargarModelos(id: number): void {
    this.marcasService.ObtenerModelos(id).subscribe(
      (response: any) => {
        this.modelos = response;
        console.log('Modelos cargados:', this.modelos);
        this.cdRef.detectChanges();
      },
      (error: any) => {
        console.error('Error al cargar los modelos:', error);
      }
    );
  };

  cerrarModal(): void {
    this.modelos = [];
  }
}
