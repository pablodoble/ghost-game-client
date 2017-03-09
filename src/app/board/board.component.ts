import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game.service';

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.less']
})
export class BoardComponent implements OnInit {
  content: string = "";

  constructor(
    private gameService: GameService
  ) { }

  ngOnInit() {
    this.subscribeToOnLetterAddedEvent();
  }

  private subscribeToOnLetterAddedEvent() {
    this.gameService.onLetterAdded.subscribe(currentWord => {
      this.content = currentWord;
    });
  }

}
