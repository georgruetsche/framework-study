import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ant-collapse',
  templateUrl: './ant-collapse.component.html',
  styleUrls: ['./ant-collapse.component.css']
})
export class AntCollapseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  panels = [
    {
      active: true,
      name: 'This is panel header 1',
      disabled: false
    },
    {
      active: false,
      disabled: false,
      name: 'This is panel header 2'
    },
    {
      active: false,
      disabled: true,
      name: 'This is panel header 3'
    }
  ];

}
