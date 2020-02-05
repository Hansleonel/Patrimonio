import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AsignacionService {
  asignarMueble = {};
  asignacion = {};

  constructor(private http: HttpClient) {}

  getEmpleado(codigoEmpleado) {
    return this.http.get(`http://10.24.9.78/mindef-starter-0.0.1-SNAPSHOT/api/empleadoMindefDatos/${codigoEmpleado}`);
  }

  getEmpleadoWithDni(dniEmpleado) {
    return this.http.get(`http://10.24.9.39/restMD56/user/listaPersonal?dni=${dniEmpleado}`);
  }

  getBienCodigo(codigoSIGA) {
    return this.http.get(`http://localhost:9000/api/bien/${codigoSIGA}`);
  }

  getBienByDescription(descripcionBien) {
    return this.http.get(`http://localhost:9000/api/BienDescripcion/${descripcionBien}`);
  }

  getSolicitud(nroSolicitud) {
    return this.http.get(`http://localhost:9000/api/solicitud/${nroSolicitud}`);
  }

  patchAsignarBienMueble(idBienMueble, dniEmpleado) {
    this.asignarMueble = {
      id_patrimonio: idBienMueble,
      empleado: dniEmpleado
    };

    return this.http.patch(`http://localhost:9000/api/bien/${idBienMueble}`, this.asignarMueble);
  }

  postCrearAsignacion() {
    this.asignacion = {
      id_empleado: '08179975',
      modalidad: 'CAS',
      jefe_aprobacion: 'aprobado',
      patrimonio_aprobacion: 'aprobado',
      id_bien: 112236140032,
      fecha_asignacion: '23/01/2018',
      estado_asignacion: 'aprobado'
    };

    return this.http.post(`http://localhost:9000/api/asignacion`, this.asignacion);
  }
}
