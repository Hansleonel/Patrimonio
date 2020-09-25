import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListSolicitudComponent } from 'app/modules/solicitud/components/list-solicitud/list-solicitud.component';
import { CreateSolicitudComponent } from 'app/modules/solicitud/components/create-solicitud/create-solicitud.component';

const routes: Routes = [
  {
    path: 'list',
    component: ListSolicitudComponent,
    data: {
      pageTitle: 'Lista de Solicitudes',
      text: 'list',
      breadcrumbs: true
    }
  },
  {
    path: 'create',
    component: CreateSolicitudComponent,
    data: {
      pageTitle: 'pesem.configuration.title',
      text: 'Crear',
      breadcrumbs: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolicitudRoutingModule {}
