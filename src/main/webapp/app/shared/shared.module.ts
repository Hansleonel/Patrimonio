import { NgModule } from '@angular/core';
import { MindefAppSharedLibsModule } from './shared-libs.module';
import { FindLanguageFromKeyPipe } from './language/find-language-from-key.pipe';
import { MdAlertComponent } from './alert/alert.component';
import { MdAlertErrorComponent } from './alert/alert-error.component';
import { MdLoginComponent } from './login/login.component';
import { HasAnyAuthorityDirective } from './auth/has-any-authority.directive';
import { LoadingComponent } from './loading/loading.component';
import { TitleComponent } from './title/title.component';
import { SearchComponent } from './search/search.component';
import { AutoCompleteModule } from '@syncfusion/ej2-angular-dropdowns';

@NgModule({
  imports: [MindefAppSharedLibsModule, AutoCompleteModule],
  declarations: [
    FindLanguageFromKeyPipe,
    MdAlertComponent,
    MdAlertErrorComponent,
    MdLoginComponent,
    HasAnyAuthorityDirective,
    LoadingComponent,
    TitleComponent,
    SearchComponent
  ],
  entryComponents: [MdLoginComponent, LoadingComponent],
  exports: [
    MindefAppSharedLibsModule,
    FindLanguageFromKeyPipe,
    MdAlertComponent,
    MdAlertErrorComponent,
    MdLoginComponent,
    HasAnyAuthorityDirective,
    LoadingComponent,
    TitleComponent,
    SearchComponent
  ]
})
export class MindefAppSharedModule {}
