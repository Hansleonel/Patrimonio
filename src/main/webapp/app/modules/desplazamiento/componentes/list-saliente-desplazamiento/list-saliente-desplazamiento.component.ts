import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'md-list-saliente-desplazamiento',
  templateUrl: './list-saliente-desplazamiento.component.html',
  styleUrls: ['./list-saliente-desplazamiento.component.scss']
})
export class ListSalienteDesplazamientoComponent implements OnInit {
  showTab = true;

  constructor(private router: Router) {
    router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event: NavigationEnd) => {
      if (event.url.split('/').pop() === 'create') {
        this.showTab = false;
      } else {
        this.showTab = true;
      }
    });
  }

  ngOnInit() {}
}
