import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateSolicitudComponent } from './components/create-solicitud/create-solicitud.component';
import { ListSolicitudComponent } from './components/list-solicitud/list-solicitud.component';
import { MindefAppSharedModule } from 'app/shared/shared.module';
import { SolicitudRoutingModule } from 'app/modules/solicitud/solicitud-routing.module';
import { AutoCompleteModule } from '@syncfusion/ej2-angular-dropdowns';

@NgModule({
  declarations: [CreateSolicitudComponent, ListSolicitudComponent],
  imports: [CommonModule, SolicitudRoutingModule, MindefAppSharedModule, AutoCompleteModule]
})
export class SolicitudModule {}
