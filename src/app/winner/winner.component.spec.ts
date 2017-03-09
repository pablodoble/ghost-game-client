import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NotificationsService } from 'angular2-notifications';
import { HttpModule } from '@angular/http';

import { WinnerComponent } from './winner.component';

import { GameService } from '../services/game.service';
import { HttpService } from '../services/http.service';
import { ConfigurationService } from '../services/configuration.service';

describe('WinnerComponent', () => {
  let component: WinnerComponent;
  let fixture: ComponentFixture<WinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      declarations: [WinnerComponent],
      providers: [
        GameService,
        NotificationsService,
        HttpService,
        ConfigurationService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
