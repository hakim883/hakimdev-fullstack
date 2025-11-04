
import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent {
  currentLang: any = {};

  readonly texts = {
    en: {
      slides: [
        {
          quote: 'Thanks to his Angular + Spring Boot expertise, Abdelhakim delivered a fast and reliable platform for our startup.',
          name: 'Sarah L.',
          role: 'CEO • FinTech Geneva'
        },
        {
          quote: 'Very clear WordPress training. I launched my e-commerce site in one week without any bugs.',
          name: 'Mehdi B.',
          role: 'Freelancer • Lausanne'
        },
        {
          quote: 'Secure and multilingual REST API deployed in 3 days. Professional and responsive.',
          name: 'David R.',
          role: 'CTO • Digital Agency Nyon'
        }
      ]
    },
    fr: {
      slides: [
        {
          quote: 'Grâce à son expertise Angular + Spring Boot, Abdelhakim a livré une plateforme rapide et fiable pour notre start-up.',
          name: 'Sarah L.',
          role: 'CEO • FinTech Genève'
        },
        {
          quote: 'Formation WordPress très claire. J’ai pu lancer mon site e-commerce en une semaine sans bug.',
          name: 'Mehdi B.',
          role: 'Freelancer • Lausanne'
        },
        {
          quote: 'API REST sécurisée et multilingue mise en production en 3 jours. Professionnel et réactif.',
          name: 'David R.',
          role: 'CTO • Agence digitale Nyon'
        }
      ]
    },
    de: {
      slides: [
        {
          quote: 'Dank seiner Angular- und Spring-Boot-Expertise lieferte Abdelhakim eine schnelle und zuverlässige Plattform für unser Startup.',
          name: 'Sarah L.',
          role: 'CEO • FinTech Genf'
        },
        {
          quote: 'Sehr klarer WordPress-Kurs. Ich konnte meinen E-Commerce-Shop in einer Woche ohne Bugs starten.',
          name: 'Mehdi B.',
          role: 'Freelancer • Lausanne'
        },
        {
          quote: 'Sichere und mehrsprachige REST-API innerhalb von 3 Tagen deployed. Professionell und reaktionsschnell.',
          name: 'David R.',
          role: 'CTO • Digitalagentur Nyon'
        }
      ]
    },
    ar: {
      slides: [
        {
          quote: 'بفضل خبرته في Angular وSpring Boot، قدم عبد الحكيم منصة سريعة وموثوقة لشركتنا الناشئة.',
          name: 'سارة ل.',
          role: 'المديرة العامة • فينتك جنيف'
        },
        {
          quote: 'تدريب WordPress واضح جداً. تمكنت من إطلاق موقع التجارة الإلكترونية الخاص بي في أسبوع واحد دون أخطاء.',
          name: 'مهدي ب.',
          role: 'مستقل • لوزان'
        },
        {
          quote: 'واجهة REST آمنة ومتعددة اللغات تم نشرها في 3 أيام. احترافي وسريع الاستجابة.',
          name: 'ديفيد ر.',
          role: 'المدير التقني • وكالة رقمية نيون'
        }
      ]
    }
  } as const;

  feedbackSlides: OwlOptions = {
    items: 1,
    nav: false,
    loop: true,
    dots: true,
    autoplay: false,
    smartSpeed: 1000,
    autoplayHoverPause: true
  };

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