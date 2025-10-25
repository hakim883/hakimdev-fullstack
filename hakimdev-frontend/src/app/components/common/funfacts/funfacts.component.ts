
// import { Component } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-funfacts',
//   templateUrl: './funfacts.component.html',
//   styleUrls: ['./funfacts.component.scss']
// })
// export class FunfactsComponent {
//   constructor(public router: Router) {}
// }
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-funfacts',
  templateUrl: './funfacts.component.html',
  styleUrls: ['./funfacts.component.scss']
})
export class FunfactsComponent {
  currentLang: any = {};

  readonly texts = {
    en: {
      projectsCount: '1500+',
      projectsLabel: 'Completed Projects',
      clientsCount: '700+',
      clientsLabel: 'Happy Clients',
      reviewsCount: '1275+',
      reviewsLabel: 'Positive Reviews',
      awardsCount: '250+',
      awardsLabel: 'Awards Won'
    },
    fr: {
      projectsCount: '1500+',
      projectsLabel: 'Projets achevés',
      clientsCount: '700+',
      clientsLabel: 'Clients satisfaits',
      reviewsCount: '1275+',
      reviewsLabel: 'Avis positifs',
      awardsCount: '250+',
      awardsLabel: 'Récompenses'
    },
    de: {
      projectsCount: '1500+',
      projectsLabel: 'Abgeschlossene Projekte',
      clientsCount: '700+',
      clientsLabel: 'Zufriedene Kunden',
      reviewsCount: '1275+',
      reviewsLabel: 'Positive Bewertungen',
      awardsCount: '250+',
      awardsLabel: 'Auszeichnungen'
    },
    ar: {
      projectsCount: '1500+',
      projectsLabel: 'مشروع مكتمل',
      clientsCount: '700+',
      clientsLabel: 'عميل سعيد',
      reviewsCount: '1275+',
      reviewsLabel: 'تقييم إيجابي',
      awardsCount: '250+',
      awardsLabel: 'جوائز فازت'
    }
  } as const;

  constructor(public router: Router) {
    const saved = localStorage.getItem('lang') || 'fr';
    this.switchLang(saved);
  }

  switchLang(language: string): void {
    const keys = ['en', 'fr', 'de', 'ar'] as const;
    if (keys.includes(language as any)) {
      this.currentLang = this.texts[language as keyof typeof this.texts];
    }
  }
}