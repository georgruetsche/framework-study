import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntDownloadComponent } from './ant-download.component';

describe('AntDownloadComponent', () => {
  let component: AntDownloadComponent;
  let fixture: ComponentFixture<AntDownloadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AntDownloadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AntDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
