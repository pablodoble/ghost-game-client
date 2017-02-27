import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.less']
})
export class SpinnerComponent implements OnInit {
  showSpinner: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
