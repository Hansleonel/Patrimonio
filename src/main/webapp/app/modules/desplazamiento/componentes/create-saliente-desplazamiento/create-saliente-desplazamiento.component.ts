import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DesplazamientoService } from 'app/modules/desplazamiento/desplazamiento.service';
import { Router } from '@angular/router';
import { AsignacionService } from 'app/modules/asignacion/asignacion.service';

@Component({
  selector: 'md-create-saliente-desplazamiento',
  templateUrl: './create-saliente-desplazamiento.component.html',
  styleUrls: ['./create-saliente-desplazamiento.component.scss']
})
export class CreateSalienteDesplazamientoComponent implements OnInit {
  form: FormGroup;
  tiposDesplazamiento: Array<any> = [];
  bienes: Array<any> = [];
  persons: Array<any> = [];
  spinner = false;
  spinnerPerson = false;

  constructor(
    private fb: FormBuilder,
    private desplazamientoService: DesplazamientoService,
    private empleadoService: AsignacionService,
    private router: Router
  ) {
    const now = new Date().toISOString().split('T')[0];
    this.form = this.fb.group({
      tipoDesplazamiento: ['', Validators.required],
      codigoUsuario: ['', Validators.required],
      codigoBien: ['', Validators.required],
      fechaInicioDesplazamiento: [now, Validators.required],
      fechaFinDesplazamiento: [now, Validators.required],
      detalle: ['', Validators.required],
      idProceso: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.getTipoDesplazamiento();
    this.getBienes();

    this.form.get('codigoUsuario').valueChanges.subscribe(r => {
      if (r) this.getUser();
    });
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

  getUser() {
    this.spinnerPerson = true;
    this.empleadoService.getEmpleado(this.form.get('codigoUsuario').value).subscribe(
      (r: any[]) => {
        console.log('getting pserson', r);
        if (r && r.length > 0) {
          const worker: any = r[0];
          this.form.get('codigoUsuario').setValue(`${worker.nombre1} ${worker.ape_mat} - ${worker.doc_iden}`, { emitEvent: false });
        }
        this.spinnerPerson = false;
      },
      () => (this.spinnerPerson = false)
    );
  }

  onUser(event) {
    // this.form.get('usuarioAutorizante').setValue(event.value);
  }
}
