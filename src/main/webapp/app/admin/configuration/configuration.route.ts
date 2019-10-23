import { Route } from '@angular/router';

import { MdConfigurationComponent } from './configuration.component';

export const configurationRoute: Route = {
  path: '',
  component: MdConfigurationComponent,
  data: {
    pageTitle: 'configuration.title'
  }
};
