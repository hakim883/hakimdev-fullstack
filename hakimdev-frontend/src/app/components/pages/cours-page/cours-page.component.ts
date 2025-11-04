
import {  HttpHeaders } from '@angular/common/http';

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../../services/auth.service';
import { CoursService } from 'src/app/services/cours.service';
@Component({
  selector: 'app-cours-page',
  templateUrl: './cours-page.component.html',
  styleUrls: ['./cours-page.component.scss']
})
export class CoursPageComponent implements OnInit {
  isLoggedIn = false;
  comments: { [id: number]: any[] } = {}; 
newComment: { [id: number]: string } = {}; 

  cours: any[] = [];      
  
  pageSize = 3;          
  currentPage = 1;


  currentLang: any = {};
  readonly texts = {
    en: { pageTitle: 'Courses', home: 'Home', download: 'Download', readMore: 'Read more', reduce: 'Show less', loginRequired: 'Please log in to download the course.' },
    fr: { pageTitle: 'Cours', home: 'Accueil', download: 'Télécharger', readMore: 'Lire la suite', reduce: 'Réduire', loginRequired: 'Veuillez vous connecter pour télécharger le cours.' },
    de: { pageTitle: 'Kurse', home: 'Startseite', download: 'Herunterladen', readMore: 'Weiterlesen', reduce: 'Weniger anzeigen', loginRequired: 'Bitte melden Sie sich an, um den Kurs herunterzuladen.' },
    ar: { pageTitle: 'الدورات', home: 'الرئيسية', download: 'تحميل', readMore: 'اقرأ المزيد', reduce: 'إظهار أقل', loginRequired: 'يرجى تسجيل الدخول لتحميل الدورة.' },
    es: { pageTitle: 'Cursos', home: 'Inicio', download: 'Descargar', readMore: 'Leer más', reduce: 'Ver menos', loginRequired: 'Por favor inicie sesión para descargar el curso.' }
  } as const;

  constructor(private http: HttpClient, private authService: AuthService,  private coursService: CoursService  
  ) {}

  ngOnInit() {
    const lang = localStorage.getItem('lang') || 'fr';
    this.switchLang(lang, true); 
   
    
      this.isLoggedIn = this.authService.isLoggedIn();
    
      if (this.isLoggedIn) {
        this.loadCours();
      }
    
    this.http.get<any[]>('http://localhost:8080/api/cours').subscribe({
      next: (data: any[]) => {
        console.log('GET /api/cours response raw:', data);
        console.log('Cours ids (raw):', data.map(d => d.id));
    
        const raw = data
          .map(c => {
            const d = c.datePublication ? new Date(c.datePublication) : new Date();
            return {
              ...c,
              id: c.id,
              day: d.getDate(),
              month: d.toLocaleString('default', { month: 'short' }),
              showFull: false
            };
          })
          .sort((a, b) => {
            const ta = a.datePublication ? new Date(a.datePublication).getTime() : 0;
            const tb = b.datePublication ? new Date(b.datePublication).getTime() : 0;
            return tb - ta;
          });
    
        const lang = localStorage.getItem('lang') || 'fr';
        this.cours = this.remapForLang(raw, lang);
        this.currentPage = 1;
      },
      error: err => console.error('Erreur chargement cours', err)
    });
    
  }

  get pagedCours() {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.cours.slice(start, start + this.pageSize);
  }

  get totalPages(): number {
    return Math.max(1, Math.ceil(this.cours.length / this.pageSize));
  }

  goToPage(p: number) {
    if (p < 1 || p > this.totalPages) return;
    this.currentPage = p;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  prevPage() { this.goToPage(this.currentPage - 1); }
  nextPage() { this.goToPage(this.currentPage + 1); }

  private remapForLang(list: any[], lang: string) {
    return list.map(c => {
      let title = '';
      let desc = '';

      switch (lang) {
        case 'fr':
          title = c.titreFr ?? c.titre ?? c.titreEn ?? c.titreDe ?? c.titreAr ?? '';
          desc  = c.descriptionFr ?? c.description ?? c.descriptionEn ?? c.descriptionDe ?? c.descriptionAr ?? '';
          break;
        case 'en':
          title = c.titreEn ?? c.titre ?? c.titreFr ?? c.titreDe ?? c.titreAr ?? '';
          desc  = c.descriptionEn ?? c.description ?? c.descriptionFr ?? c.descriptionDe ?? c.descriptionAr ?? '';
          break;
        case 'de':
          title = c.titreDe ?? c.titre ?? c.titreFr ?? c.titreEn ?? c.titreAr ?? '';
          desc  = c.descriptionDe ?? c.description ?? c.descriptionFr ?? c.descriptionEn ?? c.descriptionAr ?? '';
          break;
        case 'ar':
          title = c.titreAr ?? c.titre ?? c.titreFr ?? c.titreEn ?? c.titreDe ?? '';
          desc  = c.descriptionAr ?? c.description ?? c.descriptionFr ?? c.descriptionEn ?? c.descriptionDe ?? '';
          break;
        case 'es':
          title = c.titreEn ?? c.titreFr ?? c.titre ?? '';
          desc  = c.descriptionEn ?? c.descriptionFr ?? c.description ?? '';
          break;
        default:
          title = c.titre ?? c.titreFr ?? c.titreEn ?? '';
          desc  = c.description ?? c.descriptionFr ?? c.descriptionEn ?? '';
      }

      return {
        
        ...c,
        title,
        description: desc
      };
    });
  }

  switchLang(language: string, remapOnly = false): void {
    const keys = ['en', 'fr', 'de', 'ar', 'es'] as const;
    const lang = keys.includes(language as any) ? language : 'fr';
    if (!remapOnly) localStorage.setItem('lang', lang);
    this.currentLang = this.texts[lang as keyof typeof this.texts];

    if (this.cours?.length) {

      this.cours = this.remapForLang(this.cours, lang);
      this.currentPage = Math.min(this.currentPage, this.totalPages);
    }
  }

  getImageSrc(imagePath: string | null): string {
    if (!imagePath) return 'assets/images/cour2.jpeg';
    return imagePath.startsWith('assets/') ? imagePath : `assets/${imagePath}`;
  }

  getFileSrc(filePath: string | null): string {
    if (!filePath) return '';
    return filePath.startsWith('assets/') ? filePath : `assets/${filePath}`;
  }

  getVideoSrc(videoPath: string | null): string {
    if (!videoPath) return '';
    return videoPath.startsWith('assets/') ? videoPath : `assets/${videoPath}`;
  }

  download(id: number): void {
    const token = this.authService.getToken();
    if (!token) {
      alert(this.currentLang.loginRequired);
      return;
    }
    window.open(`http://localhost:8080/api/cours/${id}/download`, '_blank');
  }

  loadCours(): void {
    this.coursService.getCours().subscribe({
      next: (data: any[]) => {
        console.log("✅ Cours chargés :", data);
  
        const lang = localStorage.getItem('lang') || 'fr';
        this.cours = this.remapForLang(data, lang);
  
        this.cours.sort((a, b) => {
          const ta = a.datePublication ? new Date(a.datePublication).getTime() : 0;
          const tb = b.datePublication ? new Date(b.datePublication).getTime() : 0;
          return tb - ta;
        });
  
        this.currentPage = 1;
      },
      error: (err) => {
        console.error("❌ Erreur lors du chargement des cours :", err);
      }
    });
  }
  


  likeCour(coursId: number) {
    if (!coursId) {
      console.error("❌ coursId est undefined !");
      return;
    }
  
    const token = this.authService.getToken();
    if (!token) {
      alert("Vous devez être connecté pour liker ce cours !");
      return;
    }
  
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
  
    this.http.post(`http://localhost:8080/api/cours/${coursId}/like`, {}, { headers })
      .subscribe({
        next: (res) => console.log("✅ Like OK", res),
        error: (err) => console.error("❌ Erreur likeCour", err)
      });
  }
  
  
  
  addComment(id: number): void {
    if (!this.authService.isLoggedIn()) {
      alert('Veuillez vous connecter pour commenter.');
      return;
    }
  
    const content = this.newComment[id]?.trim();
    if (!content) return;
  
    this.coursService.addCommentaire(id, content).subscribe({
      next: (newComment: any) => {
        if (!this.comments[id]) this.comments[id] = [];
        if (!this.comments[id].some((c: any) => c.id === newComment.id)) {
          this.comments[id].unshift(newComment);
        }
        this.newComment[id] = '';
      },
      error: (err) => {
        console.error('Erreur ajout commentaire', err);
        alert('Erreur lors de l\'ajout du commentaire.');
      }
    });
  }
  
  
  
  trackById(index: number, item: any) {
    return item?.id ?? index;
  }
  
  loadComments(courId: number) {
    this.http.get<any[]>(`http://localhost:8080/api/cours/${courId}/comments`).subscribe(data => {
      console.log(data); 
    });
  }
  
  loadLikes(courId: number) {
    this.http.get<any[]>(`http://localhost:8080/api/cours/${courId}/likes`).subscribe(data => {
      console.log(data.length); 
    });
  }
  
  toggleLike(id: number): void {
    if (!this.authService.isLoggedIn()) {
      alert('Veuillez vous connecter pour aimer ce cours.');
      return;
    }
  
    this.coursService.toggleJaime(id).subscribe({
      next: (res: any) => {
        const cours = this.cours.find(c => c.id === id);
        if (cours) {
          cours.liked = !!res.liked;
          cours.likeCount = typeof res.likeCount === 'number' ? res.likeCount : cours.likeCount;
        }
      },
      error: (err) => {
        console.error('Erreur backend like:', err);
        if (err.status === 401) alert('Token invalide ou expiré. Veuillez vous reconnecter.');
      }
    });
  }
  

























  

}
