import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SERVER_API_URL } from 'app/app.constants';
import { Observable } from 'rxjs';
import { IBien } from 'app/shared/models/bien';

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
    return this.http.get(`${SERVER_API_URL}api/solicitud?size100`);
  }

  getBienesByEmpleado(empleado): Observable<IBien[]> {
    return this.http.get<IBien[]>(`${SERVER_API_URL}api/bienes/by-empleado/${empleado}`);
  }

  patchSolicitudPR(idSolicitud) {
    return this.http.patch(`${SERVER_API_URL}api/solicitudRevisar/${idSolicitud}`, {});
  }
}
