import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListAsignacionComponent } from './components/list-asignacion/list-asignacion.component';
import { CreateAsignacionComponent } from './components/create-asignacion/create-asignacion.component';

const routes: Routes = [
  {
    path: 'list',
    component: ListAsignacionComponent,
    data: {
      pageTitle: 'Lista de Asignaciones',
      text: 'list',
      breadcrumbs: true
    }
  },
  {
    path: 'create/:idSolicitud',
    component: CreateAsignacionComponent,
    data: {
      pageTitle: 'Crear Asignacion',
      text: 'Crear',
      breadcrumbs: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsignacionRoutingModule {}
