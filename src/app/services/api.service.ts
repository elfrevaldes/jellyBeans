import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { IJellyBean } from '../../interfaces/sweets';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) {}
  readonly urlBase = "https://tmc37y6fub.execute-api.us-east-2.amazonaws.com/beans";
  // Method to retrieve a single jelly bean by its ID
  getJellyBeanById(id: string): Observable<IJellyBean> {
    const url = `${this.urlBase}/${id}`;
    return this.httpClient.get<any>(url);
  }

  // Method to retrieve all jelly beans
  getAllJellyBeans(): Observable<IJellyBean[]> {
    const url = this.urlBase;
    return this.httpClient.get<any[]>(url);
  }

  // Method to add or update a jelly bean
  saveJellyBean(jellyBean: IJellyBean): Observable<IJellyBean> {
    const url = this.urlBase;
    return this.httpClient.put<any>(url, jellyBean);
  }

  // Method to delete a jelly bean by its ID
  deleteJellyBeanById(id: string): Observable<IJellyBean> {
    const url = `${this.urlBase}/${id}`;
    return this.httpClient.delete<any>(url);
  }

  // Method to retrieve all jelly beans that are featured
  getFeaturedJellyBeans(): Observable<IJellyBean[]> {
    const url = this.urlBase;
    return this.httpClient.get<any[]>(url).pipe(
      map(jellyBeans => jellyBeans.filter(jellyBean => jellyBean.isFeatured)),
      catchError((error) => {
        console.error('Error fetching jelly beans:', error);
        return of([]); // Return an empty array in case of error
      })
    );
  }
}
