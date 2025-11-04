
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';
import { BlogService } from 'src/app/services/blog.service';
@Component({
  selector: 'app-blog-grid-page',
  templateUrl: './blog-grid-page.component.html',
  styleUrls: ['./blog-grid-page.component.scss']
})
export class BlogGridPageComponent implements OnInit {
  articles: any[] = [];
  currentLang: any = {};
  isLoggedIn = false;

  pageSize = 6;
  currentPage = 1;

  get pagedArticles() {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.articles.slice(start, start + this.pageSize);
  }

  get totalPages(): number {
    return Math.max(1, Math.ceil(this.articles.length / this.pageSize));
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
      pageTitle: 'Blog',
      home: 'Home',
      readMore: 'Read More',
      defaultTitle: 'Untitled',
      defaultExcerpt: 'No excerpt available',
      by: 'By',
      on: 'on'
    },
    fr: {
      pageTitle: 'Blog',
      home: 'Accueil',
      readMore: 'Lire la suite',
      defaultTitle: 'Sans titre',
      defaultExcerpt: 'Aucun résumé',
      by: 'Par',
      on: 'le'
    },
    de: {
      pageTitle: 'Blog',
      home: 'Startseite',
      readMore: 'Weiterlesen',
      defaultTitle: 'Ohne Titel',
      defaultExcerpt: 'Keine Kurzfassung',
      by: 'Von',
      on: 'am'
    },
    ar: {
      pageTitle: 'المدونة',
      home: 'الرئيسية',
      readMore: 'اقرأ المزيد',
      defaultTitle: 'بدون عنوان',
      defaultExcerpt: 'لا يوجد ملخص',
      by: 'بواسطة',
      on: 'في'
    }
  } as const;

  readonly staticArticles = [
    {
      img: 'assets/images/blog/blog4.jpg',
      day: 15,
      month: 'Feb',
      title: 'How to use marketing automation tools effectively',
      excerpt: 'Learn how to leverage automation to grow your business.'
    },
    {
      img: 'assets/images/blog/blog5.jpg',
      day: 14,
      month: 'Feb',
      title: '4 great examples of user-generated content',
      excerpt: 'Discover inspiring UGC campaigns that drove engagement.'
    },
    {
      img: 'assets/images/blog/blog6.jpg',
      day: 13,
      month: 'Feb',
      title: '4 key content marketing trends for 2024',
      excerpt: 'Stay ahead with the latest trends in content marketing.'
    },
    {
      img: 'assets/images/blog/blog7.jpg',
      day: 12,
      month: 'Feb',
      title: '7 tips on getting to know your customers better',
      excerpt: 'Build deeper connections with your audience.'
    },
    {
      img: 'assets/images/blog/blog8.jpg',
      day: 11,
      month: 'Feb',
      title: 'How and why you should use Google Ads for video',
      excerpt: 'Maximize reach with YouTube advertising.'
    },
    {
      img: 'assets/images/blog/blog9.jpg',
      day: 10,
      month: 'Feb',
      title: 'How to use images in your Digital Marketing',
      excerpt: 'Boost engagement with compelling visuals.'
    }
  ];

  constructor(private http: HttpClient, private authService: AuthService,  private blogService: BlogService) {}
  ngOnInit() {
    const saved = localStorage.getItem('lang') || 'fr';
    this.switchLang(saved);
    this.isLoggedIn = this.authService.isLoggedIn();
    if (this.isLoggedIn) {
      this.loadArticles();
    }
    this.http.get<any[]>('http://localhost:8080/api/articles').subscribe(data => {
      const raw = data.map(a => {
        const d = a.datePublication ? new Date(a.datePublication) : new Date();
        return {
          ...a,
          day: d.getDate(),
          month: d.toLocaleString('default', { month: 'short' }),
          showFull: false
        };
      }).sort((a, b) => {
        const ta = a.datePublication ? new Date(a.datePublication).getTime() : 0;
        const tb = b.datePublication ? new Date(b.datePublication).getTime() : 0;
        return tb - ta;
      });
  
      this.articles = this.remapArticlesForLang(raw, localStorage.getItem('lang') || 'fr');
      this.currentPage = 1;
    });
  }
  
  private remapArticlesForLang(list: any[], lang: string) {
    return list.map(a => {
      let title = '';
      let description = '';
  
      switch (lang) {
        case 'fr':
          title = a.titreFr ?? a.titre ?? a.titreEn ?? a.titreDe ?? a.titreAr ?? '';
          description = a.resumeFr ?? a.resume ?? a.resumeEn ?? a.resumeDe ?? a.resumeAr ?? '';
          break;
        case 'en':
          title = a.titreEn ?? a.titre ?? a.titreFr ?? a.titreDe ?? a.titreAr ?? '';
          description = a.resumeEn ?? a.resume ?? a.resumeFr ?? a.resumeDe ?? a.resumeAr ?? '';
          break;
        case 'de':
          title = a.titreDe ?? a.titre ?? a.titreFr ?? a.titreEn ?? a.titreAr ?? '';
          description = a.resumeDe ?? a.resume ?? a.resumeFr ?? a.resumeEn ?? a.resumeAr ?? '';
          break;
        case 'ar':
          title = a.titreAr ?? a.titre ?? a.titreFr ?? a.titreEn ?? a.titreDe ?? '';
          description = a.resumeAr ?? a.resume ?? a.resumeFr ?? a.resumeEn ?? a.resumeDe ?? '';
          break;
        default:
          title = a.titre ?? a.titreFr ?? a.titreEn ?? a.titreDe ?? a.titreAr ?? '';
          description = a.resume ?? a.resumeFr ?? a.resumeEn ?? a.resumeDe ?? a.resumeAr ?? '';
      }
  
      return { ...a, title, description };
    });
  }

  getImageSrc(imagePath: string | null): string {
    if (!imagePath) {
       return 'assets/images/blog/blog1.jpg';
     }
     return imagePath.startsWith('assets/') ? imagePath : `assets/${imagePath}`;
   }
  switchLang(language: string): void {
    const keys = ['en', 'fr', 'de', 'ar'] as const;
    const lang = keys.includes(language as any) ? language : 'fr';
    localStorage.setItem('lang', lang);
    this.currentLang = this.texts[lang as keyof typeof this.texts];
  
    if (this.articles?.length) {
      this.articles = this.remapArticlesForLang(this.articles, lang);
    }
    
  }
  loadArticles(): void {
    this.blogService.getArticles().subscribe({
      next: (data: any[]) => {
        console.log("✅ Projets chargés :", data);
  
        const lang = localStorage.getItem('lang') || 'fr';
        this.articles = this.remapArticlesForLang(data, lang);
  
        this.articles.sort((a, b) => {
          const ta = a.datePublication ? new Date(a.datePublication).getTime() : 0;
          const tb = b.datePublication ? new Date(b.datePublication).getTime() : 0;
          return tb - ta;
        });
  
        this.currentPage = 1;
      },
      error: (err) => {
        console.error("❌ Erreur lors du chargement des Projets :", err);
      }
    });
}
 }
