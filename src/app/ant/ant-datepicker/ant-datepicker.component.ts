import { Component, OnInit } from '@angular/core';
import { getISOWeek } from 'date-fns';

@Component({
  selector: 'app-ant-datepicker',
  templateUrl: './ant-datepicker.component.html',
  styleUrls: ['./ant-datepicker.component.css']
})
export class AntDatepickerComponent implements OnInit {
  date = null;

  constructor() { }

  ngOnInit(): void {
  }

  onChange(result: Date[]): void {
    console.log('onChange: ', result);
  }

  getWeek(result: Date[]): void {
    console.log('week: ', result.map(getISOWeek));
  }

}
