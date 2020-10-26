import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DesplazamientoService } from 'app/modules/desplazamiento/desplazamiento.service';
import { Router } from '@angular/router';
import { AsignacionService } from 'app/modules/asignacion/asignacion.service';
import { IBien } from 'app/shared/models/bien';
import { AccountService } from 'app/core/auth/account.service';
import { Account } from 'app/core/user/account.model';

@Component({
  selector: 'md-create-saliente-desplazamiento',
  templateUrl: './create-saliente-desplazamiento.component.html',
  styleUrls: ['./create-saliente-desplazamiento.component.scss']
})
export class CreateSalienteDesplazamientoComponent implements OnInit {
  form: FormGroup;
  tiposDesplazamiento: Array<any> = [];

  persons: Array<any> = [];
  spinner = false;
  spinnerPerson = false;

  bienes: IBien[] = [];
  account: Account;

  empleadoClass = 'form-control';

  constructor(
    private fb: FormBuilder,
    private desplazamientoService: DesplazamientoService,
    private empleadoService: AsignacionService,
    private router: Router,
    private accountService: AccountService
  ) {
    const now = new Date().toISOString().split('T')[0];
    this.form = this.fb.group({
      tipo: ['', Validators.required],
      dociden: ['', Validators.required],
      autorizador: ['', Validators.required],
      codigoAutorizador: [''],
      codigoBien: ['', Validators.required],
      fecha_solicitud: [now, Validators.required],
      fechaFinalizado: [now, Validators.required],
      observacion: ['', Validators.required],
      proceso: [{ id_proceso: 2, nombre_Proceso: 'desplazamiento' }],
      estado: [1]
    });
  }

  ngOnInit() {
    this.getTipoDesplazamiento();
    this.account = this.accountService.getUserIdentity();
    this.form.controls['dociden'].patchValue(this.account.dociden);
    // this.form.get('codigoUsuario').valueChanges.subscribe(r => {
    //   if (r) this.getUser();
    // });
  }

  onSave() {
    const _data = { ...this.form.value };
    _data['detalles'] = [];
    _data['detalles'].push({
      bien: {
        id_patrimonio: this.form.controls['codigoBien'].value
      }
    });

    this.spinner = true;

    if (this.form.valid) {
      this.desplazamientoService.save(_data).subscribe(
        () => {
          this.router.navigate(['desplazamiento/saliente']).then();
          this.spinner = false;
        },
        () => (this.spinner = false)
      );
    }
  }

  buscarEmpleado(codigoEmpleado) {
    codigoEmpleado = codigoEmpleado.toUpperCase();
    this.empleadoService.getEmpleado(codigoEmpleado).subscribe(
      (response: []) => {
        if (response.length > 0) {
          this.empleadoClass = 'form-control is-valid';
          this.form.controls['autorizador'].patchValue(response[0]['doc_iden']);

          if (response[0]['doc_iden']) {
            this.getBienesEmpleado(response[0]['doc_iden']);
          }
        } else if (response.length === 0) {
          this.empleadoClass = 'form-control is-invalid';
        }
      },
      error1 => {
        this.empleadoClass = 'form-control is-invalid';
        if (error1['statusText'] === 'Not Found') {
          this.empleadoClass = 'form-control is-invalid';
        }
      }
    );
  }

  getBienesEmpleado(docIden) {
    this.desplazamientoService.getBienesByEmpleado(docIden).subscribe(r => {
      this.bienes = r.filter(b => b.estado_asignado === 'Asignado');
    });
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
