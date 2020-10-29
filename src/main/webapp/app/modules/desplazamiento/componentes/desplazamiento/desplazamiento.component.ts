import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'md-desplazamiento',
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
          [routerLink]="['entrante']"
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
          [routerLink]="['saliente']"
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
export class DesplazamientoComponent implements OnInit {
  showTab = true;
  entrySelected = true;

  constructor(private router: Router) {
    router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event: NavigationEnd) => {
      this.entrySelected = event.url.includes('entrante');
      // const arrurl: string[] = event.url.split('/');
      console.log('arryaURL', event.url);
      this.showTab = !(event.url.includes('authorize') || event.url.includes('create'));
      // this.showTab = event.url.includes('create');
    });
  }

  ngOnInit() {}
}
