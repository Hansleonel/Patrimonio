import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EntranteDesplazamientoComponent } from 'app/modules/desplazamiento/componentes/entrante-desplazamiento/entrante-desplazamiento.component';
import { DesplazamientoComponent } from 'app/modules/desplazamiento/componentes/desplazamiento/desplazamiento.component';
import { SalienteDesplazamientoComponent } from 'app/modules/desplazamiento/componentes/saliente-desplazamiento/saliente-desplazamiento.component';
import { ListEntranteDesplazamientoComponent } from 'app/modules/desplazamiento/componentes/list-entrante-desplazamiento/list-entrante-desplazamiento.component';
import { CreateEntranteDesplazamientoComponent } from 'app/modules/desplazamiento/componentes/create-entrante-desplazamiento/create-entrante-desplazamiento.component';
import { CreateSalienteDesplazamientoComponent } from 'app/modules/desplazamiento/componentes/create-saliente-desplazamiento/create-saliente-desplazamiento.component';
import { ListSalienteDesplazamientoComponent } from 'app/modules/desplazamiento/componentes/list-saliente-desplazamiento/list-saliente-desplazamiento.component';

const routes: Routes = [
  {
    path: '',
    component: DesplazamientoComponent,
    children: [
      {
        path: 'entrante',
        component: EntranteDesplazamientoComponent,
        children: [
          {
            path: '',
            component: ListEntranteDesplazamientoComponent,
            data: {
              pageTitle: 'Listasa',
              text: 'Desplazamiento',
              breadcrumbs: true
            },
            children: [
              {
                path: ':idSolicitud/authorize',
                component: CreateEntranteDesplazamientoComponent,
                data: {
                  pageTitle: 'pesem.configuration.title',
                  text: 'Solicitar',
                  breadcrumbs: true
                }
              }
            ]
          }
        ]
      },
      {
        path: 'saliente',
        component: SalienteDesplazamientoComponent,
        children: [
          {
            path: '',
            component: ListSalienteDesplazamientoComponent,
            data: {
              pageTitle: 'Lista',
              text: 'Desplazamiento',
              breadcrumbs: true
            },
            children: [
              {
                path: 'create',
                component: CreateSalienteDesplazamientoComponent,
                data: {
                  pageTitle: 'pesem.configuration.title',
                  text: 'Crear',
                  breadcrumbs: true
                }
              }
            ]
          }
        ]
      },
      {
        path: '_saliente',
        redirectTo: 'saliente/lista',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'desplazamiento/entrante',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesplazamientoRoutingModule {}
