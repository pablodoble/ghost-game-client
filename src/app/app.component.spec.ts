import { TestBed, async } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';

import { AppComponent } from './app.component';
import { ConfigurationService } from './services/configuration.service';
import { GameService } from './services/game.service';
import { HttpService } from './services/http.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      declarations: [
        AppComponent
      ],
      providers: [
        ConfigurationService,
        GameService,
        NotificationsService,
        HttpService
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app works!'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app works!');
  }));
});
