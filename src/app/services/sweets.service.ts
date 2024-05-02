import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SweetsService {

  constructor(private apiService: ApiService) { }

  getJellyBeans = (url: string, params: any): Observable<any> => {
    return this.apiService.get(url, params);
  }
}
