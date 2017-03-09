import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { NotificationsService } from 'angular2-notifications';

import { HttpService } from './http.service';

@Injectable()
export class GameService {
  onLetterAdded: ReplaySubject<string>;
  onWinner: ReplaySubject<boolean>;
  currentWord: string = "";
  myTurn: boolean = true;

  constructor(
    private notificationsService: NotificationsService,
    private httpService: HttpService
  ) {
    this.onLetterAdded = new ReplaySubject<string>();
    this.onWinner = new ReplaySubject<boolean>();
  }

  initGame(): Observable<any> {
    this.myTurn = true;
    this.currentWord = "";
    this.onLetterAdded.next(this.currentWord);
    return this.httpService.get('/game/init');
  }

  addLetter(letter: string): Observable<string> {
    this.myTurn = false;
    this.currentWord = this.currentWord + letter;
    this.onLetterAdded.next(this.currentWord);
    return this.httpService.post('/game/letter/new', { letter })
      .map(body => {
        this.currentWord = body.currentWord;
        this.onLetterAdded.next(this.currentWord);
        console.log("body", body);
        if (body.winner !== null) {
          this.onWinner.next(body.winner);
        } else {
          this.myTurn = true;
          this.notificationsService.info("Game info", "It's your turn!");
        }
        return this.currentWord;
      });
  }

  getCurrentWord(): Observable<string> {
    let observable = new Observable<string>(observer => {
      observer.next(this.currentWord);
    });
    return observable;
  }

  getWinnerReason(winner): Observable<string> {
    return this.httpService.post('/game/word/info', {word: this.currentWord})
      .map(wordInfo => {
        let loserSubject = winner ? "The machine" : "You";
        let result = "";
        
        if(wordInfo.isOnDictionary) {
            result = "typed a valid word";
        } else {
            result = "typed a word that couldn't produce another one"
        }

        return `${loserSubject} ${result}`;
      });
  }

}
