import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { of } from 'rxjs';

import { MindefAppTestModule } from '../../../test.module';
import { MdMetricsMonitoringComponent } from 'app/admin/metrics/metrics.component';
import { MdMetricsService } from 'app/admin/metrics/metrics.service';

describe('Component Tests', () => {
  describe('MdMetricsMonitoringComponent', () => {
    let comp: MdMetricsMonitoringComponent;
    let fixture: ComponentFixture<MdMetricsMonitoringComponent>;
    let service: MdMetricsService;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [MindefAppTestModule],
        declarations: [MdMetricsMonitoringComponent]
      })
        .overrideTemplate(MdMetricsMonitoringComponent, '')
        .compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(MdMetricsMonitoringComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(MdMetricsService);
    });

    describe('refresh', () => {
      it('should call refresh on init', () => {
        // GIVEN
        const response = {
          timers: {
            service: 'test',
            unrelatedKey: 'test'
          },
          gauges: {
            'jcache.statistics': {
              value: 2
            },
            unrelatedKey: 'test'
          }
        };
        spyOn(service, 'getMetrics').and.returnValue(of(response));

        // WHEN
        comp.ngOnInit();

        // THEN
        expect(service.getMetrics).toHaveBeenCalled();
      });
    });
  });
});
