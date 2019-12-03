import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'md-chart-empleado',
  templateUrl: './chart-empleado.component.html',
  styleUrls: ['./chart-empleado.component.scss']
})
export class ChartEmpleadoComponent implements OnInit {
  public data: Object[] = [
    { x: 'JPN', text: 'Japan', y: 5156 },
    { x: 'DEU', text: 'Germany', y: 3754 },
    { x: 'FRA', text: 'France', y: 2809 },
    { x: 'GBR', text: 'UK', y: 2721 },
    { x: 'BRA', text: 'Brazil', y: 2472 },
    { x: 'RUS', text: 'Russia', y: 2231 }
  ];
  public palette: string[];
  public legendSettings: Object;

  constructor() {}

  ngOnInit() {
    this.palette = ['#007bff', '#28a745', '#dc3545', '#fd7e14', 'ffc107'];
  }
}
