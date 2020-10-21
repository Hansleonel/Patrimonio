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
          loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule),
          canActivate: [UserRouteAccessService],
          data: {
            authorities: ['ROLE_USER', 'ROLE_ADMIN']
          }
        },
        {
          path: '',
          component: AdminLayoutComponent,
          loadChildren: () => import('./modules/bienes/bienes.module').then(m => m.BienesModule),
          canActivate: [UserRouteAccessService],
          data: {
            authorities: ['ROLE_USER', 'ROLE_ADMIN']
          }
        },
        {
          path: 'asignaciones',
          component: AdminLayoutComponent,
          loadChildren: () => import('./modules/asignacion/asignacion.module').then(m => m.AsignacionModule),
          canActivate: [UserRouteAccessService],
          data: {
            authorities: ['ROLE_USER', 'ROLE_ADMIN']
          }
        },
        {
          path: 'solicitudes',
          component: AdminLayoutComponent,
          loadChildren: () => import('./modules/solicitud/solicitud.module').then(m => m.SolicitudModule),
          canActivate: [UserRouteAccessService],
          data: {
            authorities: ['ROLE_USER', 'ROLE_ADMIN']
          }
        },
        {
          path: 'desplazamiento',
          component: AdminLayoutComponent,
          loadChildren: () => import('./modules/desplazamiento/desplazamiento.module').then(m => m.DesplazamientoModule),
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
