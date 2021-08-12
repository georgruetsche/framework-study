import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntDatepickerComponent } from './ant-datepicker.component';

describe('AntDatepickerComponent', () => {
  let component: AntDatepickerComponent;
  let fixture: ComponentFixture<AntDatepickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AntDatepickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AntDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
