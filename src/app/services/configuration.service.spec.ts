import { TestBed, inject, async } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { ConfigurationService } from './configuration.service';

describe('ConfigurationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [ConfigurationService]
    });
  });

  it('should loadConfiguration() load the current config.json and assign it to configuration property', async(inject([ConfigurationService], (service: ConfigurationService) => {
    service.loadConfiguration().subscribe(() => {
      expect(service.configuration.SERVER_URL).toEqual('http://localhost:3000');
    });
  })));
});
