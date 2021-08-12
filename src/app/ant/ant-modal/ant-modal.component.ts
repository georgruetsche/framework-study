import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ant-modal',
  templateUrl: './ant-modal.component.html',
  styleUrls: ['./ant-modal.component.css']
})
export class AntModalComponent implements OnInit {
  isVisible = false;

  constructor() { }

  ngOnInit(): void {
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

}
