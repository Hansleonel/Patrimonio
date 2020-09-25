import { Component, OnInit, ViewChild } from '@angular/core';
import { AsignacionService } from 'app/modules/asignacion/asignacion.service';
import { GridComponent, DataResult, RowSelectEventArgs } from '@syncfusion/ej2-angular-grids';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'md-create-asignacion',
  templateUrl: './create-asignacion.component.html',
  styleUrls: ['./create-asignacion.component.scss']
})
export class CreateAsignacionComponent implements OnInit {
  public dataBienes: object[];
  public dataR: DataResult;
  public selectOptions;
  public editSettings;
  public toolbar;

  // TODO DATA BIENES BUSQUEDA
  public dataBienesBusqueda: object[];

  @ViewChild('grid', { static: false }) public gridObj: GridComponent;
  @ViewChild('gridBusqueda', { static: false }) public gridBusquedaObj: GridComponent;

  // TODO VALIDADORES
  validarInputEmpleado = 'form-control';
  validarInputBien = 'form-control';
  messageValidadorInvalid = 'Se necesitan por lo menos 8 digitos';
  bienRepetidoLista = 0;
  messageAlert = '';
  classMessage = 'alert alert-primary';
  mostrarAlert = false;

  // TODO CAMPOS EMPLEADO
  oficina = '';
  cargoEmpleado = '';
  nombres = '';
  apePat = '';
  apeMat = '';
  docIden = '';
  usuCod = '';

  // TODO CAMPOS BIEN
  codigoPatrimonialEdit;
  codigoInternoEdit;
  descripcionEdit;
  secuenciaEdit;
  caracteristicaEdit;
  marcaEdit;
  modeloEdit;
  nroSerieEdit;
  medidasEdit;
  nombreColorEdit;
  codigoColorEdit;
  estadoAsignadoEdit;
  empleadoAsignadoEdit;

  apellidosNombres = '';

  // TODO DATOS SOLICITUD
  nroSolicitud = '';
  descripcionPeticion = '';

  constructor(private activatedRoute: ActivatedRoute, private empleadoService: AsignacionService, private router: Router) {
    this.dataBienes = [];
    this.activatedRoute.params.subscribe(params => {
      console.log(params['idSolicitud']);
      this.nroSolicitud = params['idSolicitud'];
    });

    this.empleadoService.getSolicitud(this.nroSolicitud).subscribe((response: any) => {
      console.log('el dni del empleado ' + response['dociden']);
      this.descripcionPeticion = response['observacion'];
      this.empleadoService.getEmpleadoWithDni(response['dociden']).subscribe((responseEmple: any) => {
        console.log(responseEmple);
        console.log('el codigo del empleado es ' + responseEmple[0]['usucod']);
        this.comprobarValorCodEmpleado(responseEmple[0]['usucod']);
        this.RellenarDatosEmpleado(responseEmple[0]['usucod']);
      });
    });
  }

  ngOnInit() {
    this.selectOptions = { checkboxMode: 'ResetOnRowClick' };
    this.editSettings = { allowDeleting: true };
    this.toolbar = ['Search', 'Delete'];
    // this.comprobarValorCodEmpleado("CODIGO");
    this.comprobarValorCodSiga('CODIGO');
  }

  comprobarValorCodEmpleado(codigoEmpleado) {
    codigoEmpleado = codigoEmpleado.toUpperCase();
    console.log('el valor del codigo del Empleado para comprobar' + codigoEmpleado);
    this.empleadoService.getEmpleado(codigoEmpleado).subscribe(
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

  comprobarValorCodSiga(codigoSIGA) {
    console.log('el valor del codigo patrimonial' + codigoSIGA);
    if (codigoSIGA.length > 11) {
      this.empleadoService.getBienCodigo(codigoSIGA).subscribe(
        (response: any) => {
          console.log(response);
          this.validarInputBien = 'form-control is-valid';
          this.codigoPatrimonialEdit = response['id_patrimonio'];
          this.codigoInternoEdit = response['id_interno'];
          this.secuenciaEdit = response['secuencia'];
          this.descripcionEdit = response['descripcion'];
          this.marcaEdit = response['codigo_marca'];
          this.codigoColorEdit = response['codigo_color'];
          this.nombreColorEdit = response['nombre_color'];
          this.caracteristicaEdit = response['caracteristica'];
          this.modeloEdit = response['modelo'];
          this.medidasEdit = response['medidas'];
          this.nroSerieEdit = response['nroserie'];
          this.estadoAsignadoEdit = response['estado_asignado'];
          this.empleadoAsignadoEdit = response['empleado'];

          console.log('CODIGO PATRIMONIAL' + this.codigoPatrimonialEdit);
          console.log('nro de serie ' + this.nroSerieEdit);
        },
        error1 => {
          this.validarInputBien = 'form-control is-invalid';
          console.log('respuesta del servicio con err: ', error1);
          console.log(error1['statusText']);
          if (error1['statusText'] === 'Not Found') {
            this.validarInputBien = 'form-control is-invalid';
            this.messageValidadorInvalid = 'No se encontro un bien mueble con este codigo';
          }
        }
      );
    } else {
      this.validarInputBien = 'form-control is-invalid';
      this.messageValidadorInvalid = 'Se necesitan por lo menos 11 digitos para iniciar una busqueda';
    }
  }

  RellenarDatosEmpleado(codigoEmpleado) {
    codigoEmpleado = codigoEmpleado.toUpperCase();
    console.log('el valor del codigo del Empleado para Rellenar' + codigoEmpleado);
    this.empleadoService.getEmpleado(codigoEmpleado).subscribe(
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

  volverToBandeja() {
    this.router.navigate(['']);
  }

  buscarBienToAsignacion(bienDescripcion) {
    bienDescripcion = bienDescripcion.toUpperCase();
    if (bienDescripcion.length > 3) {
      this.empleadoService.getBienByDescription(bienDescripcion).subscribe((response: any) => {
        console.log(response);
        this.dataBienesBusqueda = response;
        this.gridBusquedaObj.refresh();
      });
    }
  }

  rowSelectedGridBusqueda(args: RowSelectEventArgs) {
    const selectedrowindex: number[] = this.gridBusquedaObj.getSelectedRowIndexes();
    // alert(selectedrowindex);
    console.log(selectedrowindex);
    const selectedrecords: Object[] = this.gridBusquedaObj.getSelectedRecords();
    console.log(selectedrecords);
    this.codigoPatrimonialEdit = selectedrecords[0]['id_patrimonio'];
    this.codigoInternoEdit = selectedrecords[0]['id_interno'];
    this.secuenciaEdit = selectedrecords[0]['secuencia'];
    /* this.tipoBienEdit = selectedrecords[0]['tipo_bien'];
    this.grupoBienEdit = selectedrecords[0]['grupo_bien'];
    this.claseBienEdit = selectedrecords[0]['clase_bien'];
    this.familiaBienEdit = selectedrecords[0]['familia_bien'];
    this.itemBienEdit = selectedrecords[0]['item_bien'];*/
    this.descripcionEdit = selectedrecords[0]['descripcion'];
    this.empleadoAsignadoEdit = selectedrecords[0]['empleado'];
    /* this.sedeEdit = selectedrecords[0]['sede'];
    this.empleadoEdit = selectedrecords[0]['empleado'];
    this.pliegoEdit = selectedrecords[0]['pliego'];
    this.centrocostoEdit = selectedrecords[0]['centro_costo'];
    this.origenactivoEdit = selectedrecords[0]['origen_activo'];
    this.tipoubicacionEdit = selectedrecords[0]['tipo_ubicacion'];
    this.codigoUbicacionEdit = selectedrecords[0]['codigo_ubicacion'];*/
    this.marcaEdit = selectedrecords[0]['codigo_marca'];
    this.codigoColorEdit = selectedrecords[0]['codigo_color'];
    this.nombreColorEdit = selectedrecords[0]['nombre_color'];
    this.caracteristicaEdit = selectedrecords[0]['caracteristica'];
    this.modeloEdit = selectedrecords[0]['modelo'];
    this.medidasEdit = selectedrecords[0]['medidas'];
    this.nroSerieEdit = selectedrecords[0]['nroserie'];
    this.estadoAsignadoEdit = selectedrecords[0]['estado_asignado'];
    /* his.valorInicialEdit = selectedrecords[0]['valor_inicial'];
    this.valorDepEdit = selectedrecords[0]['valor_deprec'];
    this.clasificadorEdit = selectedrecords[0]['clasificador'];
    this.anoEEdit = selectedrecords[0]['ano_e'];
    this.subctaEdit = selectedrecords[0]['sub_cta'];
    this.mayorEdit = selectedrecords[0]['mayor'];
    // console.log('30 asignado ' + asignado);
    this.reparacionEdit = selectedrecords[0]['estado_reparacion'];
    this.slidaEdit = selectedrecords[0]['salida'];
    this.estadoEdit = selectedrecords[0]['estado_activo'];
    this.conservacionEdit = selectedrecords[0]['estado_consercacion'];*/

    // this.comprobarValorCodSiga(this.codigoPatrimonialEdit);
  }

  agregarBienLista(codigoSIga) {
    // TODO RECUPERANDO EL BIEN
    console.log(codigoSIga.length);
    if (codigoSIga.length > 11) {
      for (const numero of this.dataBienes) {
        if (this.codigoPatrimonialEdit === numero['id_patrimonio']) {
          console.log('se repite el elemento agregado');
          this.bienRepetidoLista = this.bienRepetidoLista + 1;
          console.log(this.bienRepetidoLista);
          this.messageAlert = 'NO PUEDES AGREGAR ELEMENTOS REPETIDOS A LISTA';
          this.classMessage = 'alert alert-danger';
          this.mostrarAlert = true;
          setTimeout(() => {
            this.mostrarAlert = false;
            // this.frase = 'guardar';
          }, 2600);
        }
      }

      if (this.bienRepetidoLista === 0) {
        this.dataBienes.push({
          id_patrimonio: this.codigoPatrimonialEdit,
          id_interno: this.codigoInternoEdit,
          descripcion: this.descripcionEdit,
          estado_asignado: this.estadoAsignadoEdit,
          empleado: this.empleadoAsignadoEdit,
          caracteristica: this.caracteristicaEdit
        });
        // TODO message para mostrar el tipo de alerta
        this.messageAlert = 'SE AGREGO CORRECTAMENTE A LA LISTA';
        this.classMessage = 'alert alert-primary';
        this.mostrarAlert = true;
        setTimeout(() => {
          this.mostrarAlert = false;
          // this.frase = 'guardar';
        }, 2600);
      } else if (this.bienRepetidoLista > 0) {
        this.bienRepetidoLista = 0;
      }
    }

    console.log(this.dataBienes);

    this.dataR = {
      result: this.dataBienes,
      count: this.dataBienes.length
    } as DataResult;

    this.gridObj.refresh();
  }

  grabarAsignacion(codigoBienSIGA, dniEmpleado) {
    console.log('Guardando la asignacion');
    if (dniEmpleado.length > 0) {
      for (const biencontados of this.dataBienes) {
        // TODO SI BIEN ESTE SERVICIO TIENE UN NOMBRE "EMPLEADOSERVICE" EL SERVICIO ES PARA LAS ASIGNACIONES
        // TODO NORMALMENTE DEVERIA DE LLAMARSE "ASGINACIONSERVICE"
        this.empleadoService.patchAsignarBienMueble(biencontados['id_patrimonio'], dniEmpleado).subscribe(
          response => {
            console.log(response);

            // TODO CREAR REGISTRO EN EL TABLE ASIGNATION
            this.crearAsignacion();

            this.messageAlert = 'SE ASIGNO CORRECTAMENTE LA LISTA DE BIENES AL EMPLEADO SELECCIONADO';
            this.classMessage = 'alert alert-success';
            this.mostrarAlert = true;
            setTimeout(() => {
              this.mostrarAlert = false;
              // this.frase = 'guardar';
            }, 2600);
          },
          error1 => {
            console.log(error1);
            this.messageAlert = 'NO SE PUDO ASIGNAR CORRECTAMENTE LA LISTA DE BIENES';
            this.classMessage = 'alert alert-danger';
            this.mostrarAlert = true;
            setTimeout(() => {
              this.mostrarAlert = false;
              // this.frase = 'guardar';
            }, 3600);
          }
        );
      }
    }

    console.log(this.dataBienes);
  }

  crearAsignacion() {
    this.empleadoService.postCrearAsignacion().subscribe(
      response => {
        console.log(response);
      },
      error1 => {
        console.log(error1);
      }
    );
  }

  generarPDF() {
    // this.crearAsignacion();
  }

  search() {
    console.log('BUSCANDO');
  }
}
