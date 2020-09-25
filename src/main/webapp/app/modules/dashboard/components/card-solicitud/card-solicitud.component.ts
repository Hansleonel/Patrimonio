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
  @Input() datosSolicitudHijo: Object[];

  // TODO VALOR INICIAL

  // TODO VALORES OBTENIDOS POR LOS INPUTS
  dniPersona = 'SELECCIONE UN ELEMENTO DE LA LISTA DE SOLICITUDES';
  codigoUsuarioSolicitud = 'CODIGO DEL SOLICITANTE';
  datosUsuarioSolicitud = 'NOMBRES Y APELLIDOS DEL SOLICITANTE';
  cargoUsuarioSolicitud = 'CARGO DEL SOLICITANTE';
  oficinaUsuarioSolicitud = 'OFICINA DEL SOLICITANTE';
  listaSolicitud = 'LISTA DE SOLICITUDES';

  constructor() {}

  ngOnInit() {}
}
