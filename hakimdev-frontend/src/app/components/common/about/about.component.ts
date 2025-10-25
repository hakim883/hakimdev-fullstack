
// import { Component } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//     selector: 'app-about',
//     templateUrl: './about.component.html',
//     styleUrls: ['./about.component.scss']
// })
// export class AboutComponent {

//     constructor(
//         public router: Router
//     ) { }

// }
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  currentLang: any = {};

  /* Traductions */
  readonly texts = {
    en: {
      imgAlt: 'about-image',
      subTitle: 'ABOUT US',
      title: 'Give us an idea that people want to spend time with',
      description: 'We craft digital experiences that engage and convert. From concept to deployment, our expertise turns your ideas into products users love.',
      boostTitle: 'Boost Your Sale',
      boostText: 'Increase revenues with data-driven strategies and high-performance web solutions tailored to your market.',
      ideaTitle: 'Idea & Analysis',
      ideaText: 'Transform raw ideas into clear roadmaps through in-depth analysis and agile planning.'
    },
    fr: {
      imgAlt: 'image-à-propos',
      subTitle: 'À PROPOS',
      title: 'Donnez-nous une idée avec laquelle les gens veulent passer du temps',
      description: 'Nous créons des expériences digitales qui captivent et convertissent. De la conception au déploiement, notre expertise transforme vos idées en produits appréciés des utilisateurs.',
      boostTitle: 'Booster vos ventes',
      boostText: 'Augmentez vos revenus grâce à des stratégies basées sur les données et des solutions web performantes adaptées à votre marché.',
      ideaTitle: 'Idée & Analyse',
      ideaText: 'Transformez des idées brutes en feuilles de route claires grâce à une analyse approfondie et une planification agile.'
    },
    de: {
      imgAlt: 'über-bild',
      subTitle: 'ÜBER UNS',
      title: 'Geben Sie uns eine Idee, mit der Menschen Zeit verbringen möchten',
      description: 'Wir gestalten digitale Erlebnisse, die begeistern und konvertieren. Von der Konzeption bis zum Deployment machen wir aus Ihren Ideen Produkte, die Nutzer lieben.',
      boostTitle: 'Verkauf ankurbeln',
      boostText: 'Steigern Sie Ihre Einnahmen mit datengesteuerten Strategien und leistungsstarken Web-Lösungen, die auf Ihren Markt zugeschnitten sind.',
      ideaTitle: 'Idee & Analyse',
      ideaText: 'Verwandeln Sie Rohideen in klare Roadmaps durch eingehende Analysen und agile Planung.'
    },
    ar: {
      imgAlt: 'صورة-حول',
      subTitle: 'معلومات عنا',
      title: 'أعطنا فكرة يرغب الناس في قضاء الوقت معها',
      description: 'نحن نصمم تجارب رقمية جذابة ومُحفزة. من الفكرة إلى الإطلاق، خبرتنا تحوّل أفكارك إلى منتجات يحبها المستخدمون.',
      boostTitle: 'تعزيز مبيعاتك',
      boostText: 'زد إيراداتك من خلال استراتيجيات قائمة على البيانات وحلول ويب عالية الأداء مصممة لسوقك.',
      ideaTitle: 'الفكرة والتحليل',
      ideaText: 'حوّل الأفكار الخام إلى خرائط طريق واضحة من خلال تحليل عميق وتخطيط مرن.'
    }
  } as const;

  constructor(private router: Router) {
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