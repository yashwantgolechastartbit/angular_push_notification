import { Component } from '@angular/core';
import { OneSignalService } from './one-signal.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Onesignal Push Notification';
  constructor(
    private os : OneSignalService
  ){
    this.os.onInit();
  }
}
