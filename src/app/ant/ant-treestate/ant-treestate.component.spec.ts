import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntTreestateComponent } from './ant-treestate.component';

describe('AntTreestateComponent', () => {
  let component: AntTreestateComponent;
  let fixture: ComponentFixture<AntTreestateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AntTreestateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AntTreestateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
