import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapNavigationComponent } from './bootstrap-navigation.component';

describe('BootstrapNavigationComponent', () => {
  let component: BootstrapNavigationComponent;
  let fixture: ComponentFixture<BootstrapNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BootstrapNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
