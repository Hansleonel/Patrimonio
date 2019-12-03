import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'md-bien-enlace',
  templateUrl: './bien-enlace.component.html',
  styleUrls: ['./bien-enlace.component.scss']
})
export class BienEnlaceComponent implements OnInit {
  @Input() tituloHijo: string;
  @Input() classesHijo: string;
  @Input() iconClassHijo: string;
  @Input() descripcionHijo: string;
  @Input() cantidadHijo: string;

  @Output() cardSeleccionado: EventEmitter<string>;

  constructor() {
    this.cardSeleccionado = new EventEmitter();
  }

  ngOnInit() {}

  verBienesMuebles() {
    this.cardSeleccionado.emit(this.tituloHijo);
  }
}
