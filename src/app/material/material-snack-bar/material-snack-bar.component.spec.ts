import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialSnackBarComponent } from './material-snack-bar.component';

describe('MaterialSnackBarComponent', () => {
  let component: MaterialSnackBarComponent;
  let fixture: ComponentFixture<MaterialSnackBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialSnackBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialSnackBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
