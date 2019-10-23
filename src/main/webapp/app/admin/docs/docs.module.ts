import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MindefAppSharedModule } from 'app/shared/shared.module';

import { MdDocsComponent } from './docs.component';

import { docsRoute } from './docs.route';

@NgModule({
  imports: [MindefAppSharedModule, RouterModule.forChild([docsRoute])],
  declarations: [MdDocsComponent]
})
export class DocsModule {}
