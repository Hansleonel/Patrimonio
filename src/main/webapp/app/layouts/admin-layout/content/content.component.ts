import { Component, OnInit } from '@angular/core';
import { ContentService } from 'app/layouts/admin-layout/content/content.service';

@Component({
  selector: 'md-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  title: string;

  constructor(private contentService: ContentService) {}

  ngOnInit() {
    this.contentService.getTitle().subscribe(value => {
      this.title = value;
    });
  }
}
