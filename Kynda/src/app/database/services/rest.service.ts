import { Injectable } from '@angular/core';

import { Company } from '../models/company';
import { Image } from '../models/image';
import { User } from '../models/user';

import { HttpClient, HttpHeaders, HttpErrorResponse, HttpRequest, HttpParams } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable , throwError } from 'rxjs';
import { Login } from '../models/login';
import { Template } from '../models/template';
import { TemplateStatus } from '../models/templateStatus';


@Injectable({
  providedIn: 'root'
})
/**
 * deze class heeft alle database services
 */
export class RestService {

  //de URL naar de api
  REST_API: string = 'http://145.24.222.51:8011/api';

  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) { }

  /**
   * 
   * @param login de login creds van een gebruiker
   * @returns of de login een succes was of niet
   */
  ValidateLogin(login: Login): Observable<any> {
    const headers = {'content-type': 'application/json'};
    const body = JSON.stringify(login);
    return this.httpClient.post(`${this.REST_API}/validate`, body, {'headers':headers});
  }

  /**
   * 
   * @returns alle companies
   */
  GetCompanies() {
    return this.httpClient.get(`${this.REST_API}/companies`);
  }

  /**
   * 
   * @param companyId het Id van het bedrijf
   * @returns alle bedrijven met het gegeven Id
   */
  GetCompanyById(companyId: number) {
      return this.httpClient.get(`${this.REST_API}/company/${companyId}`);
  }

  /**
   * 
   * @param companyId het Id van het bedrijf
   * @returns alle templates die bij het bedrijf horen
   */
  GetTemplates(companyId:string) {
    return this.httpClient.get(`${this.REST_API}/templates/${companyId}`);
  }

  /**
   * 
   * @param company alle gegevens van een bedrijf
   * @returns een post request
   */
  AddCompany(company: Company): Observable<any> {
    const headers = {'content-type': 'application/json'};
    const body = JSON.stringify(company);
    console.log(body);
    return this.httpClient.post(`${this.REST_API}/company`, body, {'headers':headers})
  }

  /**
   * 
   * @param accName de naam van het account
   * @returns de gebruiker
   */
  GetUser(accName:String) {
    return this.httpClient.get(`${this.REST_API}/user/${accName}`);
  }

  /**
   * 
   * @param accName de naam van het account
   * @returns de gebruiker en logged iets in de console
   */
  getUser(accName:String): Observable<any> {
    return this.httpClient.get(`${this.REST_API}/user/${accName}`, {observe: 'response'}).pipe(map(data => {
        console.log("Response code: " + data.status)
        return data;
    }));
  }

  /**
   * 
   * @param companyName de naam van een bedrijf
   * @returns het bedrijf
   */
  getCompany(companyName:string) {
    return this.httpClient.get(`${this.REST_API}/companyid/${companyName}`);
  }

  /**
   * 
   * @param image een afbeelding
   * @returns een post request voor de afbeelding
   */
  AddImage(image:Image): Observable<any> {
    const headers = {'content-type': 'application/json'};
    const body = JSON.stringify(image);
    console.log(body);
    return this.httpClient.post(`${this.REST_API}/image`, body, {'headers':headers})
  }

  /**
   * 
   * @returns alle afbeeldingen
   */
  GetImages(): Observable<any> {
    return this.httpClient.get(`${this.REST_API}/images`);
  }

  /**
   * 
   * @param user alle gegevens voor een gebruiker
   * @returns een post request voor een gebuiker
   */
  AddUser(user:User): Observable<any> {
    const headers = {'content-type': 'application/json'};
    const body = JSON.stringify(user);
    console.log(body);
    return this.httpClient.post(`${this.REST_API}/user`, body, {'headers':headers})
  }

  /**
   * 
   * @param file het bestand dat je wilt uploaden
   * @returns een post request voor het bestand
   */
  UploadFile(file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    const req = new HttpRequest('POST', `${this.REST_API}/upload-file`, formData, {
      responseType: 'json'
    });
    return this.httpClient.request(req);
  }

  /**
   * 
   * @param file het template dat je wilt uploaden
   * @returns een post request voor het template
   */
  UploadTemplate(file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    const req = new HttpRequest('POST', `${this.REST_API}/upload-template`, formData, {
      responseType: 'json'
    });
    return this.httpClient.request(req);
  }

  /**
   * 
   * @param template het template
   * @returns een post request voor het template
   */
  UploadTemplateData(template: Template): Observable<any> {
    const headers = {'content-type': 'application/json'};
    const body = JSON.stringify(template);
    console.log(body);
    return this.httpClient.post(`${this.REST_API}/template-data`, body, {'headers':headers})
  }

  UpdateTemplateStatus(templateStatus: TemplateStatus): Observable<any> {
    const headers = {'content-type': 'application/json'};
    const body = JSON.stringify(templateStatus);
    console.log(body);
    return this.httpClient.post(`${this.REST_API}/update`, body, {'headers': headers})
  }

  GetFileList() {
    return this.httpClient.get(`${this.REST_API}/file-list`)
  }

  DeleteImage(filename:String) {
    return this.httpClient.get(`${this.REST_API}/delete-image/${filename}`)
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
