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
  constructor(private http: HttpClient) {}

  save(param): Observable<any> {
    // return of(param);
    return this.http.post(`${SERVER_API_URL}api/solicitud`, param);
  }

  getSolicitudes(params): Observable<any[]> {
    return this.http.get<any[]>(`${SERVER_API_URL}api/solicitud`, { params });
  }
  getSolicitud(id: string): Observable<any[]> {
    return this.http.get<any[]>(`${SERVER_API_URL}api/solicitud/${id}`);
  }
  getMotivos(params: any): Observable<any[]> {
    return this.http.get<any[]>(`${SERVER_API_URL}api/motivos`, { params });
  }

  AprobarSolicitud(id: string): Observable<any> {
    return this.http.post(`${SERVER_API_URL}api/solicitud/${id}/aprobar`, {});
  }
  rechazarSolicitd(id: string, solicitud: any): Observable<any> {
    return this.http.post(`${SERVER_API_URL}api/solicitud/${id}/denegar`, solicitud);
  }

  getTipoDesplazamiento(): Observable<any> {
    return of([{ idTipoDesplazamiento: 1, nombre: 'Interno' }, { idTipoDesplazamiento: 2, nombre: 'Externo' }]);
  }

  getBienes(): Observable<any> {
    return of([{ idBien: 1, nombre: '034052345' }, { idBien: 2, nombre: '0001P012' }]);
  }

  getPersons(params): Observable<any> {
    return this.http.get('https://api.github.com/search/repositories', { params });
  }

  requestToJson(item: any) {
    return {
      tipo: item.tipoDesplazamiento,
      codigo: item.codigoUsuario,
      codigoBien: item.codigoBien,
      fecha_solicitud: item.fechaInicioDesplazamiento,
      fecha_atencion: item.fechaFinDesplazamiento,
      descripcionRespuesta: item.detalle
      // idProceso: ['', Validators.required]
    };
  }

  getBienesByEmpleado(empleado): Observable<IBien[]> {
    return this.http.get<IBien[]>(`${SERVER_API_URL}api/bienes/by-empleado/${empleado}`);
  }

  getEntrantes(): Observable<ISolicitud[]> {
    return this.http.get<ISolicitud[]>(`${SERVER_API_URL}api/solicitud-desplazamiento/entrantes`);
  }

  getSaliente(): Observable<ISolicitud[]> {
    return this.http.get<ISolicitud[]>(`${SERVER_API_URL}api/solicitud-desplazamiento/salientes`);
  }
}

/*
{
  "id_solicitud" : 4,
  "observacion" : null,
  "estado" : 0,
  "fecha_solicitud" : null,
  "dociden" : null,
  "proceso" : null,
  "motivo" : null,
  "fecha_atencion" : null,
  "fecha_respuesta" : null,
  "fecha_finalizdo" : null,
  "descripcionRespuesta" : null,
  "tipo" : 0
}*/
