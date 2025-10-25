 import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent {
  currentLang: any = {};

  readonly texts = {
    en: {
      imgAlt: 'error-image',
      title: 'Oops! That page can\'t be found',
      button: 'Back to Home'
    },
    fr: {
      imgAlt: 'image-erreur',
      title: 'Oups ! Cette page est introuvable',
      button: 'Retour à l\'accueil'
    },
    de: {
      imgAlt: 'Fehler-Bild',
      title: 'Ups! Diese Seite wurde nicht gefunden',
      button: 'Zur Startseite'
    },
    ar: {
      imgAlt: 'صورة خطأ',
      title: 'عذرًا! لم يتم العثور على هذه الصفحة',
      button: 'العودة إلى الرئيسية'
    }
  } as const;

  constructor() {
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