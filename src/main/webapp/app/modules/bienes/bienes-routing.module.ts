import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'bienes-muebles',
    loadChildren: () => import('./bienes-muebles/bienes-muebles.module').then(m => m.BienesMueblesModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BienesRoutingModule {}
