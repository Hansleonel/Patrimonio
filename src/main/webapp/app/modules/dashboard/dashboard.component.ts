import { Component, OnInit } from '@angular/core';
import { Enlace } from 'app/modules/dashboard/models/enlace';
import { Router } from '@angular/router';

@Component({
  selector: 'md-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  enlaces: Enlace[];

  constructor(private router: Router) {}

  ngOnInit() {
    this.enlaces = [
      {
        titulo: 'Registrados',
        descripcion: 'Bienes',
        cantidad: 40000,
        classes: 'info-box-icon bg-blue',
        iconClasses: 'fa fa-check-circle'
      },
      {
        titulo: 'Asignados',
        descripcion: 'Bienes',
        cantidad: 3500,
        classes: 'info-box-icon bg-red',
        iconClasses: 'fa fa-apple'
      },
      {
        titulo: 'Desplazados',
        descripcion: 'Bienes',
        cantidad: 300,
        classes: 'info-box-icon bg-green',
        iconClasses: 'fa fa-upload'
      },
      {
        titulo: 'Internados',
        descripcion: 'Bienes',
        cantidad: 100,
        classes: 'info-box-icon bg-dark',
        iconClasses: 'fa fa-address-book'
      }
    ];
  }

  verBienEnlace(titulo: string) {
    if (titulo.startsWith('Registrados')) {
      this.router.navigate(['/bienes-muebles']);
    } else {
      console.log('enlace');
    }
  }
}
