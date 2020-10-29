import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
// import { ISolicitud } from 'app/shared/models/solicitud';
import { filter } from 'rxjs/operators';
// import { DesplazamientoService } from 'app/modules/desplazamiento/desplazamiento.service';
import { DesplazamientoService } from '../../desplazamiento.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'md-list-saliente-desplazamiento',
  templateUrl: './list-saliente-desplazamiento.component.html',
  styleUrls: ['./list-saliente-desplazamiento.component.scss']
})
export class ListSalienteDesplazamientoComponent implements OnInit {
  showTab = true;
  solicitudes: Observable<any[]>;
  isListCalled = false;
  // public solicitudes: Observable<Array<any>>;

  // constructor(private desplazamientoService: DesplazamientoService, private router: Router) {

  constructor(private router: Router, private desplazamientoService: DesplazamientoService) {
    router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event: NavigationEnd) => {
      console.log('MAKE ACTIONS', event);
      if (event.url.split('/').pop() === 'create') {
        this.showTab = false;
      } else {
        this.showTab = true;
        if (this.isListCalled) {
          // this.onGetSolicitudes();
        }
      }
    });
  }

  ngOnInit() {
    // this.onGetSolicitudes();
    this.loadData();
  }

  /*  onGetSolicitudes() {
    this.isListCalled = true;
    this.solicitudes = this.desplazamientoService.getSolicitudes({ tipo: 2 });

  }*/

  loadData() {
    this.solicitudes = this.desplazamientoService.getSaliente();
  }
}
