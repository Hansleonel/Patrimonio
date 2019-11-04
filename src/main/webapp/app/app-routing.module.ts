import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { errorRoute } from './layouts/error/error.route';
import { DEBUG_INFO_ENABLED } from 'app/app.constants';

import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { PublicRoutes } from 'app/app.routes';
import { AdminLayoutComponent } from 'app/layouts/admin-layout/admin-layout.component';
import { MdLoginComponent } from 'app/shared/login/login.component';
import { LoginIntranetComponent } from 'app/shared/login/login-intranet.component';

const LAYOUT_ROUTES = [...errorRoute];

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        {
          path: '',
          component: AdminLayoutComponent,
          loadChildren: () => import('./home/home.module').then(m => m.MindefAppHomeModule),
          canActivate: [UserRouteAccessService],
          data: {
            authorities: ['ROLE_USER', 'ROLE_ADMIN']
          }
        },
        {
          path: PublicRoutes.login,
          component: MdLoginComponent
        },
        {
          path: PublicRoutes.loginIntranet,
          component: LoginIntranetComponent
        },
        ...LAYOUT_ROUTES
      ],
      { enableTracing: DEBUG_INFO_ENABLED }
    )
  ],
  exports: [RouterModule]
})
export class MindefAppAppRoutingModule {}
