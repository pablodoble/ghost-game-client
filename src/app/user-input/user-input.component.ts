import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.less']
})
export class UserInputComponent implements OnInit {
  inputText: string;

  constructor() { }

  get hasText() {
    return this.inputText && this.inputText.length > 0;
  }

  ngOnInit() {
  }

}
