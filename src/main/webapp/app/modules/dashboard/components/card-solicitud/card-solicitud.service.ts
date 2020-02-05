import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardSolicitudService {
  constructor(private http: HttpClient) {}

  getEmpleado(dniEmpleado) {
    return this.http.get(`http://10.24.9.39/restMD56/user/listaPersonal?dni=${dniEmpleado}`);
  }
}
