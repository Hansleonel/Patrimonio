import { Component, OnInit } from '@angular/core';
import { CommandColumnService, CommandModel, EditService, PageService } from '@syncfusion/ej2-angular-grids';
import { Router } from '@angular/router';
import { BienesService } from 'app/modules/bienes/bienes.service';

@Component({
  selector: 'md-list-bienes-muebles',
  templateUrl: './list-bienes-muebles.component.html',
  styleUrls: ['./list-bienes-muebles.component.scss'],
  providers: [EditService, PageService, CommandColumnService]
})
export class ListBienesMueblesComponent implements OnInit {
  public data: Object[];
  public dataBien: Object[];
  public editSettings: Object;
  public orderidrules: Object;
  public customeridrules: Object;
  public freightrules: Object;
  public editparams: Object;
  pageSettings: Object;
  public commands: CommandModel[];
  public toolbar;
  public filter: Object;
  mostrarAlert = false;

  constructor(private router: Router, private bienService: BienesService) {
    this.timerAlertListaBienes();
  }

  ngOnInit() {
    this.listarBien();
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

  registrarNuevoBien() {
    console.log('mensaje');
    this.router.navigate(['/bienes-muebles/edit']);
  }

  editarBien() {
    console.log('mensaje');
    this.router.navigate(['/bienes-muebles/edit']);
  }

  timerAlertListaBienes() {
    this.mostrarAlert = true;
    setTimeout(() => {
      this.mostrarAlert = false;
    }, 2400);
  }

  listarBien() {
    this.bienService.getBien().subscribe((response: any) => {
      this.dataBien = response;
      console.log(this.dataBien);
    });
  }
}
