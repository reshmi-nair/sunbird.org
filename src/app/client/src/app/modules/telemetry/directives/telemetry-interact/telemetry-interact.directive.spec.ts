import { RouterTestingModule } from '@angular/router/testing';
import { TelemetryInteractDirective } from './telemetry-interact.directive';
import { TelemetryService, TELEMETRY_PROVIDER } from '../../services';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { configureTestSuite } from '@sunbird/test-util';

const env = 'profile';
class ActivatedRouteStub {
  snapshot = {
    root: { firstChild : {data: { telemetry: { env: env} } } },
    data : {
       telemetry: { env: env }
    }
  };
}
const telemetryInteractEdata = {
  id: 'profile-save-summary',
  type: 'click',
  pageid: 'profile-read'
};
const telemetryInteractObject = {
  id: 'd0344-hhjk-hhjkhh',
  type: 'user',
  ver: '1.0'
};
@Component({
  template: `<button appTelemetryInteract [telemetryInteractObject]="telemetryInteractObject"
            [telemetryInteractEdata]="telemetryInteractEdata"
  class="ui primary button">save</button>`
})
class TestDirectiveComponent {
  @ViewChild(TelemetryInteractDirective) appTelemetryInteract: TelemetryInteractDirective;
  telemetryInteractObject = telemetryInteractObject;
  telemetryInteractEdata = telemetryInteractEdata;
  constructor() {
  }
}
// Old One
xdescribe('TelemetryInteractDirective', () => {
    let component: TestDirectiveComponent;
    let fixture: ComponentFixture<TestDirectiveComponent>;
    let inputEl: HTMLElement;
    configureTestSuite();
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule],
        declarations: [TestDirectiveComponent, TelemetryInteractDirective],
        providers: [TelemetryService, { provide: TELEMETRY_PROVIDER, useValue: EkTelemetry },
          { provide: ActivatedRoute, useClass: ActivatedRouteStub }]
      });
      fixture = TestBed.createComponent(TestDirectiveComponent);
      component = fixture.componentInstance;
      inputEl = fixture.nativeElement.querySelector('button');
    });

    it('Click event', () => {
      const telemetryService = TestBed.inject(TelemetryService);
      fixture.detectChanges();
      inputEl.click();
      spyOn(component.appTelemetryInteract.telemetryService, 'interact').and.callThrough();
      fixture.detectChanges();
      expect(component.appTelemetryInteract.telemetryInteractEdata).toEqual(telemetryInteractEdata);
      expect(component.appTelemetryInteract.telemetryInteractObject).toEqual(telemetryInteractObject);
      expect(component.appTelemetryInteract.appTelemetryInteractData).toEqual({
        context: {
          env: env,
          cdata: []
        },
        object: telemetryInteractObject,
        edata: telemetryInteractEdata
      });
    });
});
