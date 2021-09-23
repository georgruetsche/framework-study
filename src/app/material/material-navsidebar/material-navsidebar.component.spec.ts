import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialNavsidebarComponent } from './material-navsidebar.component';

describe('MaterialNavsidebarComponent', () => {
  let component: MaterialNavsidebarComponent;
  let fixture: ComponentFixture<MaterialNavsidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialNavsidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialNavsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
