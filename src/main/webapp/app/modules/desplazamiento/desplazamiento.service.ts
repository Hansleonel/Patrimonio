import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DesplazamientoService {
  constructor(private httpClient: HttpClient) {}

  save(param): Observable<any> {
    return of(param);
  }
  getTipoDesplazamiento(): Observable<any> {
    return of([{ idTipoDesplazamiento: 1, nombre: 'Entrada' }, { idTipoDesplazamiento: 2, nombre: 'Salida' }]);
  }
  getBienes(): Observable<any> {
    return of([{ idBien: 1, nombre: '034052345' }, { idBien: 2, nombre: '0001P012' }]);
  }
  getPersons(params): Observable<any> {
    return this.httpClient.get('https://api.github.com/search/repositories', { params });
  }
}
