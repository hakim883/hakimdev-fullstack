// import { Component } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//     selector: 'app-footer',
//     templateUrl: './footer.component.html',
//     styleUrls: ['./footer.component.scss']
// })
// export class FooterComponent {

//     constructor(
//         public router: Router
//     ) { }

// }
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  /* Année dynamique pour le copyright */
  year = new Date().getFullYear();

  /* Textes multilingues */
  currentLang: any = {};
  readonly texts = {
    en: {
      desc: 'Full-Stack Developer based in French-speaking Switzerland.\nAngular • Spring Boot • WordPress • Training',
      quickLinks: 'Quick Links',
      services: 'Services',
      training: 'Training',
      webDev: 'Web Development',
      coaching: 'Coaching',
      policy: 'Privacy Policy',
      contactMe: 'Contact Me',
      home: 'Home',
      projects: 'Projects',
      courses: 'Courses',
      contact: 'Contact',
      owner: 'Proudly owned by',
      country: 'Switzerland'
    },
    fr: {
      desc: 'Développeur Full-Stack basé en Suisse Romande.\nAngular • Spring Boot • WordPress • Formation',
      quickLinks: 'Liens rapides',
      services: 'Services',
      training: 'Formation',
      webDev: 'Développement web',
      coaching: 'Coaching',
      policy: 'Politique de confidentialité',
      contactMe: 'Contactez-moi',
      home: 'Accueil',
      projects: 'Projets',
      courses: 'Cours',
      contact: 'Contact',
      owner: 'Propriété de',
      country: 'Suisse Romande'
    },
    de: {
      desc: 'Full-Stack-Entwickler in der Romandie.\nAngular • Spring Boot • WordPress • Schulung',
      quickLinks: 'Quicklinks',
      services: 'Dienstleistungen',
      training: 'Schulung',
      webDev: 'Web-Entwicklung',
      coaching: 'Coaching',
      policy: 'Datenschutzrichtlinie',
      contactMe: 'Kontaktiere mich',
      home: 'Startseite',
      projects: 'Projekte',
      courses: 'Kurse',
      contact: 'Kontakt',
      owner: 'Eigentümer',
      country: 'Waadtland'
    },
    ar: {
      desc: 'مطوّر شامل مقيم في سويسرا الناطقة بالفرنسية.\nAngular • Spring Boot • WordPress • تدريب',
      quickLinks: 'روابط سريعة',
      services: 'الخدمات',
      training: 'التدريب',
      webDev: 'تطوير الويب',
      coaching: 'الإرشاد',
      policy: 'سياسة الخصوصية',
      contactMe: 'اتصل بي',
      home: 'الرئيسية',
      projects: 'المشاريع',
      courses: 'الدورات',
      contact: 'اتصل بنا',
      owner: 'تملكه',
      country: 'سويسرا الناطقة بالفرنسية'
    }
  } as const;

  constructor(private router: Router) {
    const saved = localStorage.getItem('lang') || 'fr';
    this.switchLang(saved);
  }

  /* Changement de langue */
  switchLang(language: string): void {
    const keys = ['en', 'fr', 'de', 'ar'] as const;
    if (keys.includes(language as any)) {
      this.currentLang = this.texts[language as keyof typeof this.texts];
    }
  }
}