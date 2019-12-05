import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BienesService {
  constructor(private http: HttpClient) {}

  getBien() {
    return this.http.get(`http://localhost:9000/api/bien?page=1&size=2000`);
  }

  getBienes() {
    return this.http.get(`http://localhost:9000/api/bien`);
  }

  postBien() {
    return this.http.post(`http://localhost:9000/api/testAPI`, { name: 'Jesus' });
  }
}
