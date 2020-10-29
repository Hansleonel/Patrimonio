import { Component, OnInit } from '@angular/core';
// import { ISolicitud } from 'app/shared/models/solicitud';
import { DesplazamientoService } from '../../desplazamiento.service';
import { filter } from 'rxjs/operators';
import { NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'md-list-entrante-desplazamiento',
  templateUrl: './list-entrante-desplazamiento.component.html',
  styleUrls: ['./list-entrante-desplazamiento.component.scss']
})
export class ListEntranteDesplazamientoComponent implements OnInit {
  showTab = true;
  solicitudes: Observable<any[]>;
  constructor(private desplazamientoService: DesplazamientoService, private router: Router) {
    router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event: NavigationEnd) => {
      console.log('MAKE ACTIONS', event);
      if (event.url.split('/').pop() === 'authorize') {
        this.showTab = false;
      } else {
        this.showTab = true;
      }
    });
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.solicitudes = this.desplazamientoService.getEntrantes();
  }
}
