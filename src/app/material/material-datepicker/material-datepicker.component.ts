import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDatepicker } from "@angular/material/datepicker";

@Component({
  selector: 'app-material-datepicker',
  templateUrl: './material-datepicker.component.html',
  styleUrls: ['./material-datepicker.component.css']
})
export class MaterialDatepickerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  selectedValue : Date | null = null;

}
