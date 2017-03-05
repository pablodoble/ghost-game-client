import { Injectable } from '@angular/core';
import { GameService } from '../services/game.service';

@Injectable()
export class UserInputService {

  constructor(
    private gameService: GameService
  ) {}

  submitLetter(letter: string) {
    this.gameService.addLetter(letter);
    console.log("submitted!");
  }

}
