import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DASHBOARD_ROUTE } from 'app/modules/dashboard/dashboard.route';

@NgModule({
  imports: [RouterModule.forChild([DASHBOARD_ROUTE])],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
