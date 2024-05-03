import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { IPaginationParams } from '../../interfaces/http';
import { IJellyBeansList } from '../../interfaces/sweets';

@Injectable({
  providedIn: 'root'
})
export class SweetsService {

  constructor(private apiService: ApiService) { }

  // Observable is a promise/async from RxJS
  getJellyBeans = (url: string, params: IPaginationParams): Observable<IJellyBeansList> => {
    return this.apiService.get(url, {
      params,
      responseType: 'json',
    });
  }
}
