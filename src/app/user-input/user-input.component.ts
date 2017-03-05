import { Component, OnInit } from '@angular/core';
import { UserInputValidatorService } from './user-input.validator.service';
import { UserInputService } from './user-input.service';
import { GameService } from '../services/game.service';

@Component({
  selector: 'user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.less']
})
export class UserInputComponent implements OnInit {
  inputText: string;

  constructor(
    private validator: UserInputValidatorService,
    private userInputService: UserInputService,
    private gameService: GameService
  ) { }

  get hasText() {
    return this.inputText ? this.inputText.length > 0 : false;
  }

  get isMyTurn() {
    return this.gameService.myTurn;
  }

  ngOnInit() {
  }

  validateInput(): boolean {
    let valid = true
      && this.validator.hasText(this.inputText)
      && this.validator.isALetter(this.inputText);

    return valid;
  }

  submit() {
    let isInputValid = this.validateInput();
    if (isInputValid) {
      this.userInputService.submitLetter(this.inputText);
      this.clearInput();
    }
  }

  clearInput() {
    this.inputText = "";
  }

}
