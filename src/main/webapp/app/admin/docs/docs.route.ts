import { Route } from '@angular/router';

import { MdDocsComponent } from './docs.component';

export const docsRoute: Route = {
  path: '',
  component: MdDocsComponent,
  data: {
    pageTitle: 'global.menu.admin.apidocs'
  }
};
