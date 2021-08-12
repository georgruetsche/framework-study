import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntNavigationComponent } from './ant-navigation.component';

describe('AntNavigationComponent', () => {
  let component: AntNavigationComponent;
  let fixture: ComponentFixture<AntNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AntNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AntNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
