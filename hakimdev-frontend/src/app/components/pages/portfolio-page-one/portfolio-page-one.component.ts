

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../../services/auth.service';
import { ProjetService } from '../../../services/projet.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portfolio-page-one',
  templateUrl: './portfolio-page-one.component.html'
})
export class PortfolioPageOneComponent implements OnInit {
  projets: any[] = [];
  currentLang: any = {};
  isLoggedIn = false;
  pageSize = 6;
  currentPage = 1;


  get pagedProjets() {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.projets.slice(start, start + this.pageSize);
  }

  get totalPages(): number {
    return Math.max(1, Math.ceil(this.projets.length / this.pageSize));
  }

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }
  

  goToPage(p: number) {
    if (p < 1 || p > this.totalPages) return;
    this.currentPage = p;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  prevPage() { this.goToPage(this.currentPage - 1); }
  nextPage() { this.goToPage(this.currentPage + 1); }

  readonly texts = {
    en: {
      pageTitle: 'Projects',
      home: 'Home',
      defaultTitle: 'fauxtitle',
      defaultDescription: 'faux desc',
      detail: 'Detail',
      download: 'Download',
      seeMore: 'See more',
      seeLess: 'See less',
      noComments: 'No comments yet',
      writeComment: 'Write a comment...',
      send: 'Send',
      seeMoreComments: 'View more comments',
      seeLessComments: 'View less comments',
      loginToAct: 'Log in to like or comment.'
    },
    fr: {
      pageTitle: 'Projets',
      home: 'Accueil',
      defaultTitle: 'Illustrations',
      defaultDescription: 'Une illustration est une représentation visuelle...',
      detail: 'Détail',
      download: 'Télécharger',
      seeMore: 'Voir plus',
      seeLess: 'Voir moins',
      noComments: 'Pas encore de commentaires',
      writeComment: 'Écrire un commentaire...',
      send: 'Envoyer',
      seeMoreComments: 'Voir plus de commentaires',
      seeLessComments: 'Voir moins de commentaires',
      loginToAct: 'Connectez-vous pour aimer ou commenter.'
    },
    de: {
      pageTitle: 'Projekte',
      home: 'Startseite',
      defaultTitle: 'Illustrationen',
      defaultDescription: 'Eine Illustration ist eine visuelle Darstellung...',
      detail: 'Detail',
      download: 'Herunterladen',
      seeMore: 'Mehr sehen',
      seeLess: 'Weniger sehen',
      noComments: 'Noch keine Kommentare',
      writeComment: 'Einen Kommentar schreiben...',
      send: 'Senden',
      seeMoreComments: 'Mehr Kommentare anzeigen',
      seeLessComments: 'Weniger Kommentare anzeigen',
      loginToAct: 'Melden Sie sich an, um zu liken oder zu kommentieren.'
    },
    ar: {
      pageTitle: 'المشاريع',
      home: 'الرئيسية',
      defaultTitle: 'الرسوم التوضيحية',
      defaultDescription: 'الرسوم التوضيحية هي تمثيل بصري ...',
      detail: 'التفاصيل',
      download: 'تحميل',
      seeMore: 'عرض المزيد',
      seeLess: 'عرض أقل',
      noComments: 'لا توجد تعليقات بعد',
      writeComment: 'اكتب تعليقاً...',
      send: 'إرسال',
      seeMoreComments: 'عرض المزيد من التعليقات',
      seeLessComments: 'عرض عدد أقل من التعليقات',
      loginToAct: 'سجّل الدخول للإعجاب أو التعليق.'
    }
  } as const;

 
  constructor(private http: HttpClient, public authService: AuthService,  private projetService: ProjetService,private router: Router 
  )
  {
    const saved = localStorage.getItem('lang') || 'fr';
    this.switchLang(saved);
  }


  ngOnInit() {
    this.isLoggedIn = this.authService.isLoggedIn();

    if (this.isLoggedIn) {
      this.loadProjets();
    }
    const lang = localStorage.getItem('lang') || 'fr';
    this.switchLang(lang);
    const token = localStorage.getItem('token'); 
    if (!token) {
      alert('Vous devez vous connecter pour voir les projets.');
      return;
    }
    
    this.http.get<any[]>('http://localhost:8080/api/projets').subscribe(data => {
      const projetsMapped = data
        .map(a => {
          const d = a.datePublication ? new Date(a.datePublication) : new Date();
          return {
            ...a,
            day: d.getDate(),
            month: d.toLocaleString('default', { month: 'short' }),
            likeCount: 0,
            liked: false,
            showAllComments: false 
          };
        })
        .sort((a, b) => (new Date(b.datePublication).getTime() || 0) - (new Date(a.datePublication).getTime() || 0));
  
      this.projets = this.remapProjetsForLang(projetsMapped, lang);
      this.currentPage = 1;
  
      this.projets.forEach(p => this.loadComments(p.id));

    });
  }
  
  loadProjets(): void {
    this.http.get<any[]>('http://localhost:8080/api/projets').subscribe({
      next: (data) => this.projets = data,
      error: (err) => console.error('Erreur chargement projets', err)
    });
  }

getImageSrc(imagePath: string | null): string {
    console.log('imagePath reçu:', imagePath);
  
    if (!imagePath) {
      console.log('imagePath est vide → fallback default');
      return 'assets/images/projects/project4.jpg';
    }
  
    const final = imagePath.startsWith('assets/') ? imagePath : `assets/${imagePath}`;
    console.log('final src:', final);
    return final;
  }
  private remapProjetsForLang(list: any[], lang: string) {
    return list.map((p: any) => {  
      let title = '';
      let description = '';
  
      switch (lang) {
        case 'fr':
          title = p.titreFr ?? p.titre ?? p.titreEn ?? p.titreDe ?? p.titreAr ?? '';
          description = p.resumeFr ?? p.resume ?? p.resumeEn ?? p.resumeDe ?? p.resumeAr ?? '';
          break;
        case 'en':
          title = p.titreEn ?? p.titre ?? p.titreFr ?? p.titreDe ?? p.titreAr ?? '';
          description = p.resumeEn ?? p.resume ?? p.resumeFr ?? p.resumeDe ?? p.resumeAr ?? '';
          break;
        case 'de':
          title = p.titreDe ?? p.titre ?? p.titreFr ?? p.titreEn ?? p.titreAr ?? '';
          description = p.resumeDe ?? p.resume ?? p.resumeFr ?? p.resumeEn ?? p.resumeAr ?? '';
          break;
        case 'ar':
          title = p.titreAr ?? p.titre ?? p.titreFr ?? p.titreEn ?? p.titreDe ?? '';
          description = p.resumeAr ?? p.resume ?? p.resumeFr ?? p.resumeEn ?? p.resumeDe ?? '';
          break;
        default:
          title = p.titre ?? p.titreFr ?? p.titreEn ?? p.titreDe ?? p.titreAr ?? '';
          description = p.resume ?? p.resumeFr ?? p.resumeEn ?? p.resumeDe ?? p.resumeAr ?? '';
      }
  
      return {
        ...p,
        title,
        description,
        showAllComments: p.showAllComments ?? false  
      };
    });
  }
  
 
  comments: { [id: number]: any[] } = {};
  newComment: { [id: number]: string } = {};
  switchLang(language: string): void {
    const keys = ['en', 'fr', 'de', 'ar'] as const;
  
    const lang = (keys as readonly string[]).includes(language) ? language : 'fr';
  
    localStorage.setItem('lang', lang);
  
    this.currentLang = this.texts[lang as keyof typeof this.texts];
  
    if (this.projets && this.projets.length) {
      this.projets = this.remapProjetsForLang(this.projets, lang);
    }
  }
getDisplayedDescription(p: any): string {
  const desc = p?.description ?? '';
  if (!desc) return '';            
  if (p.showFull) return desc;     
  if (desc.length <= 100) return desc;
  const cut = desc.slice(0, 100);
  const lastSpace = cut.lastIndexOf(' ');
  return (lastSpace > 40 ? cut.slice(0, lastSpace) : cut) + '...';
}

toggleDescription(p: any) {
  p.showFull = !p.showFull;
}

addComment(id: number): void {
  if (!this.authService.isLoggedIn()) {
    alert('Veuillez vous connecter pour commenter.');
    return;
  }

  const content = this.newComment[id]?.trim();
  if (!content) return;

  this.projetService.addCommentaire(id, content).subscribe({
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

toggleLike(id: number): void {
  if (!this.authService.isLoggedIn()) {
    alert('Veuillez vous connecter pour aimer ce projet.');
    return;
  }

  this.projetService.toggleJaime(id).subscribe({
    next: (res: any) => {
      const projet = this.projets.find(p => p.id === id);
      if (projet) {
        projet.liked = !!res.liked;
        projet.likeCount = typeof res.likeCount === 'number' ? res.likeCount : projet.likeCount;
      }
    },
    error: (err) => {
      console.error('Erreur backend like:', err);
      if (err.status === 401) alert('Token invalide ou expiré. Veuillez vous reconnecter.');
    }
  });
}

download(p: any) {
  if (!p || !p.fileUrl) {
    alert('Fichier non disponible');
    return;
  }

  const url = p.fileUrl;
  if (url.includes('github.com') && !url.endsWith('.zip')) {
    const normalized = url.replace(/\/$/, '');

    const zipUrl = `${normalized}/archive/refs/heads/main.zip`;
    window.open(zipUrl, '_blank');
  } else {
    window.open(url, '_blank');
  }
}

loadComments(id: number): void {
  this.projetService.getCommentaires(id).subscribe((data: any[]) => {
    this.comments[id] = data || [];
  }, err => {
    console.error('Erreur loadComments', err);
    this.comments[id] = [];
  });
}
}