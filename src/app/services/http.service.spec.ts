import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { ConfigurationService } from './configuration.service';
import { HttpService } from './http.service';

describe('HttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        HttpService,
        ConfigurationService
      ]
    });
  });

  it('should ...', inject([HttpService], (service: HttpService) => {
    expect(service).toBeTruthy();
  }));
});
