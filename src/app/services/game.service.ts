import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { NotificationsService } from 'angular2-notifications';

import { HttpService } from './http.service';

@Injectable()
export class GameService {
  onLetterAdded: ReplaySubject<string>;
  //provisional property until backend is working
  currentWord: string = "";
  myTurn: boolean = true;

  constructor(
    private notificationsService: NotificationsService,
    private httpService: HttpService
  ) {
    this.onLetterAdded = new ReplaySubject<string>();
  }

  initGame(): Observable<any> {
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
        this.myTurn = true;
        this.notificationsService.info("Game info", "It's your turn!");
        return this.currentWord;
      });
  }

  getCurrentWord(): Observable<string> {
    let observable = new Observable<string>(observer => {
      observer.next(this.currentWord);
    });
    return observable;
  }

}
