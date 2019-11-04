import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { MindefAppSharedModule } from 'app/shared/shared.module';
import { MindefAppCoreModule } from 'app/core/core.module';
import { MindefAppAppRoutingModule } from './app-routing.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MdMainComponent } from './layouts/main/main.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';
import { SidebarComponent } from 'app/layouts/admin-layout/sidebar/sidebar.component';
import { MmcBreadcrumbsConfig, MmcBreadcrumbsModule } from 'mmc-breadcrumbs';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginIntranetComponent } from './shared/login/login-intranet.component';
import { ContentComponent } from './layouts/admin-layout/content/content.component';
import { NavbarComponent } from 'app/layouts/admin-layout/navbar/navbar.component';
import { ActiveMenuDirective } from 'app/layouts/admin-layout/navbar/active-menu.directive';
import { FooterComponent } from 'app/layouts/admin-layout/footer/footer.component';
import { AuthExpiredInterceptor } from 'app/blocks/interceptor/auth-expired.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorHandlerInterceptor } from 'app/blocks/interceptor/errorhandler.interceptor';
import { NotificationInterceptor } from 'app/blocks/interceptor/notification.interceptor';
import { NgbDatepickerConfig } from '@ng-bootstrap/ng-bootstrap';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core/language/language.helper';
import * as moment from 'moment';

@NgModule({
  imports: [
    BrowserModule,
    MindefAppSharedModule,
    MindefAppCoreModule,
    MmcBreadcrumbsModule.forRoot(),
    // jhipster-needle-angular-add-module JHipster will add new module here
    MindefAppAppRoutingModule
  ],
  declarations: [
    MdMainComponent,
    NavbarComponent,
    ErrorComponent,
    PageRibbonComponent,
    ActiveMenuDirective,
    FooterComponent,
    SidebarComponent,
    AdminLayoutComponent,
    LoginIntranetComponent,
    ContentComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthExpiredInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlerInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NotificationInterceptor,
      multi: true
    }
  ],
  bootstrap: [MdMainComponent]
})
export class MindefAppAppModule {
  constructor(
    private dpConfig: NgbDatepickerConfig,
    breadcrumbsConfig: MmcBreadcrumbsConfig,
    private languageService: JhiLanguageService,
    private languageHelper: JhiLanguageHelper
  ) {
    this.dpConfig.minDate = { year: moment().year() - 100, month: 1, day: 1 };
    breadcrumbsConfig.postProcess = x => {
      let y = x;
      if (x.length && x[0].text !== 'Home') {
        y = [
          {
            text: 'Home',
            path: ''
          }
        ].concat(x);
      }
      return y;
    };
  }
}
