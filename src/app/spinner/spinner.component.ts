import { Component, OnInit } from '@angular/core';
import { SpinnerService } from './spinner.service';

@Component({
  selector: 'spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.less']
})
export class SpinnerComponent implements OnInit {
  showSpinner: boolean = false;

  constructor(
    private spinnerService: SpinnerService
  ) { }

  ngOnInit() {
    this.subscribeToSpinnerSubject();
  }

  private subscribeToSpinnerSubject() {
    this.spinnerService.spinnerSubject.subscribe(show => {
      this.showSpinner = show;
    })
  }

}
