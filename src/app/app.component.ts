import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from './services/configuration.service';

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
    private configurationService: ConfigurationService
  ) {}

  ngOnInit() {
    this.configurationService.loadConfiguration().subscribe();
  }
}
