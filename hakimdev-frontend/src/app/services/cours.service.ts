 import { Injectable } from '@angular/core';
 import { HttpClient, HttpHeaders } from '@angular/common/http';
 import { Observable, throwError } from 'rxjs';
 import { environment } from '../../../src/environments/environments';

// @Injectable({
//   providedIn: 'root'
// })
// export class CoursService {
//   private baseUrl = `${environment.apiUrl}/api/cours`;

//   constructor(private http: HttpClient) { }

//   getCours(): Observable<any[]> {
//     return this.http.get<any[]>(this.baseUrl);
//   }

//   getCommentaires(id: number): Observable<any[]> {
//     return this.http.get<any[]>(`${this.baseUrl}/${id}/commentaires`);
//   }

//   toggleJaime(id: number): Observable<any> {
//     const token = localStorage.getItem('token');
//     if (!token) return throwError(() => new Error('Utilisateur non connecté'));

//     const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
//     return this.http.post<any>(`${this.baseUrl}/${id}/jaime`, {}, { headers });
//   }

//   addCommentaire(coursId: number, content: string): Observable<any> {
//     const token = localStorage.getItem('token');
//     const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });
//     return this.http.post(`${this.baseUrl}/${coursId}/commentaires`, { content }, { headers });
//   }
// }



@Injectable({ providedIn: 'root' })
export class CoursService {
  private baseUrl = `${environment.apiUrl}/cours`;

  constructor(private http: HttpClient) {}

  getCours(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  getCommentaires(id: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/${id}/commentaires`);
  }

  toggleJaime(id: number): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/${id}/jaime`, {});
  }

  addCommentaire(coursId: number, content: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/${coursId}/commentaires`, { content });
  }
}
