import { Component, OnInit } from '@angular/core';
import { ISolicitud } from 'app/shared/models/solicitud';
import { DesplazamientoService } from '../../desplazamiento.service';

@Component({
  selector: 'md-list-entrante-desplazamiento',
  templateUrl: './list-entrante-desplazamiento.component.html',
  styleUrls: ['./list-entrante-desplazamiento.component.scss']
})
export class ListEntranteDesplazamientoComponent implements OnInit {
  solicitudes: ISolicitud[] = [];
  constructor(private desplazamientoService: DesplazamientoService) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.desplazamientoService.getEntrantes().subscribe(r => {
      this.solicitudes = r;
    });
  }
}
