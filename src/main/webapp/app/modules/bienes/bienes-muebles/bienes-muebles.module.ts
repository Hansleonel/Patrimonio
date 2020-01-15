import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListBienesMueblesComponent } from './components/list-bienes-muebles/list-bienes-muebles.component';
import { FormBienesMueblesComponent } from './components/form-bienes-muebles/form-bienes-muebles.component';
import { BienesMueblesRoutingModule } from 'app/modules/bienes/bienes-muebles/bienes-muebles-routing.module';
import { MindefAppSharedModule } from 'app/shared/shared.module';
import { CommandColumnService, EditService, GridModule, PageService } from '@syncfusion/ej2-angular-grids';
import { EditBienesMueblesComponent } from 'app/modules/bienes/bienes-muebles/components/edit-bienes-muebles/edit-bienes-muebles.component';
import { RadioButtonModule } from '@syncfusion/ej2-angular-buttons';

@NgModule({
  declarations: [ListBienesMueblesComponent, FormBienesMueblesComponent, EditBienesMueblesComponent],
  imports: [GridModule, CommonModule, BienesMueblesRoutingModule, MindefAppSharedModule, RadioButtonModule],
  providers: [EditService, PageService, CommandColumnService]
})
export class BienesMueblesModule {}
