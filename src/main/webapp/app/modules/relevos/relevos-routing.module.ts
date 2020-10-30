import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RelevosComponent } from 'app/modules/relevos/relevos.component';
import { RelevosContainerComponent } from 'app/modules/relevos/components/relevos-container/relevos-container.component';
import { ListEntranteComponent } from 'app/modules/relevos/components/list-entrante/list-entrante.component';
import { ListSalienteComponent } from 'app/modules/relevos/components/list-saliente/list-saliente.component';
import { ListMisBienesComponent } from 'app/modules/relevos/components/list-mis-bienes/list-mis-bienes.component';
import { FormMisBienesComponent } from 'app/modules/relevos/components/form-mis-bienes/form-mis-bienes.component';
import { FormSalienteComponent } from 'app/modules/relevos/components/form-saliente/form-saliente.component';

const routes: Routes = [
  {
    path: '',
    component: RelevosComponent,
    children: [
      {
        path: '',
        component: RelevosContainerComponent
      },
      {
        path: 'mis-bienes',
        component: ListMisBienesComponent,
        children: [
          {
            path: 'autorizar',
            component: FormMisBienesComponent
          }
        ]
      },
      {
        path: 'salientes',
        component: ListSalienteComponent,
        children: [
          {
            path: 'solicitar',
            component: FormSalienteComponent
          }
        ]
      },
      {
        path: 'entrantes',
        component: ListEntranteComponent
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RelevosRoutingModule {}

// 25

// 22 transferencia salientes

// como entrantes al usuario tucco autorize

// quien esta a cargo de este bien

// 3 transferencia
//
