
import { Component, OnInit } from '@angular/core';
import { NzButtonSize } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-ant-buttons',
  templateUrl: './ant-buttons.component.html',
  styleUrls: ['./ant-buttons.component.css']
})
export class AntButtonsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  size: NzButtonSize = 'large';
  radioValue = 'A';

}
