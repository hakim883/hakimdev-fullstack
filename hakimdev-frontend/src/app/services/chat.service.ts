import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../environments/environments';

@Injectable({ providedIn: 'root' })
export class ChatService {
  private apiUrl = `${environment.apiUrl}/api/chat`; // ✅ déclaré
  private messagesSubject = new Subject<any>();
  messages$ = this.messagesSubject.asObservable();

  constructor(private http: HttpClient) {} // ✅ http bien injecté

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/users`);
  }

  sendMessage(sender: string, content: string) {
    this.messagesSubject.next({ sender, content });
  }
}
