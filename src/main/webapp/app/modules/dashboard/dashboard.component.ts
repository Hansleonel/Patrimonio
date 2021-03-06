import { Component, OnInit } from '@angular/core';
import { Enlace } from 'app/modules/dashboard/models/enlace';
import { Router } from '@angular/router';
import { DashboardService } from 'app/modules/dashboard/dashboard.service';

@Component({
  selector: 'md-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  enlaces: Enlace[];

  documentoPersonaPadre;
  datosPersonaPadre: Object[];
  datosSolicitudPadre: Object[];

  constructor(private router: Router, private dashboardService: DashboardService) {}

  ngOnInit() {
    this.enlaces = [
      {
        titulo: 'Registrados',
        descripcion: 'Bienes',
        cantidad: 25534,
        classes: 'info-box-icon bg-blue',
        iconClasses: 'fa fa-check-circle'
      },
      {
        titulo: 'Asignados',
        descripcion: 'Bienes',
        cantidad: 15679,
        classes: 'info-box-icon bg-red',
        iconClasses: 'fa fa-apple'
      },
      {
        titulo: 'Desplazados',
        descripcion: 'Bienes',
        cantidad: 9055,
        classes: 'info-box-icon bg-green',
        iconClasses: 'fa fa-upload'
      },
      {
        titulo: 'Internados',
        descripcion: 'Bienes',
        cantidad: 800,
        classes: 'info-box-icon bg-dark',
        iconClasses: 'fa fa-address-book'
      }
    ];
    // TODO Es necesario inicializar el arreglo aunque sea en null puesto que en el componente hijo nos pedira un valor
    // TODO para los campos consultados como [0]['doc_iden']
    this.datosPersonaPadre = [{}];
    this.datosSolicitudPadre = [{}];
  }

  mostrarDni(datosSeleccionados: Object[]) {
    console.log('datos seleccionados');
    console.log(datosSeleccionados);
    this.datosSolicitudPadre = datosSeleccionados;
    this.dashboardService.getEmpleado(datosSeleccionados[0]['dociden']).subscribe((response: any) => {
      this.datosPersonaPadre = response;
    });
    // this.datosPersonaPadre = datosSeleccionados;
    this.documentoPersonaPadre = datosSeleccionados[0]['dociden'];
  }

  verBienEnlace(titulo: string) {
    if (titulo.startsWith('Registrados')) {
      this.router.navigate(['/bienes-muebles']);
    } else {
      console.log('enlace');
    }
  }
}
