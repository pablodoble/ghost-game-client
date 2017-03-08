import { TestBed, inject } from '@angular/core/testing';
import { NotificationsService } from 'angular2-notifications';

import { UserInputService } from './user-input.service';
import { GameService } from '../services/game.service';

describe('UserInputService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UserInputService,
        GameService,
        NotificationsService
      ]
    });
  });

  it('should ...', inject([UserInputService], (service: UserInputService) => {
    expect(service).toBeTruthy();
  }));
});
