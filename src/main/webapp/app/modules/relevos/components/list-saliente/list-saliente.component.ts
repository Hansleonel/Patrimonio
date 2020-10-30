import { Component, OnInit } from '@angular/core';
import { RelevosService } from 'app/modules/relevos/services/relevos.service';

@Component({
  selector: 'md-list-saliente',
  templateUrl: './list-saliente.component.html',
  styles: []
})
export class ListSalienteComponent implements OnInit {
  solicitudes: any[] = [];

  constructor(private relevosSaliente: RelevosService) {}

  ngOnInit() {
    this.relevosSaliente.onGetSalientes().subscribe((r: any) => {
      this.solicitudes = r;
      console.log('in parent update');
    });

    this.relevosSaliente
      .getSaliente()
      .toPromise()
      .then(r => {
        this.relevosSaliente.onnSetSalientes(r);
      });
  }
}
