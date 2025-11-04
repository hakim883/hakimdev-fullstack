// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-about-page',
//   templateUrl: './about-page.component.html',
//   styleUrls: ['./about-page.component.scss']
// })
// export class AboutPageComponent {

// }
import { Component } from '@angular/core';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent {
  currentLang: any = {};

  readonly texts = {
    en: {
      pageTitle: 'About Us',
      home: 'Home',
      quoteImg: 'assets/images/ceo.jpg',
      quoteAlt: 'CEO portrait',
      quoteText:
        'With 5 years of full-stack development experience, I combine speed, rigor and creativity to deliver solutions that truly meet needs.',
      quoteAuthor: 'Abdelhakim Chaabani',
      quoteRole: 'Full-Stack Developer • French-speaking Switzerland'
    },
    fr: {
      pageTitle: 'À propos',
      home: 'Accueil',
      quoteImg: 'assets/images/ceo.jpg',
      quoteAlt: 'portrait PDG',
      quoteText:
        'Grâce à mes 5 ans d’expérience en développement full-stack, je combine rapidité, rigueur et créativité pour livrer des solutions qui répondent vraiment aux besoins.',
      quoteAuthor: 'Abdelhakim Chaabani',
      quoteRole: 'Développeur Full-Stack • Suisse Romande'
    },
    de: {
      pageTitle: 'Über uns',
      home: 'Startseite',
      quoteImg: 'assets/images/ceo.jpg',
      quoteAlt: 'CEO-Portrait',
      quoteText:
        'Mit 5 Jahren Erfahrung in der Full-Stack-Entwicklung verbinde ich Geschwindigkeit, Präzision und Kreativität, um Lösungen zu liefern, die den Bedürfnissen wirklich entsprechen.',
      quoteAuthor: 'Abdelhakim Chaabani',
      quoteRole: 'Full-Stack-Entwickler • Romandie'
    },
    ar: {
      pageTitle: 'من نحن',
      home: 'الرئيسية',
      quoteImg: 'assets/images/ceo.jpg',
      quoteAlt: 'صورة المدير التنفيذي',
      quoteText:
        'بفضل خبرتي التي تبلغ 5 سنوات في التطوير الشامل، أجمع بين السرعة والدقة والإبداع لتقديم حلول تلبي الاحتياجات فعلاً.',
      quoteAuthor: 'عبد الحكيم الشعابني',
      quoteRole: 'مطوّر شامل • سويسرا الناطقة بالفرنسية'
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