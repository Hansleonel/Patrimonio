import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { BienEnlaceComponent } from './components/bien-enlace/bien-enlace.component';
import { ChartEmpleadoComponent } from './components/chart-empleado/chart-empleado.component';
import { ChartBienesIngresosComponent } from './components/chart-bienes-ingresos/chart-bienes-ingresos.component';
import { BienesRegistradosComponent } from './components/bienes-registrados/bienes-registrados.component';
import { MindefAppSharedModule } from 'app/shared/shared.module';
import { GridModule, PageService, SortService, FilterService, GroupService, ToolbarService } from '@syncfusion/ej2-angular-grids';

// CHART
import { AccumulationChartModule } from '@syncfusion/ej2-angular-charts';
import { ChartModule } from '@syncfusion/ej2-angular-charts';
import {
  CategoryService,
  BarSeriesService,
  ColumnSeriesService,
  LineSeriesService,
  LegendService,
  DataLabelService,
  MultiLevelLabelService,
  SelectionService
} from '@syncfusion/ej2-angular-charts';
import { CalendarBienesIngresosComponent } from './components/calendar-bienes-ingresos/calendar-bienes-ingresos.component';
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';

@NgModule({
  declarations: [
    DashboardComponent,
    BienEnlaceComponent,
    ChartEmpleadoComponent,
    ChartBienesIngresosComponent,
    BienesRegistradosComponent,
    CalendarBienesIngresosComponent
  ],
  imports: [CommonModule, DashboardRoutingModule, MindefAppSharedModule, AccumulationChartModule, ChartModule, GridModule, CalendarModule],
  providers: [
    CategoryService,
    BarSeriesService,
    ColumnSeriesService,
    LineSeriesService,
    LegendService,
    DataLabelService,
    MultiLevelLabelService,
    SelectionService,
    PageService,
    SortService,
    FilterService,
    GroupService,
    ToolbarService
  ]
})
export class DashboardModule {}
