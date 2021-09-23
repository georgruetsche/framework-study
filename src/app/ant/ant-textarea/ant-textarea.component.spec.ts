import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntTextareaComponent } from './ant-textarea.component';

describe('AntTextareaComponent', () => {
  let component: AntTextareaComponent;
  let fixture: ComponentFixture<AntTextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AntTextareaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AntTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
