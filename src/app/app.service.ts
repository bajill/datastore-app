import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Injectable()
export class AppService {

  constructor(private http: Http) { }

  private serverUrl = 'https://play.dhis2.org/dev/api';
  private basicAuth = `Basic ${btoa('admin:district')}`;

  private headers = new Headers({ 'Content-Type': 'application/json' });

  loadFromDataStore(path: string): any {
    console.log('load from store ' + path);
    this.headers.append('Authorization', 'Basic ' + btoa('admin:district'));
    return Observable.create(observer => {
      this.http
        .get(`${this.serverUrl}/25/dataStore/${path}`, { headers: this.headers })
        .map(res => res.json())
        .subscribe((data) => {
          observer.next(data);
          observer.complete();
        });
    });
  }
}
