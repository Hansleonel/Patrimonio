import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'md-chart-bienes-ingresos',
  templateUrl: './chart-bienes-ingresos.component.html',
  styleUrls: ['./chart-bienes-ingresos.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ChartBienesIngresosComponent implements OnInit {
  // TODO <BAR CHART>
  public palette: string[];
  public legendSettings: Object;
  public primaryXAxis: Object;
  public chartData: Object[];
  public title: string;
  public primaryYAxis: Object;

  // TODO </BAR CHART>

  constructor() {}

  ngOnInit() {
    // TODO <BAR CHART>
    this.chartData = [
      { country: 'Enero', gold: 50, silver: 70, bronze: 45 },
      { country: 'Febrero', gold: 40, silver: 60, bronze: 55 },
      { country: 'Marzo', gold: 70, silver: 60, bronze: 50 },
      { country: 'Abril', gold: 60, silver: 56, bronze: 40 },
      { country: 'Mayo', gold: 50, silver: 45, bronze: 35 },
      { country: 'Junio', gold: 40, silver: 30, bronze: 22 },
      { country: 'Julio', gold: 40, silver: 35, bronze: 37 },
      { country: 'Agosto', gold: 30, silver: 25, bronze: 27 },
      { country: 'Septiembre', gold: 50, silver: 25, bronze: 26 },
      { country: 'Octubre', gold: 60, silver: 48, bronze: 36 },
      { country: 'Noviembre', gold: 70, silver: 26, bronze: 31 },
      { country: 'Diciembre', gold: 80, silver: 25, bronze: 28 }
    ];
    this.primaryXAxis = {
      valueType: 'Category',
      title: 'Meses'
    };
    this.primaryYAxis = {
      minimum: 0,
      maximum: 80,
      interval: 20,
      title: 'Medals',
      labelFormat: '${value}K'
    };

    this.palette = ['#007bff', '#28a745', '#dc3545', '#fd7e14', 'ffc107'];
    this.title = 'Cuadro de Estado de los Bienes Muebles';
    // TODO </BAR CHART>
  }
}
