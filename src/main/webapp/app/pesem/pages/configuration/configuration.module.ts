import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigurationComponent } from './configuration.component';
import { PesemFormComponent } from './components/pesem-form/pesem-form.component';
import { PesemListComponent } from './components/pesem-list/pesem-list.component';
import { ConfigurationRoutingModule } from 'app/pesem/pages/configuration/configuration-routing.module';

@NgModule({
  declarations: [ConfigurationComponent, PesemFormComponent, PesemListComponent],
  imports: [CommonModule, ConfigurationRoutingModule]
})
export class ConfigurationModule {}
