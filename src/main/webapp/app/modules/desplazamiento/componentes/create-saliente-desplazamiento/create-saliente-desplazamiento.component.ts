import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DesplazamientoService } from 'app/modules/desplazamiento/desplazamiento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'md-create-saliente-desplazamiento',
  templateUrl: './create-saliente-desplazamiento.component.html',
  styleUrls: ['./create-saliente-desplazamiento.component.scss']
})
export class CreateSalienteDesplazamientoComponent implements OnInit {
  form: FormGroup;
  tiposDesplazamiento: Array<any> = [];
  bienes: Array<any> = [];
  spinner = false;

  constructor(private fb: FormBuilder, private desplazamientoService: DesplazamientoService, private router: Router) {
    const now = new Date().toISOString().split('T')[0];
    this.form = this.fb.group({
      tipoDesplazamiento: ['', Validators.required],
      usuarioAutorizante: ['', Validators.required],
      codigoBien: ['', Validators.required],
      fechaInicioDesplazamiento: [now, Validators.required],
      fechaFinDesplazamiento: [now, Validators.required],
      detalle: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.getTipoDesplazamiento();
    this.getBienes();
  }

  onSave() {
    this.spinner = true;
    if (this.form.valid) {
      this.desplazamientoService.save(this.form.value).subscribe(
        () => {
          this.router.navigate(['desplazamiento/saliente']).then();
          this.spinner = false;
        },
        () => (this.spinner = false)
      );
    }
  }

  getTipoDesplazamiento() {
    this.desplazamientoService.getTipoDesplazamiento().subscribe(r => {
      this.tiposDesplazamiento = r;
    });
  }

  getBienes() {
    this.desplazamientoService.getBienes().subscribe(r => {
      this.bienes = r;
    });
  }
}
