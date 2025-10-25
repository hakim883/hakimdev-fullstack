// import { Component } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//     selector: 'app-blog',
//     templateUrl: './blog.component.html',
//     styleUrls: ['./blog.component.scss']
// })
// export class BlogComponent {

//     constructor(
//         public router: Router
//     ) { }

// }
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  currentLang: any = {};

  readonly texts = {
    en: {
      subTitle: 'BLOG & COURSES',
      title: 'Tutorials, tips and tech news',
      description: 'Discover my articles, tutorials and courses on Angular, Spring Boot, WordPress and more.',
      readMore: 'Read article',
      art1: { day: '17', month: 'Jul', alt: 'Angular + Spring Boot', title: 'Create a secure API with Angular + Spring Boot', excerpt: 'Complete guide: JWT authentication, CORS, deployment on Railway.' },
      art2: { day: '15', month: 'Jul', alt: 'WordPress E-commerce', title: 'WordPress e-commerce: store in 1 hour', excerpt: 'Step-by-step: WooCommerce, Stripe, local SEO.' },
      art3: { day: '12', month: 'Jul', alt: 'Multilingual site', title: 'Build a multilingual site with Angular i18n', excerpt: 'ngx-translate, Google Translate, multilingual SEO.' }
    },
    fr: {
      subTitle: 'BLOG & FORMATIONS',
      title: 'Tutos, astuces et nouveautés tech',
      description: 'Découvre mes articles, tutoriels et formations sur Angular, Spring Boot, WordPress et plus encore.',
      readMore: 'Lire l’article',
      art1: { day: '17', month: 'Juil', alt: 'Angular + Spring Boot', title: 'Créer une API sécurisée avec Angular + Spring Boot', excerpt: 'Guide complet : authentification JWT, CORS, déploiement sur Railway.' },
      art2: { day: '15', month: 'Juil', alt: 'WordPress E-commerce', title: 'WordPress e-commerce : boutique en 1h', excerpt: 'Pas à pas : WooCommerce, Stripe, SEO local.' },
      art3: { day: '12', month: 'Juil', alt: 'Site multilingue', title: 'Construire un site multilingue avec Angular i18n', excerpt: 'ngx-translate, Google Translate, SEO multilingue.' }
    },
    de: {
      subTitle: 'BLOG & SCHULUNGEN',
      title: 'Tutorials, Tipps & Tech-News',
      description: 'Entdecke meine Artikel, Tutorials und Kurse zu Angular, Spring Boot, WordPress und mehr.',
      readMore: 'Artikel lesen',
      art1: { day: '17', month: 'Jul', alt: 'Angular + Spring Boot', title: 'Sichere API mit Angular + Spring Boot erstellen', excerpt: 'Kompletter Leitfaden: JWT-Authentifizierung, CORS, Deployment auf Railway.' },
      art2: { day: '15', month: 'Jul', alt: 'WordPress E-commerce', title: 'WordPress E-Commerce: Shop in 1 Stunde', excerpt: 'Schritt für Schritt: WooCommerce, Stripe, lokales SEO.' },
      art3: { day: '12', month: 'Jul', alt: 'Mehrsprachige Website', title: 'Mehrsprachige Website mit Angular i18n bauen', excerpt: 'ngx-translate, Google Translate, mehrsprachiges SEO.' }
    },
    ar: {
      subTitle: 'المدونة والدورات',
      title: 'دروس، نصائح وأخبار التقنية',
      description: 'اكتشف مقالاتي، دروسي ودوراتي حول Angular وSpring Boot وWordPress وغيرها.',
      readMore: 'قراءة المقال',
      art1: { day: '17', month: 'يول', alt: 'Angular + Spring Boot', title: 'إنشاء واجهة برمجة آمنة باستخدام Angular + Spring Boot', excerpt: 'دليل شامل: المصادقة JWT، CORS، النشر على Railway.' },
      art2: { day: '15', month: 'يول', alt: 'WordPress E-commerce', title: 'متجر ووردبريس إلكتروني في ساعة واحدة', excerpt: 'خطوة بخطوة: WooCommerce، Stripe، تحسين محركات البحث المحلي.' },
      art3: { day: '12', month: 'يول', alt: 'موقع متعدد اللغات', title: 'بناء موقع متعدد اللغات باستخدام Angular i18n', excerpt: 'ngx-translate، Google Translate، تحسين محركات البحث متعدد اللغات.' }
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