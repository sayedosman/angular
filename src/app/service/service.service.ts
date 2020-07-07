import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Data } from '../model/data';
import { History } from '../model/history';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SeviceService {

  constructor(public httpClient: HttpClient) {
  }
  getNumbervierfy(number:string):Observable<Data>{
    const params = new HttpParams()
    .set('access_key', '4dc29a46ae56b0ba05f5a4bf3eb21974')
    .set('number', number);
   
    
    return this.httpClient.post<Data>('http://localhost:8080/getData', params);
  }
  getAllHistory():Observable<Array<History>>{
    return this.httpClient.get<Array<History>>("http://localhost:8080/getAllHistory");
  }
  register(number:string,confirm:boolean){
    let params2 ;
    if(confirm){
     params2 = new HttpParams()
    .set('number', number)
    .set('confirm', 'valied');}
    else{
       params2 = new HttpParams()
      .set('number', number)
      .set('confirm', 'not valied');
    }
return this.httpClient.post('http://localhost:8080/register' ,params2 );
  }
}
