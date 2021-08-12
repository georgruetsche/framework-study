import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntButtonsComponent } from './ant-buttons.component';

describe('AntButtonsComponent', () => {
  let component: AntButtonsComponent;
  let fixture: ComponentFixture<AntButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AntButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AntButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
