import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core'
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NotificationsService } from 'angular2-notifications';

import { UserInputComponent } from './user-input.component';
import { UserInputValidatorService } from './user-input.validator.service';
import { UserInputService } from './user-input.service';
import { GameService } from '../services/game.service';
import { HttpService } from '../services/http.service';
import { ConfigurationService } from '../services/configuration.service';

describe('UserInputComponent', () => {
  let component: UserInputComponent;
  let fixture: ComponentFixture<UserInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpModule],
      declarations: [UserInputComponent],
      providers: [
        UserInputValidatorService,
        UserInputService,
        NotificationsService,
        GameService,
        HttpService,
        ConfigurationService
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
