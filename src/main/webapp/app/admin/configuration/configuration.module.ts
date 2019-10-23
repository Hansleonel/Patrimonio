import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MindefAppSharedModule } from 'app/shared/shared.module';

import { MdConfigurationComponent } from './configuration.component';

import { configurationRoute } from './configuration.route';

@NgModule({
  imports: [MindefAppSharedModule, RouterModule.forChild([configurationRoute])],
  declarations: [MdConfigurationComponent]
})
export class ConfigurationModule {}
