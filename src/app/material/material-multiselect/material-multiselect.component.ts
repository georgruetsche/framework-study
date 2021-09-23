import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-material-multiselect',
  templateUrl: './material-multiselect.component.html',
  styleUrls: ['./material-multiselect.component.css']
})
export class MaterialMultiselectComponent implements OnInit {
  toppings = new FormControl();
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  constructor() { }

  ngOnInit(): void {
  }

  addNewTopping(value: string){
    this.toppingList.push(value);
    }

}
