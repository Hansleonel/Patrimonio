import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListBienesMueblesComponent } from 'app/modules/bienes/bienes-muebles/components/list-bienes-muebles/list-bienes-muebles.component';
import { EditBienesMueblesComponent } from 'app/modules/bienes/bienes-muebles/components/edit-bienes-muebles/edit-bienes-muebles.component';

const routes: Routes = [
  {
    path: '',
    component: ListBienesMueblesComponent,
    data: {
      pageTitle: 'Lista de Bienes Muebles',
      text: 'list',
      breadcrumbs: true
    }
  },
  {
    path: 'edit',
    component: EditBienesMueblesComponent,
    data: {
      pageTitle: 'Lista de Bienes Muebles',
      text: 'list',
      breadcrumbs: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BienesMueblesRoutingModule {}
