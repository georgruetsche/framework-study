import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {FormControl} from '@angular/forms';
import {Observable, of} from 'rxjs';
import {delay, map, startWith} from 'rxjs/operators';
import * as data from '../../shared/users.json';


export interface DialogData {
  name: string;
}

@Component({
  selector: 'material-buttons',
  templateUrl: './material-buttons.component.html',
  styleUrls: ['./material-buttons.component.css']
})
export class MaterialButtonsComponent implements OnInit {
  favoriteSeason: string | undefined;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
  myControl = new FormControl();
  options = data;
  filteredOptions!: Observable<string[]>;
  filterOptions!: string[];

  constructor(public dialog: MatDialog) { }

  name: string | undefined;

  ngOnInit(): void {
    this.filterOptions = this.options.users.map(option => option.firstName);
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.filterOptions.filter(option => option.toLowerCase().includes(filterValue));
  }
  getAsyncData() {
    return of (
      this.options.users
    ).pipe(delay(1000));
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: {name: this.name}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    private _snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
    this._snackBar.open("Speichern erfolgreich", "", {
      duration: 2000
    });
  }

  openSnackBar() {
    this.dialogRef.close();
    this._snackBar.open("Speichern fehlgeschlagen", "Fehler", {
      duration: 2000
    });

    // this._snackBar.dismiss();
  }
}
