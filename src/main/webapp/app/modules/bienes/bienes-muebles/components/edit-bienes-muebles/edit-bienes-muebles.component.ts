import { Component, OnInit, ViewChild } from '@angular/core';
import {
  CommandColumnService,
  CommandModel,
  EditService,
  GridComponent,
  RowSelectEventArgs,
  PageService
} from '@syncfusion/ej2-angular-grids';
import { BienesService } from 'app/modules/bienes/bienes.service';
import { ChangeEventArgs, RadioButtonComponent } from '@syncfusion/ej2-angular-buttons';

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

  valorEstadoAsignacion: String;

  codigoPatrimonialEdit;
  codigoInternoEdit;
  secuenciaEdit;
  tipoBienEdit;
  grupoBienEdit;
  claseBienEdit;
  familiaBienEdit;
  itemBienEdit;
  descripcionEdit;
  sedeEdit;
  pliegoEdit;
  centrocostoEdit;
  empleadoEdit;
  origenactivoEdit;
  tipoubicacionEdit;
  codigoUbicacionEdit;
  marcaEdit;
  codigoColorEdit;
  nombreColorEdit;
  caracteristicaEdit;
  modeloEdit;
  medidasEdit;
  nroSerieEdit;
  valorInicialEdit;
  valorDepEdit;
  clasificadorEdit;
  anoEEdit;
  subctaEdit;
  mayorEdit;
  // console.log('30 asignado ' + asignado);
  reparacionEdit;
  slidaEdit;
  estadoEdit;
  conservacionEdit;

  // TODO VALIDADORES
  validarInput = 'form-control';

  @ViewChild('registroGridBien', { static: false }) registroGridBien: GridComponent;
  @ViewChild('radio1', { static: true }) public radio1: RadioButtonComponent;
  @ViewChild('radio2', { static: true }) public radio2: RadioButtonComponent;
  @ViewChild('gridEdit', { static: false })
  public grid: GridComponent;

  constructor(private bienService: BienesService) {}

  ngOnInit() {
    this.listarBienes();
    this.filter = { type: 'CheckBox' };
    this.toolbar = ['Search'];
    this.selectOptions = { checkboxMode: 'ResetOnRowClick' };
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

  comprobarValorCodSiga(codigoSIGA) {
    console.log('el valor del codigo patrimonial' + codigoSIGA);
    this.bienService.getBienCodigo(codigoSIGA).subscribe(
      (response: any) => {
        console.log(response);
        this.validarInput = 'form-control is-invalid';
      },
      error1 => {
        this.validarInput = 'form-control is-valid';
        console.log('respuesta del servicio con err: ', error1);
        console.log(error1['statusText']);
        if (error1['statusText'] === 'Not Found') {
          this.validarInput = 'form-control is-valid';
        }
      }
    );
  }

  listarBienes() {
    this.bienService.getBienes().subscribe((response: any) => {
      this.dataGridService = response;
      console.log(this.dataGridService);
    });
  }

  public changeOption1(args: ChangeEventArgs) {
    // document.getElementById('text').innerText = 'Selected : ' + this.radio1.label;
    this.valorEstadoAsignacion = 'asignado';
    console.log(this.valorEstadoAsignacion);
  }

  public changeOption2(args: ChangeEventArgs) {
    // document.getElementById('text').innerText = 'Selected : ' + this.radio2.label;
    this.valorEstadoAsignacion = 'no asignado';
    console.log(this.valorEstadoAsignacion);
  }

  adicionarNuevoBien(
    codigoPatrimonial,
    codigoInterno,
    secuencia,
    tipoBien,
    grupoBien,
    claseBien,
    familiaBien,
    itemBien,
    descripcion,
    sede,
    pliego,
    centrocosto,
    empleado,
    origenactivo,
    tipoubicacion,
    codigoUbicacion,
    marca,
    codigoColor,
    nombreColor,
    caracteristica,
    modelo,
    medidas,
    nroSerie,
    valorInicial,
    valorDep,
    clasificador,
    anoE,
    subcta,
    mayor,
    reparacion,
    slida,
    estado,
    conservacion
  ) {
    console.log(
      'adicionando' +
        ' codigoPatrimonial' +
        codigoPatrimonial +
        ' codigoInterno' +
        codigoInterno +
        ' secuencia' +
        secuencia +
        ' tipoBien' +
        tipoBien +
        ' grupoBien' +
        grupoBien +
        ' claseBien' +
        claseBien +
        ' familiaBien' +
        familiaBien +
        ' itemBien' +
        itemBien +
        ' descripcion' +
        descripcion +
        ' sede' +
        sede +
        ' pliego' +
        pliego +
        ' centrocosto' +
        centrocosto +
        ' empleado' +
        empleado +
        ' origenactivo' +
        origenactivo +
        ' tipoubicacion' +
        tipoubicacion +
        ' codigoUbicacion' +
        codigoUbicacion +
        ' marca' +
        marca +
        ' codigoColor' +
        codigoColor +
        ' nombreColor' +
        nombreColor +
        ' caracteristica' +
        caracteristica +
        ' modelo' +
        modelo +
        ' medidas' +
        medidas +
        ' nroSerie' +
        nroSerie +
        ' valorInicial' +
        valorInicial +
        ' valorDep' +
        valorDep +
        ' clasificador' +
        clasificador +
        ' anoE' +
        anoE +
        ' subcta' +
        subcta +
        ' mayor' +
        mayor +
        ' reparacion' +
        reparacion +
        ' slida' +
        slida +
        ' estado' +
        estado +
        ' conservacion' +
        conservacion
    );

    console.log('1 codigoPatrimonial ' + codigoPatrimonial);
    console.log('2 codigoInterno ' + codigoInterno);
    console.log('3 secuencia ' + secuencia);
    console.log('4 tipoBien ' + tipoBien);
    console.log('5 grupoBien ' + grupoBien);
    console.log('6 claseBien ' + claseBien);
    console.log('7 familiaBien ' + familiaBien);
    console.log('8 itemBien ' + itemBien);
    console.log('9 descripcion ' + descripcion);
    console.log('10 sede ' + sede);
    console.log('11 pliego ' + pliego);
    console.log('12 centrocosto ' + centrocosto);
    console.log('13 empleado ' + empleado);
    console.log('14 origenactivo ' + origenactivo);
    console.log('15 tipoubicacion ' + tipoubicacion);
    console.log('16 codigoUbicacion ' + codigoUbicacion);
    console.log('17 marca ' + marca);
    console.log('18 codigoColor ' + codigoColor);
    console.log('19 nombreColor ' + nombreColor);
    console.log('20 caracteristica ' + caracteristica);
    console.log('21 modelo ' + modelo);
    console.log('22 medidas ' + medidas);
    console.log('23 nroSerie ' + nroSerie);
    console.log('24 valorInicial ' + valorInicial);
    console.log('25 valorDep ' + valorDep);
    console.log('26 clasificador ' + clasificador);
    console.log('27 anoE ' + anoE);
    console.log('28 subcta ' + subcta);
    console.log('29 mayor ' + mayor);
    // console.log('30 asignado ' + asignado);
    console.log('31 reparacion ' + reparacion);
    console.log('32 slida ' + slida);
    console.log('33 estado ' + estado);
    console.log('34 conservacion ' + conservacion);

    this.bienService
      .postBien(
        codigoPatrimonial,
        codigoInterno,
        secuencia,
        tipoBien,
        grupoBien,
        claseBien,
        familiaBien,
        itemBien,
        descripcion,
        sede,
        pliego,
        centrocosto,
        empleado,
        origenactivo,
        tipoubicacion,
        codigoUbicacion,
        marca,
        codigoColor,
        nombreColor,
        caracteristica,
        modelo,
        medidas,
        nroSerie,
        valorInicial,
        valorDep,
        clasificador,
        anoE,
        subcta,
        mayor,
        reparacion,
        slida,
        estado,
        conservacion,
        this.valorEstadoAsignacion
      )
      .subscribe(response => {
        console.log(response);
      });
  }

  rowSelectedGridEdit(args: RowSelectEventArgs) {
    const selectedrowindex: number[] = this.grid.getSelectedRowIndexes();
    // alert(selectedrowindex);
    console.log(selectedrowindex);
    const selectedrecords: Object[] = this.grid.getSelectedRecords();
    console.log(selectedrecords);
    this.codigoPatrimonialEdit = selectedrecords[0]['id_patrimonio'];
    this.codigoInternoEdit = selectedrecords[0]['id_interno'];
    this.secuenciaEdit = selectedrecords[0]['secuencia'];
    this.tipoBienEdit = selectedrecords[0]['tipo_bien'];
    this.grupoBienEdit = selectedrecords[0]['grupo_bien'];
    this.claseBienEdit = selectedrecords[0]['clase_bien'];
    this.familiaBienEdit = selectedrecords[0]['familia_bien'];
    this.itemBienEdit = selectedrecords[0]['item_bien'];
    this.descripcionEdit = selectedrecords[0]['descripcion'];
    this.sedeEdit = selectedrecords[0]['sede'];
    this.pliegoEdit = selectedrecords[0]['pliego'];
    this.centrocostoEdit = selectedrecords[0]['centro_costo'];
    this.empleadoEdit = selectedrecords[0]['empleado'];
    this.origenactivoEdit = selectedrecords[0]['origen_activo'];
    this.tipoubicacionEdit = selectedrecords[0]['tipo_ubicacion'];
    this.codigoUbicacionEdit = selectedrecords[0]['codigo_ubicacion'];
    this.marcaEdit = selectedrecords[0]['codigo_marca'];
    this.codigoColorEdit = selectedrecords[0]['codigo_color'];
    this.nombreColorEdit = selectedrecords[0]['nombre_color'];
    this.caracteristicaEdit = selectedrecords[0]['caracteristica'];
    this.modeloEdit = selectedrecords[0]['modelo'];
    this.medidasEdit = selectedrecords[0]['medidas'];
    this.nroSerieEdit = selectedrecords[0]['nroserie'];
    this.valorInicialEdit = selectedrecords[0]['valor_inicial'];
    this.valorDepEdit = selectedrecords[0]['valor_deprec'];
    this.clasificadorEdit = selectedrecords[0]['clasificador'];
    this.anoEEdit = selectedrecords[0]['ano_e'];
    this.subctaEdit = selectedrecords[0]['sub_cta'];
    this.mayorEdit = selectedrecords[0]['mayor'];
    // console.log('30 asignado ' + asignado);
    this.reparacionEdit = selectedrecords[0]['estado_reparacion'];
    this.slidaEdit = selectedrecords[0]['salida'];
    this.estadoEdit = selectedrecords[0]['estado_activo'];
    this.conservacionEdit = selectedrecords[0]['estado_consercacion'];

    this.comprobarValorCodSiga(this.codigoPatrimonialEdit);
  }
}
