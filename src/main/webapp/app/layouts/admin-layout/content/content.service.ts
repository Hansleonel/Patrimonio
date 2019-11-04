import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  _title: Subject<string>;

  constructor() {
    this._title = new Subject();
  }

  getTitle(): Observable<string> {
    return this._title;
  }
  setTitle(value: string) {
    this._title.next(value);
  }
}
