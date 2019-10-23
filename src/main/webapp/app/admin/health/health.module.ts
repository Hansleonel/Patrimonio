import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MindefAppSharedModule } from 'app/shared/shared.module';

import { MdHealthCheckComponent } from './health.component';
import { MdHealthModalComponent } from './health-modal.component';

import { healthRoute } from './health.route';

@NgModule({
  imports: [MindefAppSharedModule, RouterModule.forChild([healthRoute])],
  declarations: [MdHealthCheckComponent, MdHealthModalComponent],
  entryComponents: [MdHealthModalComponent]
})
export class HealthModule {}
