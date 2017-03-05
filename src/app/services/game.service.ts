import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable()
export class GameService {
  onLetterAdded: ReplaySubject<string>;
  //provisional property until backend is working
  currentWord: string = "";

  constructor() {
    this.onLetterAdded = new ReplaySubject<string>();
  }

  addLetter(letter: string): string {
    this.currentWord = this.currentWord + letter;
    this.onLetterAdded.next(this.currentWord);
    return this.currentWord;
  }

  getCurrentWord(): string {
    return this.currentWord;
  }

}
