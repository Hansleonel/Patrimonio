import { Component, OnInit } from '@angular/core';
import { SolicitudService } from 'app/modules/solicitud/solicitud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'md-create-solicitud',
  templateUrl: './create-solicitud.component.html',
  styleUrls: ['./create-solicitud.component.scss']
})
export class CreateSolicitudComponent implements OnInit {
  // TODO VALIDADORES
  validarInputEmpleado = 'form-control';
  messageAlertSolicitud = 'Solicitud Enviada y Registrada';
  classMessageSolicitud = 'alert alert-primary';
  mostrarAlertSolicitud = false;

  // TODO CAMPOS EMPLEADO
  oficina = '';
  cargoEmpleado = '';
  nombres = '';
  apePat = '';
  apeMat = '';
  docIden = '';
  usuCod = '';

  apellidosNombres = '';

  // TODO CAMPOS SOLICITUD
  estadoSolicitud = '';
  observacion = '';
  idProceso: number;

  objetoSolicitud = {};

  // TODO DISABLD ELEMENTS

  valorDis = false;

  /* // defined the array of data
  sportsData: Object[] = [
    {Id: 'Game1', Game: 'American Football'},
    {Id: 'Game2', Game: 'Badminton'},
    {Id: 'Game3', Game: 'Basketball'},
    {Id: 'Game4', Game: 'Cricket'},
    {Id: 'Game5', Game: 'Football'},
    {Id: 'Game6', Game: 'Golf'},
    {Id: 'Game7', Game: 'Hockey'},
    {Id: 'Game8', Game: 'Rugby'},
    {Id: 'Game9', Game: 'Snooker'},
    {Id: 'Game10', Game: 'Tennis'}
  ];

  // maps the appropriate column to fields property
  public fields: Object = {value: 'Game'};

  // set the placeholder to AutoComplete input
  waterMark = 'Buscar bien solicitado'; */

  constructor(private solicitudService: SolicitudService, private router: Router) {}

  ngOnInit() {
    this.RellenarDatosEmpleado('JPINEDA');
    this.comprobarValorCodEmpleado('JPINEDA');
  }

  RellenarDatosEmpleado(codigoEmpleado) {
    codigoEmpleado = codigoEmpleado.toUpperCase();
    console.log('el valor del codigo del Empleado para Rellenar' + codigoEmpleado);
    this.solicitudService.getEmpleado(codigoEmpleado).subscribe(
      (response: Object[]) => {
        console.log(response);
        if (response.length > 0) {
          console.log(response);

          this.usuCod = response[0]['usu_cod'];
          this.docIden = response[0]['doc_iden'];
          this.apePat = response[0]['ape_pat'];
          this.oficina = response[0]['oficina'];
          this.nombres = response[0]['nombre1'] + ' ' + response[0]['nombre2'];
          this.apeMat = response[0]['ape_mat'];
          this.cargoEmpleado = response[0]['cargo'];
          this.apellidosNombres = this.nombres + ' ' + this.apePat + ' ' + this.apeMat;

          console.log(response[0]['doc_iden']);
          console.log(response[0]['usu_cod']);
        } else if (response.length === 0) {
          // this.validarInputEmpleado = 'form-control is-invalid';
        }
      },
      error1 => {
        this.validarInputEmpleado = 'form-control is-invalid';
        console.log('respuesta del servicio con err: ', error1);
        console.log(error1['statusText']);
        if (error1['statusText'] === 'Not Found') {
          this.validarInputEmpleado = 'form-control is-invalid';
        }
      }
    );
  }

  comprobarValorCodEmpleado(codigoEmpleado) {
    codigoEmpleado = codigoEmpleado.toUpperCase();
    console.log('el valor del codigo del Empleado para comprobar' + codigoEmpleado);
    this.solicitudService.getEmpleado(codigoEmpleado).subscribe(
      (response: []) => {
        console.log(response);
        if (response.length > 0) {
          this.validarInputEmpleado = 'form-control is-valid';
        } else if (response.length === 0) {
          this.validarInputEmpleado = 'form-control is-invalid';
        }
      },
      error1 => {
        this.validarInputEmpleado = 'form-control is-invalid';
        console.log('respuesta del servicio con err: ', error1);
        console.log(error1['statusText']);
        if (error1['statusText'] === 'Not Found') {
          this.validarInputEmpleado = 'form-control is-invalid';
        }
      }
    );
  }

  enviarSolicitud(peticionTextArea) {
    const dateSolicitud: Date = new Date();
    this.estadoSolicitud = 'pendiente';
    this.observacion = peticionTextArea;
    this.idProceso = 1;

    const objetoSolicitudPeticion = {
      observacion: this.observacion,
      estado: 'pendiente',
      fecha_solicitud: dateSolicitud,
      dociden: this.docIden,
      proceso: {
        id_proceso: 1,
        nombre_Proceso: 'asignacion'
      }
    };

    if (peticionTextArea.length > 0) {
      console.log(this.observacion);
      console.log(this.estadoSolicitud);
      console.log(dateSolicitud);
      console.log(this.docIden);
      console.log(1);
      this.solicitudService.postSolicitud(objetoSolicitudPeticion).subscribe(
        response => {
          console.log(response);
          // TODO DISABLD ELEMENTS CUANDO SE ENVIAR CORRECTAMENTE
          this.valorDis = true;
          this.classMessageSolicitud = 'alert alert-success';
          this.messageAlertSolicitud = 'Se Envio la solicitud para su aprobacion, redireccionando a la BANDEJA';
          this.mostrarAlertSolicitud = true;
          setTimeout(() => {
            this.mostrarAlertSolicitud = false;
            // TODO REDERICCIONANDO AL DASHBOARD CUANDO PASEN 3.5 segundos
            this.router.navigate(['']);
            // this.frase = 'guardar';
          }, 3500);
        },
        error1 => {
          console.log(error1);
          this.messageAlertSolicitud = 'Ocurrio un error con el envio de la solicitud';
          this.classMessageSolicitud = 'alert alert-danger';
          this.mostrarAlertSolicitud = true;
          setTimeout(() => {
            this.mostrarAlertSolicitud = false;
            // this.frase = 'guardar';
          }, 2600);
        }
      );
    } else {
      this.messageAlertSolicitud = 'Ocurrio un error con el envio de la solicitud, recuerda llenar el campo de peticion';
      this.classMessageSolicitud = 'alert alert-danger';
      this.mostrarAlertSolicitud = true;
      setTimeout(() => {
        this.mostrarAlertSolicitud = false;
        // this.frase = 'guardar';
      }, 2600);
    }
  }
}
