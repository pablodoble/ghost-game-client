import { Injectable } from '@angular/core';

@Injectable()
export class UserInputService {

  constructor() {}

  submitLetter(letter: string) {
    // Do submit
    console.log("submitted!");
  }

}
