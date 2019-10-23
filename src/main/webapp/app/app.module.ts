import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { MindefAppSharedModule } from 'app/shared/shared.module';
import { MindefAppCoreModule } from 'app/core/core.module';
import { MindefAppAppRoutingModule } from './app-routing.module';
import { MindefAppHomeModule } from './home/home.module';
import { MindefAppEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MdMainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    MindefAppSharedModule,
    MindefAppCoreModule,
    MindefAppHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    MindefAppEntityModule,
    MindefAppAppRoutingModule
  ],
  declarations: [MdMainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MdMainComponent]
})
export class MindefAppAppModule {}
