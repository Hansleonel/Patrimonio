import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SERVER_API_URL } from 'app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {
  solicitud = {};

  constructor(private http: HttpClient) {}

  getEmpleado(codigoEmpleado) {
    return this.http.get(`http://10.24.9.78/mindef-starter-0.0.1-SNAPSHOT/api/empleadoMindefDatos/${codigoEmpleado}`);
  }

  postSolicitud(objetoSolicitudPeticion) {
    return this.http.post(`${SERVER_API_URL}api/solicitud`, objetoSolicitudPeticion);
  }
}
