import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DesplazamientoService } from 'app/modules/desplazamiento/desplazamiento.service';
import { AccountService } from 'app/core/auth/account.service';
import { IBien } from 'app/shared/models/bien';
import { Account } from 'app/core/user/account.model';
import { AsignacionService } from 'app/modules/asignacion/asignacion.service';
import { DashboardService } from 'app/modules/dashboard/dashboard.service';
import { SelectionSettingsModel } from '@syncfusion/ej2-angular-grids';
import { RelevosService } from 'app/modules/relevos/services/relevos.service';

@Component({
  selector: 'md-form-saliente',
  templateUrl: './form-saliente.component.html',
  styles: []
})
export class FormSalienteComponent implements OnInit {
  form: FormGroup;
  tiposDesplazamiento: Array<any> = [];

  persons: Array<any> = [];
  spinner = false;
  spinnerPerson = false;
  editSettings = { allowDeleting: true };
  selectOptions = { checkboxMode: 'ResetOnRowClick' };
  toolbar = ['Search'];

  bienes: IBien[] = [];
  account: Account;

  public selectionOptions: SelectionSettingsModel;

  empleadoClass = 'form-control';

  public fields: Object = { text: 'id_patrimonio', value: 'id_patrimonio' };

  constructor(
    private fb: FormBuilder,
    private desplazamientoService: DesplazamientoService,
    private empleadoService: AsignacionService,
    private dashboardService: DashboardService,
    private router: Router,
    private accountService: AccountService,
    private relevoService: RelevosService
  ) {
    const now = new Date().toISOString().split('T')[0];
    this.form = this.fb.group({
      transferente: ['', Validators.required],
      nombreReceptor: ['', Validators.required],
      codigoAutorizador: ['WTUCO'],
      dociden: [''],
      autorizador: ['', Validators.required],
      codigosBien: ['', Validators.required],
      detalles: ['', Validators.required],
      fechaInicioDesplazamiento: [now, Validators.required],

      // fechaFinDesplazamiento: [now, Validators.required],

      observacion: ['', Validators.required],
      proceso: [{ id_proceso: 3, nombre_Proceso: 'relevos' }],
      estado: [1]
    });
  }

  ngOnInit() {
    this.getTipoDesplazamiento();
    this.account = this.accountService.getUserIdentity();
    console.log(this.account);
    this.form.controls['dociden'].patchValue(this.account.dociden);
    this.form.controls['transferente'].patchValue(this.account.login);
    // this.form.get('codigoUsuario').valueChanges.subscribe(r => {
    //   if (r) this.getUser();
    // });
    this.loadBienes(this.account.dociden);

    this.form.get('autorizador').valueChanges.subscribe(r => {
      console.log('change value', r);
    });
  }

  changeCheck(rowSelected) {
    console.log('selecting', rowSelected);
    const arrData = [];
    const data: Array<any> = rowSelected.selectedRowIndexes.map(i => {
      arrData.push(this.bienes[i]['id_patrimonio']);
      return {
        bien: {
          id_patrimonio: this.bienes[i]['id_patrimonio']
        }
      };
    });
    if (data.length > 0) {
      this.form.get('detalles').setValue(data);
      this.form.get('codigosBien').setValue(arrData);
    } else {
      this.form.get('detalles').setValue(null);
      this.form.get('codigosBien').setValue(null);
    }
    console.log(data);
  }

  onSave() {
    const _data = { ...this.form.value };
    _data['detalles'] = [];

    this.form.value.codigosBien.forEach(b => {
      _data['detalles'].push({
        bien: {
          id_patrimonio: b
        }
      });
    });

    this.spinner = true;

    if (this.form.valid) {
      this.desplazamientoService.save(this.form.value).subscribe(
        () => {
          this.goBack();
          this.spinner = false;
        },
        () => (this.spinner = false)
      );
    }
  }

  loadBienes(empleado) {
    this.dashboardService.getBienesByEmpleado(empleado).subscribe(r => {
      this.bienes = r.filter(b => b.estado_asignado === 'Asignado');
    });
  }

  buscarEmpleado(codigoEmpleado) {
    codigoEmpleado = codigoEmpleado.toUpperCase();
    this.empleadoService.getEmpleado(codigoEmpleado).subscribe(
      (response: []) => {
        if (response.length > 0) {
          this.empleadoClass = 'form-control is-valid';
          const data: any = response.shift();
          this.form.controls['autorizador'].patchValue(data.doc_iden);
          this.form.controls['nombreReceptor'].patchValue(`${data.ape_pat} ${data.ape_mat} ${data.nombre1} `);
          /* console.log('searchin', data)
          if (data.doc_iden) {
            this.getBienesEmpleado(data.doc_iden);
          } */
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

  /*  getBienesEmpleado(docIden) {
      this.desplazamientoService.getBienesByEmpleado(docIden).subscribe(r => {
        this.bienes = r.filter(b => b.estado_asignado === 'Asignado');
      });
    } */

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

  onUser() {
    // this.form.get('usuarioAutorizante').setValue(event.value);
  }

  goBack() {
    this.relevoService
      .getSaliente()
      .toPromise()
      .then(r => {
        this.relevoService.onnSetSalientes(r);
      });
    this.router.navigate(['relevos/salientes']).then(() => {});
  }
}
