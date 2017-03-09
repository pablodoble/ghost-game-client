import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-winner',
  templateUrl: './winner.component.html',
  styleUrls: ['./winner.component.less']
})
export class WinnerComponent implements OnInit {
  winner: boolean = false;
  winnerReason: string = "";
  show: boolean = false;

  constructor(
    private gameService: GameService
  ) { }

  get winnerResult() {
    return this.winner ? 'YOU WIN!' : 'YOU LOSE';
  }

  ngOnInit() {
    this.subscribeToOnWinnerEvent();
  }

  startAgain() {
    this.gameService.initGame()
    .subscribe(() => {
      this.show = false;
    });
  }

  private subscribeToOnWinnerEvent() {
    this.gameService.onWinner
      .flatMap(winner => {
        this.winner = winner;
        return this.gameService.getWinnerReason(this.winner);
      })
      .subscribe(reason => {
        this.winnerReason = reason;
        this.show = true;
      })
  }

}
