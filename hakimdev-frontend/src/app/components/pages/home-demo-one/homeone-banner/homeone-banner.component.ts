// import { Component } from '@angular/core';

// @Component({
//     selector: 'app-homeone-banner',
//     templateUrl: './homeone-banner.component.html',
//     styleUrls: ['./homeone-banner.component.scss']
// })
// export class HomeoneBannerComponent {
    
// }
import { Component } from '@angular/core';

@Component({
  selector: 'app-homeone-banner',
  templateUrl: './homeone-banner.component.html',
  styleUrls: ['./homeone-banner.component.scss']
})
export class HomeoneBannerComponent {
  currentLang: any = {};

  readonly texts = {
    en: {
      name: 'HAKIM CHAABANI',
      subtitle: 'Full-Stack Developer in French-speaking Switzerland',
      description:
        'I create modern web applications, intuitive interfaces and robust solutions using <strong>Angular, Spring Boot and WordPress</strong>.<br>Available for your projects, trainings and collaborations.',
      btnProjects: 'Discover my projects',
      btnCourses: 'See my courses',
      btnDiscover: 'Learn more',
      bannerAlt1: 'Web application screenshot',
      bannerAlt2: 'Developer workspace illustration'
    },
    fr: {
      name: 'HAKIM CHAABANI',
      subtitle: 'Développeur Full-Stack en Suisse Romande',
      description:
        'Je crée des applications web modernes, des interfaces intuitives et des solutions robustes en <strong>Angular, Spring Boot et WordPress</strong>.<br>Disponible pour vos projets, formations et collaborations.',
      btnProjects: 'Découvrir mes projets',
      btnCourses: 'Voir mes cours',
      btnDiscover: 'En savoir plus',
      bannerAlt1: 'Capture d’écran app web',
      bannerAlt2: 'Illustration poste de dev'
    },
    de: {
      name: 'HAKIM CHAABANI',
      subtitle: 'Full-Stack-Entwickler in der Romandie',
      description:
        'Ich erstelle moderne Web-Apps, intuitive Interfaces und robuste Lösungen mit <strong>Angular, Spring Boot und WordPress</strong>.<br>Verfügbar für Projekte, Schulungen und Kollaborationen.',
      btnProjects: 'Projekte entdecken',
      btnCourses: 'Kurse ansehen',
      btnDiscover: 'Mehr erfahren',
      bannerAlt1: 'Web-App Screenshot',
      bannerAlt2: 'Entwickler-Workspace'
    },
    ar: {
      name: 'HAKIM CHAABANI',
      subtitle: 'مطوّر شامل في سويسرا الناطقة بالفرنسية',
      description:
        'أُنشئ تطبيقات ويب حديثة، واجهات سهلة الاستخدام وحلولًا قوية باستخدام <strong>Angular وSpring Boot وWordPress</strong>.<br>متوفر لمشاريعك، دوراتك وتعاوناتك.',
      btnProjects: 'اكتشف مشاريعي',
      btnCourses: 'عرض دوراتي',
      btnDiscover: 'تعرّف أكثر',
      bannerAlt1: 'لقطة شاشة تطبيق ويب',
      bannerAlt2: 'مساحة عمل المطوّر'
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