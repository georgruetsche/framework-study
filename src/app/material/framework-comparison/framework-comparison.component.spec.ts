import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameworkComparisonComponent } from './framework-comparison.component';

describe('FrameworkComparisonComponent', () => {
  let component: FrameworkComparisonComponent;
  let fixture: ComponentFixture<FrameworkComparisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrameworkComparisonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameworkComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
