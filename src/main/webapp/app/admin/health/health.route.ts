import { Route } from '@angular/router';

import { MdHealthCheckComponent } from './health.component';

export const healthRoute: Route = {
  path: '',
  component: MdHealthCheckComponent,
  data: {
    pageTitle: 'health.title'
  }
};
