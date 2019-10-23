import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MindefAppSharedModule } from 'app/shared/shared.module';

import { MdMetricsMonitoringComponent } from './metrics.component';

import { metricsRoute } from './metrics.route';

@NgModule({
  imports: [MindefAppSharedModule, RouterModule.forChild([metricsRoute])],
  declarations: [MdMetricsMonitoringComponent]
})
export class MetricsModule {}
