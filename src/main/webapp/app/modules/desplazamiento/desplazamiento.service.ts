import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesplazamientoService {
  constructor() {}

  save(param): Observable<any> {
    return of(param);
  }
  getTipoDesplazamiento(): Observable<any> {
    return of([{ idTipoDesplazamiento: 1, nombre: 'Entrada' }, { idTipoDesplazamiento: 2, nombre: 'Salida' }]);
  }
  getBienes(): Observable<any> {
    return of([{ idBien: 1, nombre: '034052345' }, { idBien: 2, nombre: '0001P012' }]);
  }
}
