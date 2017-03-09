import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { NotificationsService } from 'angular2-notifications';

import { GameService } from './game.service';
import { HttpService } from './http.service';
import { ConfigurationService } from './configuration.service';

describe('GameService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        GameService,
        NotificationsService,
        HttpService,
        ConfigurationService
      ]
    });
  });

  it('should ...', inject([GameService], (service: GameService) => {
    expect(service).toBeTruthy();
  }));
});
