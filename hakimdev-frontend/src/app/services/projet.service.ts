
// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable, throwError } from 'rxjs';
// import { environment } from '../../environments/environments';

// @Injectable({
//   providedIn: 'root'
// })
// export class ProjetService {

//   private baseUrl = `${environment.apiUrl}/api/projets`;

//   constructor(private http: HttpClient) { }

//   getCommentaires(id: number): Observable<any[]> {
//     return this.http.get<any[]>(`${this.baseUrl}/${id}/commentaires`);
//   }

//   addCommentaire(id: number, contenu: string): Observable<any> {
//     const token = localStorage.getItem('token');
//     if (!token) return throwError(() => new Error('Utilisateur non connecté'));

//     const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
//     return this.http.post(`${this.baseUrl}/${id}/commentaires`, { contenu }, { headers });
//   }

//   toggleJaime(id: number): Observable<any> {
//     const token = localStorage.getItem('token');
//     if (!token) return throwError(() => new Error('Utilisateur non connecté'));

//     const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
//     return this.http.post(`${this.baseUrl}/${id}/jaime`, {}, { headers });
//   }
// }
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {
  private baseUrl = `${environment.apiUrl}/api/projets`;

  constructor(private http: HttpClient) { }
  

  getCommentaires(id: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/${id}/commentaires`);
  }

  addCommentaire(id: number, contenu: string): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = token ? new HttpHeaders().set('Authorization', `Bearer ${token}`) : undefined;
    return this.http.post<any>(`${this.baseUrl}/${id}/commentaires`, { contenu }, { headers });
  }

  toggleJaime(id: number): Observable<any> {
    const token = localStorage.getItem('token');
    if (!token) return throwError(() => new Error('Utilisateur non connecté'));
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post<any>(`${this.baseUrl}/${id}/jaime`, {}, { headers });
  }
}
