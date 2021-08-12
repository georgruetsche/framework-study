import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialButtonsComponent } from './material-buttons.component';

describe('ButtonsComponent', () => {
  let component: MaterialButtonsComponent;
  let fixture: ComponentFixture<MaterialButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
