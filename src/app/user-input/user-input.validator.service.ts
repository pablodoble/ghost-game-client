import { Injectable } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';

@Injectable()
export class UserInputValidatorService {
  private notificationsTitle = "Input validation error";

  constructor(
    private notificationsService: NotificationsService
  ) { }

  hasText(inputText: string): boolean {
    let result = inputText ? inputText.length > 0 : false;
    if(!result) {
      this.notificationsService.error(this.notificationsTitle, "Please, insert a letter on the text box");
    }
    return result;
  }

  isALetter(inputText: string): boolean {
    let regex = new RegExp(/[a-zA-Z]/);
    let result = regex.test(inputText);
    if(!result) {
      this.notificationsService.error(this.notificationsTitle, "Please, insert a valid letter (numbers or symbols are not allowed)");
    }
    return result;
  }
}
