import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SimpleNotificationsModule } from 'angular2-notifications';

import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';

import { SpinnerService } from './spinner/spinner.service';
import { UserInputValidatorService } from './user-input/user-input.validator.service';
import { UserInputService } from './user-input/user-input.service';
import { GameService } from './services/game.service';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    SpinnerComponent,
    HeaderComponent,
    UserInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SimpleNotificationsModule.forRoot()
  ],
  providers: [
    SpinnerService,
    UserInputValidatorService,
    UserInputService,
    GameService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
