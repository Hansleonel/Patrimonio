import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ISolicitud } from 'app/shared/models/solicitud';
import { SERVER_API_URL } from 'app/app.constants';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RelevosService {
  salientesSub = new Subject();

  constructor(private http: HttpClient) {}

  getSaliente(): Observable<ISolicitud[]> {
    return this.http.get<ISolicitud[]>(`${SERVER_API_URL}api/solicitud-desplazamiento/salientes`);
  }

  onGetSalientes() {
    return this.salientesSub.asObservable();
  }

  onnSetSalientes(data: any[]) {
    this.salientesSub.next(data);
  }
}
