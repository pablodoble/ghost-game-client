import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable()
export class SpinnerService {
  spinnerSubject: ReplaySubject<boolean>;

  constructor() {
    this.spinnerSubject = new ReplaySubject<boolean>();
  }

  show() {
    this.spinnerSubject.next(true);
  }

  hide() {
    this.spinnerSubject.next(false);
  }

}
