import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsignacionRoutingModule } from './asignacion-routing.module';
import { ListAsignacionComponent } from './components/list-asignacion/list-asignacion.component';
import { CreateAsignacionComponent } from './components/create-asignacion/create-asignacion.component';
import { MindefAppSharedModule } from 'app/shared/shared.module';
import { CommandColumnService, EditService, PageService, ToolbarService } from '@syncfusion/ej2-angular-grids';

@NgModule({
  declarations: [ListAsignacionComponent, CreateAsignacionComponent],
  imports: [CommonModule, AsignacionRoutingModule, MindefAppSharedModule],
  providers: [ToolbarService, EditService, PageService, CommandColumnService]
})
export class AsignacionModule {}
