import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelevosRoutingModule } from './relevos-routing.module';
import { RelevosComponent } from './relevos.component';
import { RelevosContainerComponent } from './components/relevos-container/relevos-container.component';
import { ListEntranteComponent } from './components/list-entrante/list-entrante.component';
import { ListSalienteComponent } from './components/list-saliente/list-saliente.component';
import { ListMisBienesComponent } from './components/list-mis-bienes/list-mis-bienes.component';
import { MindefAppSharedModule } from 'app/shared/shared.module';
import { FormMisBienesComponent } from './components/form-mis-bienes/form-mis-bienes.component';
import { FormSalienteComponent } from './components/form-saliente/form-saliente.component';

@NgModule({
  declarations: [
    RelevosComponent,
    RelevosContainerComponent,
    ListEntranteComponent,
    ListSalienteComponent,
    ListMisBienesComponent,
    FormMisBienesComponent,
    FormSalienteComponent
  ],
  imports: [CommonModule, RelevosRoutingModule, MindefAppSharedModule]
})
export class RelevosModule {}
