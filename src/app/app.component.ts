import { Component } from '@angular/core';
import { NotificationService } from './notification/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'auto-book';
  error: string | undefined;

  constructor(private notificationService: NotificationService) {
    this.notificationService.getError().subscribe(error => {
          this.error = error;
          this.resetErrorState();
        }
      );
    }

    resetErrorState() {
      setTimeout(()=> {
        this.error = undefined;
      }, 5000);
    }

  }
