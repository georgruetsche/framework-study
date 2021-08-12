import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-material-snack-bar',
  templateUrl: './material-snack-bar.component.html',
  styleUrls: ['./material-snack-bar.component.css']
})
export class MaterialSnackBarComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

}
