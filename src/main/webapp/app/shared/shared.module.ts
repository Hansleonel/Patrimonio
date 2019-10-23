import { NgModule } from '@angular/core';
import { MindefAppSharedLibsModule } from './shared-libs.module';
import { FindLanguageFromKeyPipe } from './language/find-language-from-key.pipe';
import { MdAlertComponent } from './alert/alert.component';
import { MdAlertErrorComponent } from './alert/alert-error.component';
import { MdLoginModalComponent } from './login/login.component';
import { HasAnyAuthorityDirective } from './auth/has-any-authority.directive';

@NgModule({
  imports: [MindefAppSharedLibsModule],
  declarations: [FindLanguageFromKeyPipe, MdAlertComponent, MdAlertErrorComponent, MdLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [MdLoginModalComponent],
  exports: [
    MindefAppSharedLibsModule,
    FindLanguageFromKeyPipe,
    MdAlertComponent,
    MdAlertErrorComponent,
    MdLoginModalComponent,
    HasAnyAuthorityDirective
  ]
})
export class MindefAppSharedModule {}
