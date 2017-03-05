import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable()
export class GameService {
  onLetterAdded: ReplaySubject<string>;
  //provisional property until backend is working
  currentWord: string = "";

  constructor() {
    this.onLetterAdded = new ReplaySubject<string>();
  }

  addLetter(letter: string): Observable<string> {
    let observable = new Observable<string>(observer => {
      this.currentWord = this.currentWord + letter;
      this.onLetterAdded.next(this.currentWord);
      observer.next(this.currentWord);
    })
    return observable;
  }

  getCurrentWord(): Observable<string> {
    let observable = new Observable<string>(observer => {
        observer.next(this.currentWord);
    });
    return observable;
  }

}
