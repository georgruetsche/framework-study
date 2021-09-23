import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialMultiselectComponent } from './material-multiselect.component';

describe('MaterialMultiselectComponent', () => {
  let component: MaterialMultiselectComponent;
  let fixture: ComponentFixture<MaterialMultiselectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialMultiselectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialMultiselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
