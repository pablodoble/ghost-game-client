import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from './services/configuration.service';
import { GameService } from './services/game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  notificationsOptions: any = {
    position: "top",
    timeOut: 2000,
    preventDuplicates: true
  };

  constructor(
    private configurationService: ConfigurationService,
    private gameService: GameService
  ) { }

  ngOnInit() {
    this.configurationService
      .loadConfiguration()
      .flatMap(() => {
        return this.gameService.initGame();
      })
      .subscribe(() => {
        console.log("Game init!");
      });
  }
}
