import { TestBed, inject } from '@angular/core/testing';
import { NotificationsService } from 'angular2-notifications';

import { UserInputValidatorService } from './user-input.validator.service';

describe('UserInputService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UserInputValidatorService,
        NotificationsService
      ]
    });
  });

  it('should hasText() return true if inputText has a string on it', inject([UserInputValidatorService], (service: UserInputValidatorService) => {
    let hasText = service.hasText("a");
    expect(hasText).toEqual(true);
  }));

  it('should hasText() return undefined if inputText is undefined', inject([UserInputValidatorService], (service: UserInputValidatorService) => {
    let hasText = service.hasText(undefined);
    expect(hasText).toEqual(false);
  }));

  it('should hasText() return false if inputText is empty', inject([UserInputValidatorService], (service: UserInputValidatorService) => {
    let hasText = service.hasText("");
    expect(hasText).toEqual(false);
  }));

  it('should isALetter() return true if inputText is a letter', inject([UserInputValidatorService], (service: UserInputValidatorService) => {
    let isALetter = service.isALetter("a");
    expect(isALetter).toEqual(true);
  }));

  it('should isALetter() return false if inputText is not a letter', inject([UserInputValidatorService], (service: UserInputValidatorService) => {
    let isALetter = service.isALetter("1");
    expect(isALetter).toEqual(false);
  }));

});
