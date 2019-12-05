import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  constructor(private http: HttpClient) {}

  getEmpleados() {
    return this.http.get(`http://10.24.9.78/mindef-starter-0.0.1-SNAPSHOT/api/empleadoMindef?page=1&size=2000`);
  }
}
