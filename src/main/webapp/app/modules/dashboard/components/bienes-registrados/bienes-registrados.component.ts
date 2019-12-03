import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'app/modules/dashboard/dashboard.service';

@Component({
  selector: 'md-bienes-registrados',
  templateUrl: './bienes-registrados.component.html',
  styleUrls: ['./bienes-registrados.component.scss']
})
export class BienesRegistradosComponent implements OnInit {
  public dataGrid: Object[];
  public dataGridEmpleado: Object[];

  public initialPage;
  public selectOptions;
  public editSettings;
  public toolbar;

  constructor(private empleadoService: DashboardService) {}

  ngOnInit() {
    this.buscarEmpleado();
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
      },
      {
        CodInterno: 1001,
        CodPatrimonial: 2001,
        Denominacion: 'Denomiancion del Patrimonio',
        Marca: 'Marca del Patrimonio',
        Modelo: 'Modelo del Patrimonio',
        Serie: 'Serie del Patrimonio',
        Color: 'Color del Patrimonio',
        Estado: 'Estado del Patrimonio'
      },
      {
        CodInterno: 1002,
        CodPatrimonial: 2002,
        Denominacion: 'Denomiancion del Patrimonio',
        Marca: 'Marca del Patrimonio',
        Modelo: 'Modelo del Patrimonio',
        Serie: 'Serie del Patrimonio',
        Color: 'Color del Patrimonio',
        Estado: 'Estado del Patrimonio'
      },
      {
        CodInterno: 1003,
        CodPatrimonial: 2003,
        Denominacion: 'Denomiancion del Patrimonio',
        Marca: 'Marca del Patrimonio',
        Modelo: 'Modelo del Patrimonio',
        Serie: 'Serie del Patrimonio',
        Color: 'Color del Patrimonio',
        Estado: 'Estado del Patrimonio'
      },
      {
        CodInterno: 1004,
        CodPatrimonial: 2004,
        Denominacion: 'Denomiancion del Patrimonio',
        Marca: 'Marca del Patrimonio',
        Modelo: 'Modelo del Patrimonio',
        Serie: 'Serie del Patrimonio',
        Color: 'Color del Patrimonio',
        Estado: 'Estado del Patrimonio'
      },
      {
        CodInterno: 1005,
        CodPatrimonial: 2005,
        Denominacion: 'Denomiancion del Patrimonio',
        Marca: 'Marca del Patrimonio',
        Modelo: 'Modelo del Patrimonio',
        Serie: 'Serie del Patrimonio',
        Color: 'Color del Patrimonio',
        Estado: 'Estado del Patrimonio'
      },
      {
        CodInterno: 1006,
        CodPatrimonial: 2006,
        Denominacion: 'Denomiancion del Patrimonio',
        Marca: 'Marca del Patrimonio',
        Modelo: 'Modelo del Patrimonio',
        Serie: 'Serie del Patrimonio',
        Color: 'Color del Patrimonio',
        Estado: 'Estado del Patrimonio'
      },
      {
        CodInterno: 1007,
        CodPatrimonial: 2007,
        Denominacion: 'Denomiancion del Patrimonio',
        Marca: 'Marca del Patrimonio',
        Modelo: 'Modelo del Patrimonio',
        Serie: 'Serie del Patrimonio',
        Color: 'Color del Patrimonio',
        Estado: 'Estado del Patrimonio'
      },
      {
        CodInterno: 1008,
        CodPatrimonial: 2008,
        Denominacion: 'Denomiancion del Patrimonio',
        Marca: 'Marca del Patrimonio',
        Modelo: 'Modelo del Patrimonio',
        Serie: 'Serie del Patrimonio',
        Color: 'Color del Patrimonio',
        Estado: 'Estado del Patrimonio'
      },
      {
        CodInterno: 1009,
        CodPatrimonial: 2009,
        Denominacion: 'Denomiancion del Patrimonio',
        Marca: 'Marca del Patrimonio',
        Modelo: 'Modelo del Patrimonio',
        Serie: 'Serie del Patrimonio',
        Color: 'Color del Patrimonio',
        Estado: 'Estado del Patrimonio'
      },
      {
        CodInterno: 1010,
        CodPatrimonial: 2010,
        Denominacion: 'Denomiancion del Patrimonio',
        Marca: 'Marca del Patrimonio',
        Modelo: 'Modelo del Patrimonio',
        Serie: 'Serie del Patrimonio',
        Color: 'Color del Patrimonio',
        Estado: 'Estado del Patrimonio'
      },
      {
        CodInterno: 1011,
        CodPatrimonial: 2011,
        Denominacion: 'Denomiancion del Patrimonio',
        Marca: 'Marca del Patrimonio',
        Modelo: 'Modelo del Patrimonio',
        Serie: 'Serie del Patrimonio',
        Color: 'Color del Patrimonio',
        Estado: 'Estado del Patrimonio'
      },
      {
        CodInterno: 1012,
        CodPatrimonial: 2012,
        Denominacion: 'Denomiancion del Patrimonio',
        Marca: 'Marca del Patrimonio',
        Modelo: 'Modelo del Patrimonio',
        Serie: 'Serie del Patrimonio',
        Color: 'Color del Patrimonio',
        Estado: 'Estado del Patrimonio'
      },
      {
        CodInterno: 1013,
        CodPatrimonial: 2013,
        Denominacion: 'Denomiancion del Patrimonio',
        Marca: 'Marca del Patrimonio',
        Modelo: 'Modelo del Patrimonio',
        Serie: 'Serie del Patrimonio',
        Color: 'Color del Patrimonio',
        Estado: 'Estado del Patrimonio'
      },
      {
        CodInterno: 1014,
        CodPatrimonial: 2014,
        Denominacion: 'Denomiancion del Patrimonio',
        Marca: 'Marca del Patrimonio',
        Modelo: 'Modelo del Patrimonio',
        Serie: 'Serie del Patrimonio',
        Color: 'Color del Patrimonio',
        Estado: 'Estado del Patrimonio'
      },
      {
        CodInterno: 1012,
        CodPatrimonial: 2012,
        Denominacion: 'Denomiancion del Patrimonio',
        Marca: 'Marca del Patrimonio',
        Modelo: 'Modelo del Patrimonio',
        Serie: 'Serie del Patrimonio',
        Color: 'Color del Patrimonio',
        Estado: 'Estado del Patrimonio'
      },
      {
        CodInterno: 1015,
        CodPatrimonial: 2015,
        Denominacion: 'Denomiancion del Patrimonio',
        Marca: 'Marca del Patrimonio',
        Modelo: 'Modelo del Patrimonio',
        Serie: 'Serie del Patrimonio',
        Color: 'Color del Patrimonio',
        Estado: 'Estado del Patrimonio'
      },
      {
        CodInterno: 1016,
        CodPatrimonial: 2016,
        Denominacion: 'Denomiancion del Patrimonio',
        Marca: 'Marca del Patrimonio',
        Modelo: 'Modelo del Patrimonio',
        Serie: 'Serie del Patrimonio',
        Color: 'Color del Patrimonio',
        Estado: 'Estado del Patrimonio'
      }
    ];
    this.selectOptions = { persistSelection: true };
    this.editSettings = { allowDeleting: true };
    this.toolbar = ['Search'];
    // this.initialPage = { pageSizes: true, pageCount: 4 };
  }

  buscarEmpleado() {
    this.empleadoService.getEmpleados().subscribe((response: any) => {
      this.dataGridEmpleado = response;
      console.log(this.dataGridEmpleado);
    });
  }
}
