// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-expertise',
//   templateUrl: './expertise.component.html',
//   styleUrls: ['./expertise.component.scss']
// })
// export class ExpertiseComponent {}
import { Component } from '@angular/core';

@Component({
  selector: 'app-expertise',
  templateUrl: './expertise.component.html',
  styleUrls: ['./expertise.component.scss']
})
export class ExpertiseComponent {
  currentLang: any = {};

  readonly texts = {
    en: {
      imgAlt: 'Expertise',
      subTitle: 'EXPERTISE',
      heading: 'Modern solutions for ambitious projects',
      description: 'We combine cutting-edge technologies and proven methodologies to deliver scalable, secure and high-performance applications.',
      feature1Title: 'Performance & Scalability',
      feature1Desc: 'Optimized architectures that grow with your business and handle millions of users without compromise.',
      feature2Title: 'Security First',
      feature2Desc: 'Industry-standard security practices to protect your data and ensure compliance.'
    },
    fr: {
      imgAlt: 'Expertise',
      subTitle: 'EXPERTISE',
      heading: 'Solutions modernes pour projets ambitieux',
      description: 'Nous combinons technologies de pointe et méthodologies éprouvées pour livrer des applications scalables, sécurisées et performantes.',
      feature1Title: 'Performance & Scalabilité',
      feature1Desc: 'Architectures optimisées qui évoluent avec votre activité et supportent des millions d’utilisateurs sans compromis.',
      feature2Title: 'Sécurité avant tout',
      feature2Desc: 'Pratiques de sécurité conformes aux standards de l’industrie pour protéger vos données et garantir la conformité.'
    },
    de: {
      imgAlt: 'Expertise',
      subTitle: 'EXPERTISE',
      heading: 'Moderne Lösungen für ambitionierte Projekte',
      description: 'Wir verbinden modernste Technologien und bewährte Methoden, um skalierbare, sichere und leistungsstarke Anwendungen zu liefern.',
      feature1Title: 'Leistung & Skalierbarkeit',
      feature1Desc: 'Optimierte Architekturen, die mit Ihrem Unternehmen wachsen und Millionen von Nutzern ohne Kompromisse bewältigen.',
      feature2Title: 'Sicherheit zuerst',
      feature2Desc: 'Branchenübliche Sicherheitspraktiken zum Schutz Ihrer Daten und zur Sicherstellung der Compliance.'
    },
    ar: {
      imgAlt: 'الخبرة',
      subTitle: 'الخبرة',
      heading: 'حلول حديثة للمشاريع الطموحة',
      description: 'نحن نجمع بين أحدث التقنيات والمنهجيات المجربة لتقديم تطبيقات قابلة للتوسعة، آمنة وعالية الأداء.',
      feature1Title: 'الأداء والقابلية للتوسعة',
      feature1Desc: 'هياكل محسّنة تنمو مع عملك وتتعامل مع ملايين المستخدمين دون تنازلات.',
      feature2Title: 'الأمان أولاً',
      feature2Desc: 'ممارسات أمان مطابقة للمعايير الصناعية لحماية بياناتك وضمان الامتثال.'
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