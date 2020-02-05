import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  constructor(private http: HttpClient) {}

  getEmpleado(dniEmpleado) {
    return this.http.get(`http://10.24.9.39/restMD56/user/listaPersonal?dni=${dniEmpleado}`);
  }

  getEmpleados() {
    return this.http.get(`http://10.24.9.78/mindef-starter-0.0.1-SNAPSHOT/api/empleadoMindef?page=1&size=2000`);
  }

  getSolicitudes() {
    return this.http.get(`http://localhost:9000/api/solicitud?size100`);
  }

  patchSolicitudPR(idSolicitud) {
    return this.http.patch(`http://localhost:9000/api/solicitudRevisar/${idSolicitud}`, {});
  }
}
