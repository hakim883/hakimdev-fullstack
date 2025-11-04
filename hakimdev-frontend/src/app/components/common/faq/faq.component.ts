
import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent {
  oneAtATime = true;
  isFirstOpen = true;

  currentLang: any = {};

  readonly texts = {
    en: {
      title: 'Frequently Asked Questions',
      questions: [
        {
          title: 'What technologies do you use?',
          content: 'I mainly work with Angular, Spring Boot, WordPress and modern cloud platforms (Railway, Vercel, AWS).'
        },
        {
          title: 'How long does a typical project take?',
          content: 'It depends on the scope: a landing page can be ready in one week, while a complete web application usually takes 4-8 weeks.'
        },
        {
          title: 'Do you offer maintenance after delivery?',
          content: 'Yes, I provide monthly maintenance plans that include updates, backups, security monitoring and small evolutions.'
        },
        {
          title: 'Can you train my team?',
          content: 'Absolutely! I organize remote or on-site workshops on Angular, Spring Boot and good development practices.'
        },
        {
          title: 'What are your rates?',
          content: 'Rates are tailored to the project. Contact me for a free, no-obligation quote within 24 hours.'
        }
      ]
    },
    fr: {
      title: 'Questions fréquentes',
      questions: [
        {
          title: 'Quelles technologies utilisez-vous ?',
          content: 'Je travaille principalement avec Angular, Spring Boot, WordPress et des plateformes cloud modernes (Railway, Vercel, AWS).'
        },
        {
          title: 'Combien de temps dure un projet classique ?',
          content: 'Cela dépend de la taille : une landing page peut être prête en une semaine, tandis qu’une application complète prend en général 4 à 8 semaines.'
        },
        {
          title: 'Proposez-vous de la maintenance après livraison ?',
          content: 'Oui, j’offre des forfaits mensuels comprenant mises à jour, sauvegardes, veille sécurité et petites évolutions.'
        },
        {
          title: 'Pouvez-vous former mon équipe ?',
          content: 'Bien sûr ! J’organise des ateliers distants ou sur site sur Angular, Spring Boot et les bonnes pratiques de développement.'
        },
        {
          title: 'Quels sont vos tarifs ?',
          content: 'Les tarifs sont adaptés au projet. Contactez-moi pour un devis gratuit et sans engagement sous 24 h.'
        }
      ]
    },
    de: {
      title: 'Häufig gestellte Fragen',
      questions: [
        {
          title: 'Welche Technologien nutzen Sie?',
          content: 'Ich arbeite hauptsächlich mit Angular, Spring Boot, WordPress und modernen Cloud-Plattformen (Railway, Vercel, AWS).'
        },
        {
          title: 'Wie lange dauert ein typisches Projekt?',
          content: 'Das hängt vom Umfang ab: eine Landingpage ist in einer Woche fertig, während eine komplette Web-App in der Regel 4-8 Wochen benötigt.'
        },
        {
          title: 'Bieten Sie Wartung nach der Auslieferung an?',
          content: 'Ja, ich biete monatliche Wartungspakete mit Updates, Backups, Security-Monitoring und kleinen Weiterentwicklungen.'
        },
        {
          title: 'Können Sie mein Team schulen?',
          content: 'Absolut! Ich organisiere Remote- oder Vor-Ort-Workshops zu Angular, Spring Boot und Best Practices.'
        },
        {
          title: 'Was sind Ihre Preise?',
          content: 'Die Preise richten sich nach dem Projekt. Kontaktieren Sie mich für ein kostenloses und unverbindliches Angebot innerhalb von 24 Stunden.'
        }
      ]
    },
    ar: {
      title: 'أسئلة مكررة',
      questions: [
        {
          title: 'ما التقنيات التي تستخدمها؟',
          content: 'أعمل أساسًا مع Angular وSpring Boot وWordPress والمنصات السحابية الحديثة (Railway، Vercel، AWS).'
        },
        {
          title: 'كم تستغرق المشروعات عادةً؟',
          content: 'يعتمد على الحجم: صفحة هبوط تكون جاهزة في أسبوع، بينما التطبيق الكامل يحتاج عادةً 4-8 أسابيع.'
        },
        {
          title: 'هل تقدم صيانة بعد التسليم؟',
          content: 'نعم، أقدم خطط صيانة شهرية تشمل التحديثات، النسخ الاحتياطي، مراقبة الأمان والتطويرات الصغيرة.'
        },
        {
          title: 'هل يمكنك تدريب فريقي؟',
          content: 'بالطبع! أنظم ورش عمل عن بُعد أو في الموقع حول Angular وSpring Boot وأفضل الممارسات.'
        },
        {
          title: 'ما هي أسعارك؟',
          content: 'الأسعار مخصصة حسب المشروع. تواصل معي للحصول على عرض مجاني وبدون التزام خلال 24 ساعة.'
        }
      ]
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