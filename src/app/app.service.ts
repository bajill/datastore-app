import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Injectable()
export class AppService {

  constructor(private http: Http) { }

  private serverUrl = 'http://localhost:8082/api';
  private basicAuth = `Basic ${btoa('admin:district')}`;

  private headers = new Headers({ 'Content-Type': 'application/json' });

  getFromDataStore(store: string, path: string): any {
    console.log('load from store ' + path + ' ' + store);
    this.headers.append('Authorization', 'Basic ' + btoa('admin:district'));
    return Observable.create(observer => {
      this.http
        .get(`${this.serverUrl}/25/${store}/${path}`, { headers: this.headers })
        .map(res => res.json())
        .subscribe((data) => {
          observer.next(data);
          observer.complete();
        });
    });
  }

  updateInDataStore(store: string, path: string, value: string): any {
    console.log("AppService, Path: " + path +  " Value: " + value);
    this.headers.append('Authorization', 'Basic ' + btoa('admin:district'));
    return Observable.create(observer => {
      this.http
        .put(`${this.serverUrl}/25/${store}/${path}`, value, { headers: this.headers })
        .map(res => res.json())
        .subscribe((data) => {
          observer.next(data);
          observer.complete();
        });
    });
  }

    createNew(store: string, path: string, value: string): any {
      this.headers.append('Authorization', 'Basic ' + btoa('admin:district'));
      return Observable.create(observer => {
        this.http
          .post(`${this.serverUrl}/25/${store}/${path}`, value, { headers: this.headers })
          .map(res => res.json())
          .subscribe((data) => {
            observer.next(data);
            observer.complete();
          });
      });
    }

    createNewEncrypted(store: string, path: string, value: string): any {
      this.headers.append('Authorization', 'Basic ' + btoa('admin:district'));
      return Observable.create(observer => {
        this.http
          .post(`${this.serverUrl}/25/${store}/${path}?encrypt=true`, value, { headers: this.headers })
          .map(res => res.json())
          .subscribe((data) => {
            observer.next(data);
            observer.complete();
          });
      });
    }
}
