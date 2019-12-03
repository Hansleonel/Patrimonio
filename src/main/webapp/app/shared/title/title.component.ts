import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'md-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {
  @Input() tituloGeneral: string;
  @Input() tituloDescripcion: string;

  constructor() {}

  ngOnInit() {}
}
