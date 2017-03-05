import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'app works!';
  notificationsOptions: any = {
    position: "top",
    timeOut: 2000,
    preventDuplicates: true
  };
}
