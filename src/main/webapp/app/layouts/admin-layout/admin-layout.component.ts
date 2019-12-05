import { Component, OnInit } from '@angular/core';
import { JhiLanguageHelper } from 'app/core/language/language.helper';
import { ActivatedRouteSnapshot, NavigationEnd, NavigationError, Router } from '@angular/router';
import { MENU } from 'app/shared/constants/menu.constants';

@Component({
  selector: 'md-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {
  body: HTMLBodyElement = document.getElementsByTagName('body')[0];
  itemsMenu: any;

  constructor(private jhiLanguageHelper: JhiLanguageHelper, private router: Router) {}

  private getPageTitle(routeSnapshot: ActivatedRouteSnapshot) {
    let title: string = routeSnapshot.data && routeSnapshot.data['pageTitle'] ? routeSnapshot.data['pageTitle'] : 'minDefApp';
    if (routeSnapshot.firstChild) {
      title = this.getPageTitle(routeSnapshot.firstChild) || title;
    }
    return title;
  }

  ngOnInit() {
    this.itemsMenu = MENU.items;
    this.body.classList.add('sidebar-mini');
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.jhiLanguageHelper.updateTitle(this.getPageTitle(this.router.routerState.snapshot.root));
      }
      if (event instanceof NavigationError && event.error.status === 404) {
        this.router.navigate(['/404']);
      }
    });
  }
}
