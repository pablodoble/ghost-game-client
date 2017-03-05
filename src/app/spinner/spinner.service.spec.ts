import { TestBed, inject } from '@angular/core/testing';

import { SpinnerService } from './spinner.service';

describe('SpinnerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpinnerService]
    });
  });

  it('should show() call spinnerSubject.next(true)', inject([SpinnerService], (service: SpinnerService) => {
    let spinnerSubjectSpy = spyOn(service.spinnerSubject, "next");
    service.show();
    expect(spinnerSubjectSpy).toHaveBeenCalledWith(true);
  }));

  it('should hide() call spinnerSubject.next(false)', inject([SpinnerService], (service: SpinnerService) => {
    let spinnerSubjectSpy = spyOn(service.spinnerSubject, "next");
    service.hide();
    expect(spinnerSubjectSpy).toHaveBeenCalledWith(false);
  }));
});
