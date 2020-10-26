import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ISolicitud } from 'app/shared/models/solicitud';
import { filter } from 'rxjs/operators';
import { DesplazamientoService } from '../../desplazamiento.service';

@Component({
  selector: 'md-list-saliente-desplazamiento',
  templateUrl: './list-saliente-desplazamiento.component.html',
  styleUrls: ['./list-saliente-desplazamiento.component.scss']
})
export class ListSalienteDesplazamientoComponent implements OnInit {
  showTab = true;
  solicitudes: ISolicitud[] = [];

  constructor(private router: Router, private desplazamientoService: DesplazamientoService) {
    router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event: NavigationEnd) => {
      if (event.url.split('/').pop() === 'create') {
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
    this.desplazamientoService.getSaliente().subscribe(r => {
      this.solicitudes = r;
    });
  }
}
