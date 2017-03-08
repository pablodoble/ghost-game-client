import { TestBed, inject } from '@angular/core/testing';
import { NotificationsService } from 'angular2-notifications';

import { GameService } from './game.service';

describe('GameService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GameService, NotificationsService]
    });
  });

  it('should ...', inject([GameService], (service: GameService) => {
    expect(service).toBeTruthy();
  }));
});
