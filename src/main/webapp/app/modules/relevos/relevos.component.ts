import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'md-relevos',
  template: `
    <md-title
      tituloGeneral="Bandeja de desplazamiento"
      tituloDescripcion="Bienes que  requieren ser desplazados interna o externamente"
    ></md-title>
    <ul class="nav nav-tabs" id="myTab" role="tablist" *ngIf="showTab">
      <li class="nav-item">
        <a
          class="nav-link active"
          [ngClass]="{ active: entrySelected }"
          id="entrante-tab"
          data-toggle="tab"
          role="tab"
          aria-controls="dato"
          aria-selected="entrySelected"
          routerLink="mis-bienes"
          >Mis Bienes</a
        >
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          [ngClass]="{ active: entrySelected }"
          id="entrante-tab"
          data-toggle="tab"
          role="tab"
          aria-controls="dato"
          aria-selected="entrySelected"
          routerLink="entrantes"
          >Entrantes</a
        >
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          [ngClass]="{ active: !entrySelected }"
          id="saliente-tab"
          data-toggle="tab"
          href="#saliente"
          role="tab"
          aria-controls="ubicacion"
          aria-selected="false"
          routerLink="salientes"
          >Salientes</a
        >
      </li>
    </ul>
    <div class="tab-content" id="myTabContent">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: []
})
export class RelevosComponent implements OnInit {
  showTab = true;
  entrySelected = true;
  constructor() {}

  ngOnInit() {}
}
