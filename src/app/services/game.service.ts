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

  addLetter(letter: string): Observable<string> {
    this.myTurn = false;
    this.currentWord = this.currentWord + letter;
    this.onLetterAdded.next(this.currentWord);
    let observable = new Observable<string>(observer => {
      // here we should do an http request to the server
      setTimeout(() => {
        this.myTurn = true;
        this.notificationsService.info("Game info", "It's your turn!");
        observer.next(this.currentWord);
      }, 1000);
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
