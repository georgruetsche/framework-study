import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapAlertsComponent } from './bootstrap-alerts.component';

describe('BootstrapAlertsComponent', () => {
  let component: BootstrapAlertsComponent;
  let fixture: ComponentFixture<BootstrapAlertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BootstrapAlertsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
