import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dw',
  templateUrl: './dw.component.html',
  styleUrls: ['./dw.component.css']
})
export class DwComponent implements OnInit {

  modalSwitch: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  openModal() {
    this.modalSwitch = true;
  }

}
