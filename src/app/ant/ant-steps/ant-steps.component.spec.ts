import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntStepsComponent } from './ant-steps.component';

describe('AntStepsComponent', () => {
  let component: AntStepsComponent;
  let fixture: ComponentFixture<AntStepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AntStepsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AntStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
