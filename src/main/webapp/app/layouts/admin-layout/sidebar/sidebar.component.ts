import { Component, Input, OnInit } from '@angular/core';
import { IMenuItem } from 'app/shared/models/menu';

@Component({
  selector: 'md-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() items: IMenuItem[];

  constructor() {}

  ngOnInit() {}
}
