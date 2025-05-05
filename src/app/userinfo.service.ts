import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http'
import { userinfo } from './userinfo';
import { Observable, throwError } from 'rxjs';
import {retry,catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserinfoService {

  // public userInfoDb: any[] = [];


  localurl='http://localhost:3000/user';
  constructor(private http:HttpClient) { }
  httpOptions={
    headers:new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

    getUser():Observable<userinfo>
    {
      return this.http.get<userinfo>(this.localurl).pipe(retry(1), catchError(this.errorhand))
    }
    
    addUser(tempuser:userinfo):Observable<userinfo>
    {
      return this.http.post<userinfo>(this.localurl,JSON.stringify(tempuser));
      ;
    }

    errorhand(error)
    {
      return throwError(error);
    }



    // addHotel(hotel: Hotel): Observable<Hotel>{
    //   return this.httpClient.post<Hotel>(this.hotelsRemoteUrl, JSON.stringify(hotel), this.options);
    // }
    // delHotel(hotelId:string): Observable<Hotel>{
    //   return this.httpClient.delete<Hotel>(this.hotelsRemoteUrl+"/"+hotelId.toString()).pipe(catchError(error =>of(null)));
    // }
    // updateHotel(hotelId:string,hotel:Hotel): Observable<Hotel>{
    //   return this.httpClient.put<Hotel>(this.hotelsRemoteUrl+"/"+hotelId.toString(), JSON.stringify(hotel),this.options).pipe(catchError(error => of(null)));
    // }
    // addRoom(room:Room): Observable<Room>{
    //   return this.httpClient.post<Room>(this.roomsRemoteUrl, JSON.stringify(room), this.options);
    // }
    // delRoom(roomId:string): Observable<Room>{
    //   return this.httpClient.delete<Room>(this.roomsRemoteUrl+"/"+roomId.toString()).pipe(catchError(error => of(null)));
    // }
    // updateRoom(roomId:string,room:Room):Observable<Room>{
    //   return this.httpClient.put<Room>(this.roomsRemoteUrl+"/"+roomId.toString(), JSON.stringify(room),this.options).pipe(catchError(error => of(null)));
    // }

}


