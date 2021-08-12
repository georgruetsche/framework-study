import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntProgressComponent } from './ant-progress.component';

describe('AntProgressComponent', () => {
  let component: AntProgressComponent;
  let fixture: ComponentFixture<AntProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AntProgressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AntProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
