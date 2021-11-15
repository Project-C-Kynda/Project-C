import { Injectable } from '@angular/core';
import { Company } from '../models/company';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable , throwError } from 'rxjs';
import { Image } from '../models/image';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  REST_API: string = 'http://145.24.222.51:8011/api';

  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) { }

  GetCompanies() {
    return this.httpClient.get(`${this.REST_API}`);
  }

  AddImage(image:Image): Observable<any> {
    const headers = {'content-type': 'application/json'};
    const body = JSON.stringify(image);
    console.log(body);
    return this.httpClient.post(`${this.REST_API}/image`, body, {'headers':headers})
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
