import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapProgressComponent } from './bootstrap-progress.component';

describe('BootstrapProgressComponent', () => {
  let component: BootstrapProgressComponent;
  let fixture: ComponentFixture<BootstrapProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BootstrapProgressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
