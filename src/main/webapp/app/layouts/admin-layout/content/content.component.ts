import { Component, OnInit } from '@angular/core';
import { ContentService } from 'app/layouts/admin-layout/content/content.service';
import { JhiLanguageHelper } from 'app/core/language/language.helper';

@Component({
  selector: 'md-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  title: string;

  constructor(private contentService: ContentService, private jhiLanguageHelper: JhiLanguageHelper) {}

  ngOnInit() {
    this.contentService.getTitle().subscribe(value => {
      this.title = value;
    });
    this.jhiLanguageHelper.updateTitle();
  }
}
