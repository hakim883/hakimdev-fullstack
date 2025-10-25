
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  currentLang: any = {};

  readonly texts = {
    en: {
      subTitle: 'Recent Projects',
      heading: 'Latest Full-Stack Realisations',
      description:
        'Discover my latest full-stack projects: e-commerce platforms, dashboards, secure APIs and training.',
      recentCards: [
        {
          title: 'E-commerce Platform',
          desc: 'Spring Boot + Angular + Stripe – multi-currency online store, secure cart, admin dashboard.',
          link: '/projets/1',
          cta: 'View project'
        },
        {
          title: 'Analytics Dashboard',
          desc: 'Angular + Chart.js – real-time KPI visualisation, CSV export, JWT authentication.',
          link: '/projets/2',
          cta: 'View project'
        },
        {
          title: 'Secure REST API',
          desc: 'Spring Boot + JWT – multi-language endpoints, role-based access, Swagger docs.',
          link: '/projets/3',
          cta: 'View project'
        }
      ],
      gallery1: { alt: 'marketing project', title: 'Digital Marketing' },
      gallery2: { alt: 'engineering project', title: 'Product Engineering' },
      gallery3: { alt: 'branding project', title: 'Company Branding' },
      gallery4: { alt: 'illustration project', title: 'Illustrations' },
      viewAll: 'View All Projects'
    },
    fr: {
      subTitle: 'Projets Récents',
      heading: 'Dernières réalisations full-stack',
      description:
        'Découvrez mes dernières réalisations full-stack : plateformes e-commerce, dashboards, APIs sécurisées et formations.',
      recentCards: [
        {
          title: 'Plateforme E-commerce',
          desc: 'Spring Boot + Angular + Stripe – boutique en ligne multi-devise, panier sécurisé, dashboard admin.',
          link: '/projets/1',
          cta: 'Voir le projet'
        },
        {
          title: 'Dashboard Analytics',
          desc: 'Angular + Chart.js – visualisation temps réel des KPIs, export CSV, authentification JWT.',
          link: '/projets/2',
          cta: 'Voir le projet'
        },
        {
          title: 'API REST Sécurisée',
          desc: 'Spring Boot + JWT – endpoints multi-langues, accès basé sur les rôles, docs Swagger.',
          link: '/projets/3',
          cta: 'Voir le projet'
        }
      ],
      gallery1: { alt: 'projet marketing', title: 'Marketing Digital' },
      gallery2: { alt: 'projet ingénierie', title: 'Ingénierie Produit' },
      gallery3: { alt: 'projet branding', title: 'Branding Entreprise' },
      gallery4: { alt: 'projet illustrations', title: 'Illustrations' },
      viewAll: 'Tous les projets'
    },
    de: {
      subTitle: 'Neueste Projekte',
      heading: 'Neueste Full-Stack-Realisierungen',
      description:
        'Entdecken Sie meine neuesten Full-Stack-Projekte: E-Commerce-Plattformen, Dashboards, sichere APIs und Schulungen.',
      recentCards: [
        {
          title: 'E-Commerce-Plattform',
          desc: 'Spring Boot + Angular + Stripe – Multi-Währungs-Shop, sicherer Warenkorb, Admin-Dashboard.',
          link: '/projets/1',
          cta: 'Projekt ansehen'
        },
        {
          title: 'Analytics Dashboard',
          desc: 'Angular + Chart.js – Echtzeit-KPI-Visualisierung, CSV-Export, JWT-Authentifizierung.',
          link: '/projets/2',
          cta: 'Projekt ansehen'
        },
        {
          title: 'Sichere REST-API',
          desc: 'Spring Boot + JWT – mehrsprachige Endpunkte, rollenbasierte Zugriffsrechte, Swagger-Docs.',
          link: '/projets/3',
          cta: 'Projekt ansehen'
        }
      ],
      gallery1: { alt: 'marketing projekt', title: 'Digitales Marketing' },
      gallery2: { alt: 'engineering projekt', title: 'Produkt-Engineering' },
      gallery3: { alt: 'branding projekt', title: 'Unternehmens-Branding' },
      gallery4: { alt: 'illustration projekt', title: 'Illustrationen' },
      viewAll: 'Alle Projekte'
    },
    ar: {
      subTitle: 'أحدث المشاريع',
      heading: 'أحدث إنجازات Full-Stack',
      description:
        'اكتشف أحدث مشاريعي: منصات التجارة الإلكترونية، لوحات المعلومات، واجهات برمجة آمنة وتدريبات.',
      recentCards: [
        {
          title: 'منصة التجارة الإلكترونية',
          desc: 'Spring Boot + Angular + Stripe – متجر متعدد العملات، سلة آمنة، لوحة تحكم المدير.',
          link: '/projets/1',
          cta: 'عرض المشروع'
        },
        {
          title: 'لوحة تحليلات',
          desc: 'Angular + Chart.js – تصور KPI مباشر، تصدير CSV، مصادقة JWT.',
          link: '/projets/2',
          cta: 'عرض المشروع'
        },
        {
          title: 'واجهة REST آمنة',
          desc: 'Spring Boot + JWT – نقاط نهاية متعددة اللغات، وصول قائم على الأدوار، وثائق Swagger.',
          link: '/projets/3',
          cta: 'عرض المشروع'
        }
      ],
      gallery1: { alt: 'مشروع تسويق', title: 'التسويق الرقمي' },
      gallery2: { alt: 'مشروع هندسة', title: 'هندسة المنتج' },
      gallery3: { alt: 'مشروع هوية', title: 'هوية الشركة' },
      gallery4: { alt: 'مشروع رسوم', title: 'الرسوم التوضيحية' },
      viewAll: 'جميع المشاريع'
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