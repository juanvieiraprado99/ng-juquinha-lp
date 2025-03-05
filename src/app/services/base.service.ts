import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, take } from 'rxjs';

type body = 'ObjectJson' | 'FormData';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  private readonly httpClient = inject(HttpClient);

  private getHeaders(bodyType: body = 'ObjectJson') {
    switch (bodyType) {
      case 'ObjectJson':
        return new HttpHeaders({
          'Content-Type': 'application/json',
        });
      case 'FormData':
        return new HttpHeaders({});
    }
  }

  protected get<T>(endpoint: string): Observable<T> {
    return this.httpClient
      .get<T>(endpoint, {
        headers: this.getHeaders(),
      })
      .pipe(take(1));
  }

  protected post<T>(
    endpoint: string,
    body: unknown,
    bodyType: body = 'ObjectJson'
  ): Observable<T> {
    return this.httpClient
      .post<T>(endpoint, body, {
        headers: this.getHeaders(bodyType),
      })
      .pipe(take(1), map(this.extractData<T>));
  }

  protected patch<T>(
    endpoint: string,
    body: unknown,
    bodyType: body = 'ObjectJson'
  ): Observable<T> {
    return this.httpClient
      .patch<T>(endpoint, body, {
        headers: this.getHeaders(bodyType),
      })
      .pipe(take(1), map(this.extractData<T>));
  }

  protected put<T>(
    endpoint: string,
    body: unknown,
    bodyType: body = 'ObjectJson'
  ): Observable<T> {
    return this.httpClient
      .put<T>(endpoint, body, {
        headers: this.getHeaders(bodyType),
      })
      .pipe(take(1), map(this.extractData<T>));
  }

  protected delete<T>(endpoint: string): Observable<T> {
    return this.httpClient
      .delete<T>(endpoint, {
        headers: this.getHeaders(),
      })
      .pipe(take(1));
  }

  private extractData<T>(response: any): T {
    return response;
  }
}
