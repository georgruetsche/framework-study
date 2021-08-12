import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'material-buttons',
  templateUrl: './material-buttons.component.html',
  styleUrls: ['./material-buttons.component.css']
})
export class MaterialButtonsComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
  favoriteSeason: string | undefined;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];


}
