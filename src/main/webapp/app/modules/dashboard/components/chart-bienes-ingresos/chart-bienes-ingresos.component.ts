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
      { country: 'USA', gold: 50, silver: 70, bronze: 45 },
      { country: 'China', gold: 40, silver: 60, bronze: 55 },
      { country: 'Japan', gold: 70, silver: 60, bronze: 50 },
      { country: 'Australia', gold: 60, silver: 56, bronze: 40 },
      { country: 'France', gold: 50, silver: 45, bronze: 35 },
      { country: 'Germany', gold: 40, silver: 30, bronze: 22 },
      { country: 'Italy', gold: 40, silver: 35, bronze: 37 },
      { country: 'Sweden', gold: 30, silver: 25, bronze: 27 }
    ];
    this.primaryXAxis = {
      valueType: 'Category',
      title: 'Countries'
    };
    this.primaryYAxis = {
      minimum: 0,
      maximum: 80,
      interval: 20,
      title: 'Medals',
      labelFormat: '${value}K'
    };

    this.palette = ['#007bff', '#28a745', '#dc3545', '#fd7e14', 'ffc107'];
    this.title = 'Cuadro de Ingreso de Bienes Muebles';
    // TODO </BAR CHART>
  }
}
