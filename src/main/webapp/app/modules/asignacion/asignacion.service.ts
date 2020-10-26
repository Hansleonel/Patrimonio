import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SERVER_API_URL } from 'app/app.constants';
import { IAsignacion } from 'app/shared/models/asignacion';

@Injectable({
  providedIn: 'root'
})
export class AsignacionService {
  asignarMueble = {};
  asignacion = {};

  constructor(private http: HttpClient) {}

  getEmpleado(codigoEmpleado) {
    return this.http.get(`http://sistemas.mindef.gob.pe/mindef-starter-0.0.1-SNAPSHOT/api/empleadoMindefDatos/${codigoEmpleado}`);
  }

  getEmpleadoWithDni(dniEmpleado) {
    return this.http.get(`http://10.24.9.39/restMD56/user/listaPersonal?dni=${dniEmpleado}`);
  }

  getBienCodigo(codigoSIGA) {
    return this.http.get(`${SERVER_API_URL}api/bien/${codigoSIGA}`);
  }

  getBienByDescription(descripcionBien) {
    return this.http.get(`${SERVER_API_URL}api/BienDescripcion/${descripcionBien}?size=1080`);
  }

  getSolicitud(nroSolicitud) {
    return this.http.get(`${SERVER_API_URL}api/solicitud/${nroSolicitud}`);
  }

  patchAsignarBienMueble(idBienMueble, dniEmpleado) {
    this.asignarMueble = {
      codigoPatrimonial: idBienMueble,
      empleado: dniEmpleado
    };

    return this.http.patch(`${SERVER_API_URL}api/bien/${idBienMueble}`, this.asignarMueble);
  }

  postCrearAsignacion(asignacion: IAsignacion) {
    this.asignacion = {
      id_empleado: '08179975',
      modalidad: 'CAS',
      jefe_aprobacion: 'aprobado',
      patrimonio_aprobacion: 'aprobado',
      id_bien: 112236140032,
      fecha_asignacion: '23/01/2018',
      estado_asignacion: 'aprobado'
    };

    return this.http.post(`${SERVER_API_URL}api/asignacion`, asignacion);
  }
}
