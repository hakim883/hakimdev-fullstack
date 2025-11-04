
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent {
  currentLang: any = {};

  readonly texts = {
    en: {
      imgSrc: 'assets/images/ceo.jpg',
      imgAlt: 'CEO portrait',
      quote:
        'With 5 years of full-stack development experience, I combine speed, rigor and creativity to deliver solutions that truly meet needs.',
      author: 'Abdelhakim Chaabani',
      role: 'Full-Stack Developer • French-speaking Switzerland'
    },
    fr: {
      imgSrc: 'assets/images/ceo.jpg',
      imgAlt: 'portrait PDG',
      quote:
        'Grâce à mes 5 ans d’expérience en développement full-stack, je combine rapidité, rigueur et créativité pour livrer des solutions qui répondent vraiment aux besoins.',
      author: 'Abdelhakim Chaabani',
      role: 'Développeur Full-Stack • Suisse Romande'
    },
    de: {
      imgSrc: 'assets/images/ceo.jpg',
      imgAlt: 'CEO-Portrait',
      quote:
        'Mit 5 Jahren Erfahrung in der Full-Stack-Entwicklung verbinde ich Geschwindigkeit, Präzision und Kreativität, um Lösungen zu liefern, die den Bedürfnissen wirklich entsprechen.',
      author: 'Abdelhakim Chaabani',
      role: 'Full-Stack-Entwickler • Romandie'
    },
    ar: {
      imgSrc: 'assets/images/ceo.jpg',
      imgAlt: 'صورة المدير التنفيذي',
      quote:
        'بفضل خبرتي التي تبلغ 5 سنوات في التطوير الشامل، أجمع بين السرعة والدقة والإبداع لتقديم حلول تلبي الاحتياجات فعلاً.',
      author: 'عبد الحكيم الشعابني',
      role: 'مطوّر شامل • سويسرا الناطقة بالفرنسية'
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