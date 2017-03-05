import { TestBed, inject } from '@angular/core/testing';

import { UserInputValidatorService } from './user-input.validator.service';

describe('UserInputService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserInputValidatorService]
    });
  });

  it('should ...', inject([UserInputValidatorService], (service: UserInputValidatorService) => {
    expect(service).toBeTruthy();
  }));
});
