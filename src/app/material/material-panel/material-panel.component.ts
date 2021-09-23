import { Component, OnInit } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';

@Component({
  selector: 'app-material-panel',
  templateUrl: './material-panel.component.html',
  styleUrls: ['./material-panel.component.css']
})
export class MaterialPanelComponent implements OnInit {
  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
  }

}
