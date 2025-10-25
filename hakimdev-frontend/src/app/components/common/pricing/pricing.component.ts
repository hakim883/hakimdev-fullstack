// import { Component } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//     selector: 'app-pricing',
//     templateUrl: './pricing.component.html',
//     styleUrls: ['./pricing.component.scss']
// })
// export class PricingComponent {

//     constructor(
//         public router: Router
//     ) { }

// }
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent {
  currentLang: any = {};

  readonly texts = {
    en: {
      subTitle: 'MY SERVICES',
      heading: 'Training & Tailor-Made Projects',
      description: 'Choose the offer that suits your needs: training, project or full support.',
      tabTitle: 'Prices',
      plan1: {
        title: 'Starter',
        subtitle: 'Dev training – 5 sessions',
        price: '250 CHF',
        period: 'per person',
        cta: 'Book',
        bullet1: 'Access to videos + support',
        bullet2: 'Certificate of completion'
      },
      plan2: {
        title: 'Project',
        subtitle: 'Complete site – Full-Stack',
        price: '1200 CHF',
        period: 'per project',
        cta: 'Request quote',
        bullet1: 'Angular + Spring Boot',
        bullet2: 'Hosting + domain included'
      },
      plan3: {
        title: 'Support',
        subtitle: 'Coaching + 6-month maintenance',
        price: '2500 CHF',
        period: '6 months',
        cta: 'Start',
        bullet1: '24/7 support',
        bullet2: 'Updates included'
      }
    },
    fr: {
      subTitle: 'MES SERVICES',
      heading: 'Formations & Projets sur mesure',
      description: 'Choisissez l’offre qui correspond à vos besoins : formation, projet ou accompagnement complet.',
      tabTitle: 'prix',
      plan1: {
        title: 'Starter',
        subtitle: 'Formation dev – 5 séances',
        price: '250 CHF',
        period: 'personne',
        cta: 'Réserver',
        bullet1: 'Accès vidéos + support',
        bullet2: 'Certificat de fin'
      },
      plan2: {
        title: 'Projet',
        subtitle: 'Site complet – Full-Stack',
        price: '1200 CHF',
        period: 'projet',
        cta: 'Demander devis',
        bullet1: 'Angular + Spring Boot',
        bullet2: 'Hébergement + domaine'
      },
      plan3: {
        title: 'Accompagnement',
        subtitle: 'Coaching + maintenance 6 mois',
        price: '2500 CHF',
        period: '6 mois',
        cta: 'Commencer',
        bullet1: 'Support 24/7',
        bullet2: 'Mises à jour incluses'
      }
    },
    de: {
      subTitle: 'MEINE DIENSTLEISTUNGEN',
      heading: 'Schulungen & Maßgeschneiderte Projekte',
      description: 'Wählen Sie das Angebot, das zu Ihren Bedürfnissen passt: Schulung, Projekt oder volle Betreuung.',
      tabTitle: 'Preise',
      plan1: {
        title: 'Starter',
        subtitle: 'Dev-Schulung – 5 Sitzungen',
        price: '250 CHF',
        period: 'Person',
        cta: 'Buchen',
        bullet1: 'Zugriff auf Videos + Support',
        bullet2: 'Abschlusszertifikat'
      },
      plan2: {
        title: 'Projekt',
        subtitle: 'Komplette Site – Full-Stack',
        price: '1200 CHF',
        period: 'Projekt',
        cta: 'Angebot anfordern',
        bullet1: 'Angular + Spring Boot',
        bullet2: 'Hosting + Domain inklusive'
      },
      plan3: {
        title: 'Begleitung',
        subtitle: 'Coaching + 6 Monate Wartung',
        price: '2500 CHF',
        period: '6 Monate',
        cta: 'Starten',
        bullet1: '24/7-Support',
        bullet2: 'Updates inklusive'
      }
    },
    ar: {
      subTitle: 'خدماتي',
      heading: 'تدريبات ومشاريع مخصصة',
      description: 'اختر العرض الذي يناسب احتياجاتك: تدريب، مشروع أو دعم كامل.',
      tabTitle: 'الأسعار',
      plan1: {
        title: 'Starter',
        subtitle: 'تدريب تطوير – 5 جلسات',
        price: '250 CHF',
        period: 'شخص',
        cta: 'احجز',
        bullet1: 'الوصول للفيديوهات + الدعم',
        bullet2: 'شهادة إتمام'
      },
      plan2: {
        title: 'مشروع',
        subtitle: 'موقع كامل – Full-Stack',
        price: '1200 CHF',
        period: 'مشروع',
        cta: 'اطلب عرض سعر',
        bullet1: 'Angular + Spring Boot',
        bullet2: 'الاستضافة + النطاق مشمولان'
      },
      plan3: {
        title: 'مرافقة',
        subtitle: 'توجيه + صيانة 6 أشهر',
        price: '2500 CHF',
        period: '6 أشهر',
        cta: 'ابدأ',
        bullet1: 'دعم ٢٤/٧',
        bullet2: 'التحديثات مشمولة'
      }
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