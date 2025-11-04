
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-why-choose-us',
  templateUrl: './why-choose-us.component.html',
  styleUrls: ['./why-choose-us.component.scss']
})
export class WhyChooseUsComponent {
  currentLang: any = {};

  readonly texts = {
    en: {
      subTitle: 'Why choose me?',
      imgSrc: 'assets/images/why-choose-us.jpg',
      imgAlt: 'why-choose-us-image',
      cards: [
        {
          title: 'Full-Stack Expertise',
          desc: 'Angular, Spring Boot, MySQL – robust and scalable applications.'
        },
        {
          title: 'Multilingual & Available',
          desc: 'French C1, English B2, Arabic native – smooth and fast communication.'
        },
        {
          title: 'French-Speaking Switzerland',
          desc: 'Based in Nyon – immediate projects, tailored training, on-site availability.'
        }
      ]
    },
    fr: {
      subTitle: 'Pourquoi me choisir ?',
      imgSrc: 'assets/images/why-choose-us.jpg',
      imgAlt: 'image-pourquoi-nous-choisir',
      cards: [
        {
          title: 'Stack Complète',
          desc: 'Angular, Spring Boot, MySQL – applications robustes et évolutives.'
        },
        {
          title: 'Multilingue & Disponible',
          desc: 'Français C1, Anglais B2, Arabe natif – communication fluide et rapide.'
        },
        {
          title: 'Suisse Romande',
          desc: 'Basé à Nyon – projets immédiats, formations sur mesure, disponible sur site.'
        }
      ]
    },
    de: {
      subTitle: 'Warum mich wählen?',
      imgSrc: 'assets/images/why-choose-us.jpg',
      imgAlt: 'Bild-warum-uns-wählen',
      cards: [
        {
          title: 'Vollständiger Stack',
          desc: 'Angular, Spring Boot, MySQL – robuste und skalierbare Anwendungen.'
        },
        {
          title: 'Mehrsprachig & Erreichbar',
          desc: 'Französisch C1, Englisch B2, Arabisch Muttersprache – reibungslose Kommunikation.'
        },
        {
          title: 'Westschweiz',
          desc: 'Standort Nyon – sofortige Projekte, maßgeschneiderte Schulungen, Vor-Ort-Einsatz.'
        }
      ]
    },
    ar: {
      subTitle: 'لماذا تختارني؟',
      imgSrc: 'assets/images/why-choose-us.jpg',
      imgAlt: 'صورة لماذا تختارنا',
      cards: [
        {
          title: 'خبرة شاملة',
          desc: 'Angular وSpring Boot وMySQL – تطبيقات قوية وقابلة للتوسع.'
        },
        {
          title: 'متعدد اللغات ومتوفر',
          desc: 'الفرنسية C1، الإنجليزية B2، العربية الأم – تواصل سلس وسريع.'
        },
        {
          title: 'سويسرا الناطقة بالفرنسية',
          desc: 'مقرّ في نيون – مشروعات فورية، تدريبات مخصصة، تواجد ميداني.'
        }
      ]
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