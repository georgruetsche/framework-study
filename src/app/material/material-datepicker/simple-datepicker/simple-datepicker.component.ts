import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {MatDatepicker} from '@angular/material/datepicker';

@Component({
  selector: 'app-simple-datepicker',
  templateUrl: './simple-datepicker.component.html',
  styleUrls: ['./simple-datepicker.component.css']
})
export class SimpleDatepickerComponent implements OnInit {
  @ViewChild('datepickerFooter', {static: false}) datepickerFooter!: ElementRef;
  @ViewChild('picker', {static: false}) picker!: MatDatepicker<any>;

    selectedValue : Date | null = null;

    onOpen() {
        this.appendFooter();
    }

    today() {
        this.selectedValue = new Date();
        this.picker.close();
        // console.log('today', this.datepicker);
        // this.datepicker.nativeElement.close();
    }

    done() {
        console.log('done');
        this.picker.close();
    }

    private appendFooter() {
        const matCalendar = document.getElementsByClassName('mat-datepicker-content')[0] as HTMLElement;
        matCalendar.appendChild(this.datepickerFooter.nativeElement);
    }

  constructor() { }

  ngOnInit(): void {
  }

  myHolidayDates = [
    new Date("12/1/2020"),
    new Date("12/20/2020"),
    new Date("12/17/2020"),
    new Date("12/25/2020"),
    new Date("12/4/2020"),
    new Date("12/7/2020"),
    new Date("12/12/2020"),
    new Date("12/11/2020"),
    new Date("12/26/2020"),
    new Date("12/25/2020")
];

myHolidayFilter = (d: Date): boolean => {
const time=d.getTime();
return !this.myHolidayDates.find(x=>x.getTime()==time);
}

weekendsDatesFilter = (d: any):boolean => {
  const day = d.getDay();
  return day !== 0 && day !== 6 ;
  }

}
