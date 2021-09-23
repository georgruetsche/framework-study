import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntTreeComponent } from './ant-tree.component';

describe('AntTreeComponent', () => {
  let component: AntTreeComponent;
  let fixture: ComponentFixture<AntTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AntTreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AntTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
