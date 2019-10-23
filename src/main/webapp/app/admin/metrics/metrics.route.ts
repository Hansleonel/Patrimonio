import { Route } from '@angular/router';

import { MdMetricsMonitoringComponent } from './metrics.component';

export const metricsRoute: Route = {
  path: '',
  component: MdMetricsMonitoringComponent,
  data: {
    pageTitle: 'metrics.title'
  }
};
