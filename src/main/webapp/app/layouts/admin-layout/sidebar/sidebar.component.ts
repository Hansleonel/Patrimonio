import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'md-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  valoresRutas: object;

  constructor() {}

  ngOnInit() {
    this.valoresRutas = [
      {
        link: '',
        icon: 'database',
        text: 'bienes',
        children: [
          {
            link: '/bienes-muebles',
            icon: 'database',
            text: 'bienes muebles'
            // children: []
          },
          {
            link: '/asignaciones-muebles',
            icon: 'database',
            text: 'asiganciones muebles'
            // children: []
          }
        ]
      }
    ];
  }
}
