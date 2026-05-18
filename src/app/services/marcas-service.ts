import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MarcasService {

  private URL_API = 'https://car-specs.p.rapidapi.com/v2/cars/makes';
  private API_KEY = '362d472279msh43ebf90773410d7p19b7ddjsn7ede4f6dd219';

  constructor(private httpClient: HttpClient) { }

  obtenerMarcas(): Observable<any> {
    const options = {
      headers: new HttpHeaders({
        'X-RapidAPI-Key': this.API_KEY,
        'X-RapidAPI-Host': 'car-specs.p.rapidapi.com',
      })
    };
    return this.httpClient.get(this.URL_API, options);
  }

  ObtenerModelos(id: number): Observable<any> {
    const options = {
      headers: new HttpHeaders({
        'X-RapidAPI-Key': this.API_KEY,
        'X-RapidAPI-Host': 'car-specs.p.rapidapi.com',
      })
    };
    return this.httpClient.get(`${this.URL_API}/${id}/models`, options);
  }
}
