import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntCollapseComponent } from './ant-collapse.component';

describe('AntCollapseComponent', () => {
  let component: AntCollapseComponent;
  let fixture: ComponentFixture<AntCollapseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AntCollapseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AntCollapseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
