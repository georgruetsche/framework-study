import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-material-sidebar',
  templateUrl: './material-sidebar.component.html',
  styleUrls: ['./material-sidebar.component.css']
})
export class MaterialSidebarComponent implements OnInit {
  events: string[] = [];
  opened: boolean | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));

}
