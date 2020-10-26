import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IBien } from 'app/shared/models/bien';
import { SERVER_API_URL } from 'app/app.constants';
import { ISolicitud } from 'app/shared/models/solicitud';

@Injectable({
  providedIn: 'root'
})
export class DesplazamientoService {
  constructor(private httpClient: HttpClient) {}

  save(solicitud): Observable<any> {
    return this.httpClient.post(`${SERVER_API_URL}api/solicitud`, solicitud);
  }

  getTipoDesplazamiento(): Observable<any> {
    return of([{ idTipoDesplazamiento: 1, nombre: 'Interno' }, { idTipoDesplazamiento: 2, nombre: 'Externo' }]);
  }
  getBienes(): Observable<any> {
    return of([{ idBien: 1, nombre: '034052345' }, { idBien: 2, nombre: '0001P012' }]);
  }
  getPersons(params): Observable<any> {
    return this.httpClient.get('https://api.github.com/search/repositories', { params });
  }

  getBienesByEmpleado(empleado): Observable<IBien[]> {
    return this.httpClient.get<IBien[]>(`${SERVER_API_URL}api/bienes/by-empleado/${empleado}`);
  }

  getEntrantes(): Observable<ISolicitud[]> {
    return this.httpClient.get<ISolicitud[]>(`${SERVER_API_URL}api/solicitud-desplazamiento/entrantes`);
  }

  getSaliente(): Observable<ISolicitud[]> {
    return this.httpClient.get<ISolicitud[]>(`${SERVER_API_URL}api/solicitud-desplazamiento/salientes`);
  }
}
