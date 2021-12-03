import { Injectable } from '@angular/core';

import { Company } from '../models/company';
import { Image } from '../models/image';
import { User } from '../models/user';

import { HttpClient, HttpHeaders, HttpErrorResponse, HttpRequest, HttpParams } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable , throwError } from 'rxjs';
import { Login } from '../models/login';


@Injectable({
  providedIn: 'root'
})
export class RestService {

  REST_API: string = 'http://145.24.222.51:8011/api';

  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) { }

  ValidateLogin(login: Login): Observable<any> {
    const headers = {'content-type': 'application/json'};
    const body = JSON.stringify(login);
    return this.httpClient.post(`${this.REST_API}/validate`, body, {'headers':headers});
  }

  GetCompanies() {
    return this.httpClient.get(`${this.REST_API}/companies`);
  }

  GetTemplates(companyId:string) {
    return this.httpClient.get(`${this.REST_API}/templates/${companyId}`);
  }

  AddCompany(company: Company): Observable<any> {
    const headers = {'content-type': 'application/json'};
    const body = JSON.stringify(company);
    console.log(body);
    return this.httpClient.post(`${this.REST_API}/company`, body, {'headers':headers})
  }

  getUser(accName:String): Observable<any> {
    return this.httpClient.get(`${this.REST_API}/user/${accName}`, {observe: 'response'}).pipe(map(data => {
        console.log("Response code: " + data.status)
        return data.status;
    }));
  }

  AddImage(image:Image): Observable<any> {
    const headers = {'content-type': 'application/json'};
    const body = JSON.stringify(image);
    console.log(body);
    return this.httpClient.post(`${this.REST_API}/image`, body, {'headers':headers})
  }

  GetImages(): Observable<any> {
    return this.httpClient.get(`${this.REST_API}/images`);
  }

  AddUser(user:User): Observable<any> {
    const headers = {'content-type': 'application/json'};
    const body = JSON.stringify(user);
    console.log(body);
    return this.httpClient.post(`${this.REST_API}/user`, body, {'headers':headers})
  }

  UploadFile(file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    const req = new HttpRequest('POST', `${this.REST_API}/upload-file`, formData, {
      responseType: 'json'
    });
    return this.httpClient.request(req);
  }

  SendMail(): Observable<any> {
    return this.httpClient.get(`${this.REST_API}/sendmail`)
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
