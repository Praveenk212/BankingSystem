import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { account } from './account';
import { Observable, throwError } from 'rxjs';
import {retry,catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

 
  localurl='http://localhost:3000/account';

  constructor(private http:HttpClient) { }
  httpOptions={
    headers:new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

    getaccount():Observable<account>
    {
      return this.http.get<account>(this.localurl).pipe(retry(1), catchError(this.errorhand))
    }
    errorhand(error)
    {
      return throwError(error);
    }
}
