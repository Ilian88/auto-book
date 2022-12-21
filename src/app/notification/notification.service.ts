import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private _subject = new Subject<string>()

  constructor() { }

  createErrorMessage(errorMessage: string) {
    this._subject.next(errorMessage);
  }

  getError() {
    return this._subject.asObservable();
  }

}
