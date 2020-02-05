import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'md-card-solicitud',
  templateUrl: './card-solicitud.component.html',
  styleUrls: ['./card-solicitud.component.scss']
})
export class CardSolicitudComponent implements OnInit {
  // TODO Numero de documento recibido desde el componente padre es decir DashboardComponent
  @Input() documentoPersonaHijo: string;
  @Input() datosPersonaHijo: Object[];

  constructor() {}

  ngOnInit() {}
}
