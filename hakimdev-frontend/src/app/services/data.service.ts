import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  getProjets(): Observable<any> {
    return this.http.get(`${this.apiUrl}/projets`);
  }

  getArticles(): Observable<any> {
    return this.http.get(`${this.apiUrl}/articles`);
  }

  getCours(): Observable<any> {
    return this.http.get(`${this.apiUrl}/cours`);
  }
}