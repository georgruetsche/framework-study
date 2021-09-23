
import { Component, OnInit } from '@angular/core';
import { NzButtonSize } from 'ng-zorro-antd/button';
import { NzMessageService } from 'ng-zorro-antd/message';
import {of} from 'rxjs';
import {delay, filter} from 'rxjs/operators';
import * as data from '../../shared/users.json'

@Component({
  selector: 'app-ant-buttons',
  templateUrl: './ant-buttons.component.html',
  styleUrls: ['./ant-buttons.component.css']
})
export class AntButtonsComponent implements OnInit {
  isVisible = false;
  inputValue?: string;
  filteredOptions: any;
  options = data;

  constructor(private message: NzMessageService) {
    this.filteredOptions = this.options;

    }


  getAsyncData() {
    return of (
      this.options.users
    ).pipe(delay(1000))
  }

  ngOnInit(): void {
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.message.info('speichern erfolgreich');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.message.info('speichern fehlgeschlagen');
    this.isVisible = false;
  }

  onChange(value: string): void {
   this.filteredOptions = this.options.users.filter(option => option.firstName.toLowerCase().indexOf(value.toLowerCase()) !== -1);
  }

  size: NzButtonSize = 'large';
  radioValue = 'A';

}
