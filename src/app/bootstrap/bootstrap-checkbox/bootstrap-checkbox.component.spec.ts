import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapCheckboxComponent } from './bootstrap-checkbox.component';

describe('BootstrapCheckboxComponent', () => {
  let component: BootstrapCheckboxComponent;
  let fixture: ComponentFixture<BootstrapCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BootstrapCheckboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
