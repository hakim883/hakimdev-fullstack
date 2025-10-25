// services/blog.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Article {
  id: number;
  slug: string;
  title: string;
  dateDay: string;
  dateMonth: string;
  excerpt: string;
  img: string;
}

@Injectable({ providedIn: 'root' })
export class BlogService {
  private api = 'https://ton-backend.com/api/articles'; // adapte
  constructor(private http: HttpClient) {}
  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.api);
  }
}