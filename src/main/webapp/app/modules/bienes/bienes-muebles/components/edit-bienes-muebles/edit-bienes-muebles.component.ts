import { Component, OnInit, ViewChild } from '@angular/core';
import { CommandColumnService, CommandModel, EditService, PageService } from '@syncfusion/ej2-angular-grids';
import { GridComponent } from '@syncfusion/ej2-angular-grids';
import { BienesService } from 'app/modules/bienes/bienes.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'md-edit-bienes-muebles',
  templateUrl: './edit-bienes-muebles.component.html',
  styleUrls: ['./edit-bienes-muebles.component.scss'],
  providers: [EditService, PageService, CommandColumnService]
})
export class EditBienesMueblesComponent implements OnInit {
  public dataGrid: Object[];
  public dataGridService: Object[];

  public initialPage;
  public selectOptions;
  public editSettings;
  public toolbar;
  public filter: Object;

  public orderidrules: Object;
  public customeridrules: Object;
  public freightrules: Object;
  public editparams: Object;
  pageSettings: Object;
  public commands: CommandModel[];

  @ViewChild('registroGridBien', { static: false }) registroGridBien: GridComponent;

  constructor(private bienService: BienesService, private http: HttpClient) {}

  ngOnInit() {
    this.listarBienes();
    this.filter = { type: 'CheckBox' };
    this.toolbar = ['Search'];
    this.editSettings = {
      allowEditing: true,
      allowAdding: true,
      allowDeleting: true,
      mode: 'Normal',
      allowEditOnDblClick: false
    };
    this.orderidrules = { required: true };
    this.customeridrules = { required: true };
    this.freightrules = { required: true };
    this.editparams = { params: { popupHeight: '300px' } };
    this.pageSettings = { pageCount: 5, pageSize: 100 };
    this.commands = [
      { type: 'Edit', buttonOption: { iconCss: ' e-icons e-edit', cssClass: 'e-flat' } },
      { type: 'Delete', buttonOption: { iconCss: 'e-icons e-delete', cssClass: 'e-flat' } },
      { type: 'Save', buttonOption: { iconCss: 'e-icons e-update', cssClass: 'e-flat' } },
      { type: 'Cancel', buttonOption: { iconCss: 'e-icons e-cancel-icon', cssClass: 'e-flat' } }
    ];
  }

  listarBienes() {
    this.bienService.getBienes().subscribe((response: any) => {
      this.dataGridService = response;
      console.log(this.dataGridService);
    });
  }

  adicionarNuevoBien() {
    console.log('adicionando');
    this.bienService.postBien().subscribe(r => {
      console.log(r);
    });
    this.http
      .post(`http://localhost:9000/api/bien`, {
        id_patrimonio: 952299120053,
        id_interno: 65,
        secuencia: 2241,
        tipo_bien: 'B',
        grupo_bien: 11,
        clase_bien: 22,
        familia_bien: 3614,
        item_bien: 1,
        descripcion: 'EQUIPO PARA AIRE ACONDICIONADO TIPO DOMESTICO',
        sede: 1,
        pliego: 26,
        centro_costo: 3030117,
        empleado: 10718,
        origen_activo: 'O/C',
        tipo_ubicacion: 1,
        codigo_ubicacion: 166,
        codigo_marca: 328,
        codigo_color: 1,
        nombre_color: null,
        caracteristica: 'EQUIPO DE AIRE ACONDICIONADO DE 24,000 BTU MITSUBISHI',
        modelo: '[NO ESPECIFICA]',
        medidas: '0',
        medida: null,
        valor_inicial: '6841.99',
        valor_deprec: '6840.99',
        clasificador: '2.6. 3  2. 9  1',
        ano_e: 2019,
        sub_cta: 20901,
        mayor: 1503,
        estado_asignado: 'Asignado',
        estado_reparacion: 'Pendiente',
        salida: 'NO',
        estado_activo: 'Activo Fijo',
        estado_consercacion: 'Regular'
      })
      .subscribe(responsePost => {
        console.log(responsePost);
      });
  }
}
