import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DesplazamientoService } from 'app/modules/desplazamiento/desplazamiento.service';
import { AccountService } from 'app/core/auth/account.service';

@Component({
  selector: 'md-create-entrante-desplazamiento',
  templateUrl: './create-entrante-desplazamiento.component.html',
  styleUrls: ['./create-entrante-desplazamiento.component.scss']
})
export class CreateEntranteDesplazamientoComponent implements OnInit {
  form: FormGroup;
  formRechazo: FormGroup;
  tiposDesplazamiento: Array<any> = [];
  details: Array<any> = [];
  motivos: Array<any> = [];
  empleadoClass = 'form-control';
  isValid = false;
  idSolicitud: string;

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private desplazamientoService: DesplazamientoService,
    private router: Router,
    private accountService: AccountService
  ) {
    this.form = this.fb.group({
      tipo: [{ value: '', disabled: true }],
      codigoAutorizador: [{ value: '', disabled: true }],
      dociden: [{ value: '', disabled: true }],
      autorizador: [{ value: '', disabled: true }],
      codigoBien: [{ value: '', disabled: true }],
      fechaInicioDesplazamiento: [{ value: '', disabled: true }],
      fechaFinDesplazamiento: [{ value: '', disabled: true }],
      fecha_solicitud: [{ value: '', disabled: true }],
      fechaFinalizado: [{ value: '', disabled: true }],
      observacion: [{ value: '', disabled: true }]
    });
    this.formRechazo = this.fb.group({
      motivo: ['', [Validators.required]],
      descripcionRespuesta: ['', [Validators.required]]
    });
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(r => {
      if (r && r.idSolicitud) {
        this.getSolicitud(r.idSolicitud);
        this.getTipoDesplazamiento();
      }
    });

    const data = this.accountService.getUserIdentity().login;
    console.log('IDENT', data);
  }

  getSolicitud(idSolicitud: string) {
    this.desplazamientoService.getSolicitud(idSolicitud).subscribe(
      (s: any) => {
        this.form.patchValue({
          ...{},
          ...s,
          ...{
            codigoAutorizador: this.accountService.getUserIdentity().login,
            fechaFinalizado: new Date(s.fechaFinalizado).toISOString().split('T')[0],
            fecha_solicitud: new Date(s.fecha_solicitud).toISOString().split('T')[0]
          }
        });
        this.details = s['detalles'];
        this.isValid = true;
        this.idSolicitud = idSolicitud;
        console.log(s);
        this.getMotivos({ proceso: s.proceso.id_proceso });
      },
      () => {
        this.onCancel();
      }
    );
  }

  getTipoDesplazamiento() {
    this.desplazamientoService.getTipoDesplazamiento().subscribe(r => {
      this.tiposDesplazamiento = r;
    });
  }

  getMotivos(params: any) {
    this.desplazamientoService.getMotivos(params).subscribe(r => {
      this.motivos = r;
    });
  }

  onCancel() {
    this.router.navigate(['desplazamiento/entrante']).then();
  }

  onAprobar() {
    if (this.idSolicitud) {
      this.desplazamientoService.AprobarSolicitud(this.idSolicitud).subscribe(() => {
        this.onCancel();
      });
    }
  }

  onRechazar() {
    if (this.formRechazo.valid) {
      const params: any = { ...this.formRechazo.value };
      params['motivo'] = {
        idMotivo: params.motivo
      };
      this.desplazamientoService.rechazarSolicitd(this.idSolicitud, params).subscribe(() => {
        this.onCancel();
      });
    }
  }
}
