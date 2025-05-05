import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {retry,catchError} from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { transaction } from './transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

 
  localurl='http://localhost:3000/transfer';
  constructor(private http:HttpClient) { }
  httpOptions={
    headers:new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

    getTransaction():Observable<transaction>
    {
      return this.http.get<transaction>(this.localurl).pipe(retry(1), catchError(this.errorhand))
    }
    errorhand(error)
    {
      return throwError(error);
    }
}
