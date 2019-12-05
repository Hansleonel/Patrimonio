import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfigurationComponent } from 'app/pesem/pages/configuration/configuration.component';

const routes: Routes = [
  {
    path: '',
    component: ConfigurationComponent,
    data: {
      text: 'Configuración del PESEM',
      breadcrumbs: true,
      pageTitle: 'pesem.configuration.title'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigurationRoutingModule {}
