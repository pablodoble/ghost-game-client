import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { NotificationsService } from 'angular2-notifications';

import { UserInputService } from './user-input.service';
import { GameService } from '../services/game.service';
import { HttpService } from '../services/http.service';
import { ConfigurationService } from '../services/configuration.service';

describe('UserInputService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        UserInputService,
        GameService,
        NotificationsService,
        HttpService,
        ConfigurationService
      ]
    });
  });

  it('should ...', inject([UserInputService], (service: UserInputService) => {
    expect(service).toBeTruthy();
  }));
});
