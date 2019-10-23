import { Component, OnDestroy, OnInit } from '@angular/core';
import { JhiAlertService } from 'ng-jhipster';

@Component({
  selector: 'md-alert',
  template: `
    <div class="alerts" role="alert">
      <div *ngFor="let alert of alerts" [ngClass]="setClasses(alert)">
        <ngb-alert *ngIf="alert && alert.type && alert.msg" [type]="alert.type" (close)="alert.close(alerts)">
          <pre [innerHTML]="alert.msg"></pre>
        </ngb-alert>
      </div>
    </div>
  `
})
export class MdAlertComponent implements OnInit, OnDestroy {
  alerts: any[];

  constructor(private alertService: JhiAlertService) {}

  ngOnInit() {
    this.alerts = this.alertService.get();
  }

  setClasses(alert) {
    return {
      'jhi-toast': alert.toast,
      [alert.position]: true
    };
  }

  ngOnDestroy() {
    this.alerts = [];
  }
}
