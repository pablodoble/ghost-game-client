import { TestBed, async } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { ConfigurationService } from './services/configuration.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      declarations: [
        AppComponent
      ],
      providers: [ConfigurationService],
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
