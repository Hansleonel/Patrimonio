import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesplazamientoRoutingModule } from './desplazamiento-routing.module';

import { FormDesplazamientoComponent } from './componentes/form-desplazamiento/form-desplazamiento.component';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { EntranteDesplazamientoComponent } from './componentes/entrante-desplazamiento/entrante-desplazamiento.component';
import { DesplazamientoComponent } from './componentes/desplazamiento/desplazamiento.component';
import { SalienteDesplazamientoComponent } from './componentes/saliente-desplazamiento/saliente-desplazamiento.component';
import { ListEntranteDesplazamientoComponent } from './componentes/list-entrante-desplazamiento/list-entrante-desplazamiento.component';
import { CreateEntranteDesplazamientoComponent } from './componentes/create-entrante-desplazamiento/create-entrante-desplazamiento.component';
import { CreateSalienteDesplazamientoComponent } from './componentes/create-saliente-desplazamiento/create-saliente-desplazamiento.component';
import { ListSalienteDesplazamientoComponent } from './componentes/list-saliente-desplazamiento/list-saliente-desplazamiento.component';
import { MindefAppSharedModule } from 'app/shared/shared.module';

@NgModule({
  declarations: [
    FormDesplazamientoComponent,
    EntranteDesplazamientoComponent,
    DesplazamientoComponent,
    SalienteDesplazamientoComponent,
    ListEntranteDesplazamientoComponent,
    CreateEntranteDesplazamientoComponent,
    CreateSalienteDesplazamientoComponent,
    ListSalienteDesplazamientoComponent
  ],
  imports: [CommonModule, DesplazamientoRoutingModule, GridModule, MindefAppSharedModule]
})
export class DesplazamientoModule {}
