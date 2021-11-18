import { Injectable } from '@angular/core';

import { Company } from '../models/company';
import { Image } from '../models/image';
import { User } from '../models/user';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable , throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RestService {

  REST_API: string = 'http://145.24.222.51:8011/api';

  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) { }

  GetCompanies() {
    return this.httpClient.get(`${this.REST_API}/companies`);
  }

  AddCompany(company: Company): Observable<any> {
    const headers = {'content-type': 'application/json'};
    const body = JSON.stringify(company);
    console.log(body);
    return this.httpClient.post(`${this.REST_API}/company`, body, {'headers':headers})
  }

  getUser(accName:String) {
    return this.httpClient.get(`${this.REST_API}/user/${accName}`);
  }

  AddImage(image:Image): Observable<any> {
    const headers = {'content-type': 'application/json'};
    const body = JSON.stringify(image);
    console.log(body);
    return this.httpClient.post(`${this.REST_API}/image`, body, {'headers':headers})
  }

  AddUser(user:User): Observable<any> {
    const headers = {'content-type': 'application/json'};
    const body = JSON.stringify(user);
    console.log(body);
    return this.httpClient.post(`${this.REST_API}/user`, body, {'headers':headers})
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) 
    {
      errorMessage = error.error.message;
    } 
    else 
    {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
