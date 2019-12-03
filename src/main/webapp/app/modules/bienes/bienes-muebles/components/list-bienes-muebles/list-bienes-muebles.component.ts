import { Component, OnInit } from '@angular/core';
import { CommandColumnService, CommandModel, EditService, PageService } from '@syncfusion/ej2-angular-grids';
import { Router } from '@angular/router';

@Component({
  selector: 'md-list-bienes-muebles',
  templateUrl: './list-bienes-muebles.component.html',
  styleUrls: ['./list-bienes-muebles.component.scss'],
  providers: [EditService, PageService, CommandColumnService]
})
export class ListBienesMueblesComponent implements OnInit {
  public data: Object[];
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

  constructor(private router: Router) {
    this.timerAlertListaBienes();
  }

  ngOnInit() {
    this.filter = { type: 'CheckBox' };
    this.toolbar = ['Search'];
    this.data = [
      {
        OrderID: '10253',
        CustomerID: 'SUPRD',
        Freight: '$51.30',
        OrderDate: '7/8/1996',
        ShipCountry: 'Belgium',
        Status: 'Active'
      },
      {
        OrderID: '10248',
        CustomerID: 'SUPRD',
        Freight: '$51.30',
        OrderDate: '7/8/1996',
        ShipCountry: 'Belgium',
        Status: 'Active'
      },
      {
        OrderID: '10248',
        CustomerID: 'SUPRD',
        Freight: '$51.30',
        OrderDate: '7/8/1996',
        ShipCountry: 'Belgium',
        Status: 'Active'
      },
      {
        OrderID: '10248',
        CustomerID: 'SUPRD',
        Freight: '$51.30',
        OrderDate: '7/8/1996',
        ShipCountry: 'Belgium',
        Status: 'Active'
      },
      {
        OrderID: '10248',
        CustomerID: 'SUPRD',
        Freight: '$51.30',
        OrderDate: '7/8/1996',
        ShipCountry: 'Belgium',
        Status: 'Active'
      },
      {
        OrderID: '10248',
        CustomerID: 'SUPRD',
        Freight: '$51.30',
        OrderDate: '7/8/1996',
        ShipCountry: 'Belgium',
        Status: 'Active'
      },
      {
        OrderID: '10248',
        CustomerID: 'SUPRD',
        Freight: '$51.30',
        OrderDate: '7/8/1996',
        ShipCountry: 'Belgium',
        Status: 'Active'
      },
      {
        OrderID: '10248',
        CustomerID: 'SUPRD',
        Freight: '$51.30',
        OrderDate: '7/8/1996',
        ShipCountry: 'Belgium',
        Status: 'Active'
      },
      {
        OrderID: '10248',
        CustomerID: 'SUPRD',
        Freight: '$51.30',
        OrderDate: '7/8/1996',
        ShipCountry: 'Belgium',
        Status: 'Active'
      },
      {
        OrderID: '10248',
        CustomerID: 'SUPRD',
        Freight: '$51.30',
        OrderDate: '7/8/1996',
        ShipCountry: 'Belgium',
        Status: 'Active'
      },
      {
        OrderID: '10248',
        CustomerID: 'SUPRD',
        Freight: '$51.30',
        OrderDate: '7/8/1996',
        ShipCountry: 'Belgium',
        Status: 'Active'
      },
      {
        OrderID: '10248',
        CustomerID: 'SUPRD',
        Freight: '$51.30',
        OrderDate: '7/8/1996',
        ShipCountry: 'Belgium',
        Status: 'Active'
      },
      {
        OrderID: '10248',
        CustomerID: 'SUPRD',
        Freight: '$51.30',
        OrderDate: '7/8/1996',
        ShipCountry: 'Belgium',
        Status: 'Active'
      },
      {
        OrderID: '10248',
        CustomerID: 'SUPRD',
        Freight: '$51.30',
        OrderDate: '7/8/1996',
        ShipCountry: 'Belgium',
        Status: 'Active'
      },
      {
        OrderID: '10248',
        CustomerID: 'SUPRD',
        Freight: '$51.30',
        OrderDate: '7/8/1996',
        ShipCountry: 'Belgium',
        Status: 'Active'
      },
      {
        OrderID: '10248',
        CustomerID: 'SUPRD',
        Freight: '$51.30',
        OrderDate: '7/8/1996',
        ShipCountry: 'Belgium',
        Status: 'Active'
      },
      {
        OrderID: '10248',
        CustomerID: 'SUPRD',
        Freight: '$51.30',
        OrderDate: '7/8/1996',
        ShipCountry: 'Belgium',
        Status: 'Active'
      }
    ];
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
    this.pageSettings = { pageCount: 5, pageSize: 15 };
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

  timerAlertListaBienes() {
    this.mostrarAlert = true;
    setTimeout(() => {
      this.mostrarAlert = false;
    }, 2400);
  }
}
