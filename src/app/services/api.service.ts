import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IOptions } from '../../interfaces/http';

@Injectable({
  providedIn: 'root'
})

/* 
  ApiServices provides with a layer of abstraction
  so that can have our own methods to request data
*/
export class ApiService {

  // We need a provider for ApiService for the dependency injection in appConfig
  constructor(private httpClient: HttpClient) {}

  get<T>(url: string, options: IOptions): Observable<T> {
    return this.httpClient.get<T>(url, options) as Observable<T>;
  }
}
