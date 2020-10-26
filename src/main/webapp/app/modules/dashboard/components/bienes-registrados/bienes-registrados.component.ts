import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { DashboardService } from 'app/modules/dashboard/dashboard.service';
import { GridComponent, RowSelectEventArgs } from '@syncfusion/ej2-angular-grids';
import { Router } from '@angular/router';
import { AccountService } from 'app/core/auth/account.service';
import { IBien } from 'app/shared/models/bien';

@Component({
  selector: 'md-bienes-registrados',
  templateUrl: './bienes-registrados.component.html',
  styleUrls: ['./bienes-registrados.component.scss']
})
export class BienesRegistradosComponent implements OnInit {
  // TODO DATOS DE CUENTA TO KNOW THE ROLE

  currentAccount: any;

  public dataGrid: Object[];
  public dataGridEmpleado: Object[];
  // TODO DATA SOLICITUDES
  public dataGridSolicitudes: Object[];
  public dataGridSelected: Object[];
  public nroSolicitud;

  public initialPage;
  public selectOptions;
  public editSettings;
  public toolbar;

  bienes: IBien[] = [];

  // TODO emitir un evento del componente hijo bienes-registrados.component al componente padre dashboard.component
  @Output() datosSeleccionados: EventEmitter<Object[]>;

  @ViewChild('grid', { static: false })
  public grid: GridComponent;

  constructor(private empleadoService: DashboardService, private router: Router, private accountService: AccountService) {
    this.datosSeleccionados = new EventEmitter<Object[]>();
  }

  ngOnInit() {
    this.buscarEmpleado();
    this.accountService.identity().subscribe(account => {
      this.currentAccount = account;
      console.log('LA CUENTA DEL USER Y EL ROL ES');
      console.log(this.currentAccount);
      this.loadBienes(this.currentAccount.dociden);
    });

    this.dataGrid = [
      {
        CodInterno: 1000,
        CodPatrimonial: 2000,
        Denominacion: 'Denomiancion del Patrimonio',
        Marca: 'Marca del Patrimonio',
        Modelo: 'Modelo del Patrimonio',
        Serie: 'Serie del Patrimonio',
        Color: 'Color del Patrimonio',
        Estado: 'Estado del Patrimonio'
      }
    ];
    // this.selectOptions = { persistSelection: true };
    this.editSettings = { allowDeleting: true };
    this.selectOptions = { checkboxMode: 'ResetOnRowClick' };
    this.toolbar = ['Search'];
    // this.initialPage = { pageSizes: true, pageCount: 4 };
  }

  loadBienes(empleado) {
    this.empleadoService.getBienesByEmpleado(empleado).subscribe(r => {
      this.bienes = r.filter(b => b.estado_asignado === 'Asignado');
    });
  }

  buscarEmpleado() {
    this.empleadoService.getEmpleados().subscribe((response: any) => {
      this.dataGridEmpleado = response;
    });
    this.empleadoService.getSolicitudes().subscribe((response: any) => {
      this.dataGridSolicitudes = response;
    });
  }

  irListSolicitud() {
    console.log('ir a solicitud');
    this.router.navigate(['/asignaciones/list']);
  }

  irCrearAsignacion() {
    console.log('ir a crear solicitud');
    this.dataGridSelected = this.grid.getSelectedRecords();
    this.nroSolicitud = this.dataGridSelected[0]['id_solicitud'];
    console.log(this.nroSolicitud);
    if (this.dataGridSelected[0]['id_solicitud'] !== undefined) {
      this.empleadoService.patchSolicitudPR(this.nroSolicitud).subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/asignaciones/create/' + this.nroSolicitud]);
        },
        error1 => {
          console.log(error1);
        }
      );
    }
  }

  irCrearSolicitud() {
    console.log('ir crear solicitud');
    this.router.navigate(['solicitudes/create']);
  }

  rowSelected(args: RowSelectEventArgs) {
    const selectedrowindex: number[] = this.grid.getSelectedRowIndexes();
    // alert(selectedrowindex);
    console.log(selectedrowindex);
    const selectedrecords: Object[] = this.grid.getSelectedRecords();
    // console.log(selectedrecords);
    console.log(selectedrecords[0]['dociden']);
    // TODO ENVIA DATOS DEL EMPLEADO QUE HIZO LA SOLICITUD
    this.datosSeleccionados.emit(selectedrecords);
  }
}
