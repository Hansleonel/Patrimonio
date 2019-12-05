import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { JhiLanguageHelper } from 'app/core/language/language.helper';

@Component({
  selector: 'md-main',
  templateUrl: './main.component.html'
})
export class MdMainComponent {
  constructor(private jhiLanguageHelper: JhiLanguageHelper, private router: Router) {}
}
