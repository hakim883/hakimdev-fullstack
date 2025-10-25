// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-pricing-page',
//   templateUrl: './pricing-page.component.html',
//   styleUrls: ['./pricing-page.component.scss']
// })
// export class PricingPageComponent {

// }
import { Component } from '@angular/core';

@Component({
  selector: 'app-pricing-page',
  templateUrl: './pricing-page.component.html',
  styleUrls: ['./pricing-page.component.scss']
})
export class PricingPageComponent {
  currentLang: any = {};
  monthlyPlans: any[] = [];
  yearlyPlans: any[] = [];

  readonly texts = {
    en: {
      pageTitle: 'Pricing',
      home: 'Home',
      sectionTitle: 'Working together to create the next big thing',
      sectionDesc: 'We offer flexible pricing plans tailored to your needs. Choose the one that fits your business.',
      monthlyTab: 'Monthly',
      yearlyTab: 'Yearly',
      month: 'month',
      year: 'year',
      getStarted: 'Get Started Now',
      included: 'What’s Included:',
      popular: 'Popular',
      plans: {
        monthly: [
          {
            name: 'Individual',
            desc: 'Entrepreneurs & small businesses. Managing 1 website.',
            price: 15,
            popular: true,
            features: [
              { text: 'SEO Training & Support', active: true },
              { text: 'Reports Per Day', active: true },
              { text: 'Tracked Keywords', active: true },
              { text: 'Numbers of Locations', active: true },
              { text: 'Keyword Research', active: false },
              { text: 'Competitive Analysis', active: false }
            ]
          },
          {
            name: 'Business',
            desc: 'Entrepreneurs & small businesses. Managing 7 websites.',
            price: 29,
            popular: false,
            features: [
              { text: 'SEO Training & Support', active: true },
              { text: 'Reports Per Day', active: true },
              { text: 'Tracked Keywords', active: true },
              { text: 'Numbers of Locations', active: true },
              { text: 'Keyword Research', active: true },
              { text: 'Competitive Analysis', active: false }
            ]
          },
          {
            name: 'Enterprise / Agency',
            desc: 'Entrepreneurs & small businesses. Managing 10+ websites.',
            price: 79,
            popular: false,
            features: [
              { text: 'SEO Training & Support', active: true },
              { text: 'Reports Per Day', active: true },
              { text: 'Tracked Keywords', active: true },
              { text: 'Numbers of Locations', active: true },
              { text: 'Keyword Research', active: true },
              { text: 'Competitive Analysis', active: true }
            ]
          }
        ],
        yearly: [
          {
            name: 'Individual',
            desc: 'Entrepreneurs & small businesses. Managing 1 website.',
            price: 115,
            popular: true,
            features: [
              { text: 'SEO Training & Support', active: true },
              { text: 'Reports Per Day', active: true },
              { text: 'Tracked Keywords', active: true },
              { text: 'Numbers of Locations', active: true },
              { text: 'Keyword Research', active: false },
              { text: 'Competitive Analysis', active: false }
            ]
          },
          {
            name: 'Business',
            desc: 'Entrepreneurs & small businesses. Managing 7 websites.',
            price: 129,
            popular: false,
            features: [
              { text: 'SEO Training & Support', active: true },
              { text: 'Reports Per Day', active: true },
              { text: 'Tracked Keywords', active: true },
              { text: 'Numbers of Locations', active: true },
              { text: 'Keyword Research', active: true },
              { text: 'Competitive Analysis', active: false }
            ]
          },
          {
            name: 'Enterprise / Agency',
            desc: 'Entrepreneurs & small businesses. Managing 10+ websites.',
            price: 179,
            popular: false,
            features: [
              { text: 'SEO Training & Support', active: true },
              { text: 'Reports Per Day', active: true },
              { text: 'Tracked Keywords', active: true },
              { text: 'Numbers of Locations', active: true },
              { text: 'Keyword Research', active: true },
              { text: 'Competitive Analysis', active: true }
            ]
          }
        ]
      }
    },
    fr: {
      pageTitle: 'Tarifs',
      home: 'Accueil',
      sectionTitle: 'Travaillons ensemble pour créer la prochaine grande chose',
      sectionDesc: 'Nous proposons des plans tarifaires flexibles adaptés à vos besoins. Choisissez celui qui convient à votre entreprise.',
      monthlyTab: 'Mensuel',
      yearlyTab: 'Annuel',
      month: 'mois',
      year: 'an',
      getStarted: 'Commencer maintenant',
      included: 'Ce qui est inclus :',
      popular: 'Populaire',
      plans: {
        monthly: [
          {
            name: 'Individuel',
            desc: 'Indépendants et petites entreprises. Gestion de 1 site web.',
            price: 15,
            popular: true,
            features: [
              { text: 'Formation et support SEO', active: true },
              { text: 'Rapports par jour', active: true },
              { text: 'Mots-clés suivis', active: true },
              { text: 'Nombre de localisations', active: true },
              { text: 'Recherche de mots-clés', active: false },
              { text: 'Analyse concurrentielle', active: false }
            ]
          },
          {
            name: 'Business',
            desc: 'Petites entreprises. Gestion de 7 sites web.',
            price: 29,
            popular: false,
            features: [
              { text: 'Formation et support SEO', active: true },
              { text: 'Rapports par jour', active: true },
              { text: 'Mots-clés suivis', active: true },
              { text: 'Nombre de localisations', active: true },
              { text: 'Recherche de mots-clés', active: true },
              { text: 'Analyse concurrentielle', active: false }
            ]
          },
          {
            name: 'Entreprise / Agence',
            desc: 'Grandes entreprises. Gestion de 10+ sites web.',
            price: 79,
            popular: false,
            features: [
              { text: 'Formation et support SEO', active: true },
              { text: 'Rapports par jour', active: true },
              { text: 'Mots-clés suivis', active: true },
              { text: 'Nombre de localisations', active: true },
              { text: 'Recherche de mots-clés', active: true },
              { text: 'Analyse concurrentielle', active: true }
            ]
          }
        ],
        yearly: [
          {
            name: 'Individuel',
            desc: 'Indépendants et petites entreprises. Gestion de 1 site web.',
            price: 115,
            popular: true,
            features: [
              { text: 'Formation et support SEO', active: true },
              { text: 'Rapports par jour', active: true },
              { text: 'Mots-clés suivis', active: true },
              { text: 'Nombre de localisations', active: true },
              { text: 'Recherche de mots-clés', active: false },
              { text: 'Analyse concurrentielle', active: false }
            ]
          },
          {
            name: 'Business',
            desc: 'Petites entreprises. Gestion de 7 sites web.',
            price: 129,
            popular: false,
            features: [
              { text: 'Formation et support SEO', active: true },
              { text: 'Rapports par jour', active: true },
              { text: 'Mots-clés suivis', active: true },
              { text: 'Nombre de localisations', active: true },
              { text: 'Recherche de mots-clés', active: true },
              { text: 'Analyse concurrentielle', active: false }
            ]
          },
          {
            name: 'Entreprise / Agence',
            desc: 'Grandes entreprises. Gestion de 10+ sites web.',
            price: 179,
            popular: false,
            features: [
              { text: 'Formation et support SEO', active: true },
              { text: 'Rapports par jour', active: true },
              { text: 'Mots-clés suivis', active: true },
              { text: 'Nombre de localisations', active: true },
              { text: 'Recherche de mots-clés', active: true },
              { text: 'Analyse concurrentielle', active: true }
            ]
          }
        ]
      }
    },
    de: {
      pageTitle: 'Preise',
      home: 'Startseite',
      sectionTitle: 'Gemeinsam arbeiten, um das Nächste große Ding zu erschaffen',
      sectionDesc: 'Wir bieten flexible Preispläne, die auf Ihre Bedürfnisse zugeschnitten sind. Wählen Sie den passenden für Ihr Unternehmen.',
      monthlyTab: 'Monatlich',
      yearlyTab: 'Jährlich',
      month: 'Monat',
      year: 'Jahr',
      getStarted: 'Jetzt starten',
      included: 'Enthalten:',
      popular: 'Beliebt',
      plans: {
        monthly: [
          {
            name: 'Individuell',
            desc: 'Selbstständige und kleine Unternehmen. Verwaltung von 1 Website.',
            price: 15,
            popular: true,
            features: [
              { text: 'SEO-Schulung & Support', active: true },
              { text: 'Berichte pro Tag', active: true },
              { text: 'Verfolgte Keywords', active: true },
              { text: 'Anzahl der Standorte', active: true },
              { text: 'Keyword-Recherche', active: false },
              { text: 'Wettbewerbsanalyse', active: false }
            ]
          },
          {
            name: 'Business',
            desc: 'Kleine Unternehmen. Verwaltung von 7 Websites.',
            price: 29,
            popular: false,
            features: [
              { text: 'SEO-Schulung & Support', active: true },
              { text: 'Berichte pro Tag', active: true },
              { text: 'Verfolgte Keywords', active: true },
              { text: 'Anzahl der Standorte', active: true },
              { text: 'Keyword-Recherche', active: true },
              { text: 'Wettbewerbsanalyse', active: false }
            ]
          },
          {
            name: 'Unternehmen / Agentur',
            desc: 'Große Unternehmen. Verwaltung von 10+ Websites.',
            price: 79,
            popular: false,
            features: [
              { text: 'SEO-Schulung & Support', active: true },
              { text: 'Berichte pro Tag', active: true },
              { text: 'Verfolgte Keywords', active: true },
              { text: 'Anzahl der Standorte', active: true },
              { text: 'Keyword-Recherche', active: true },
              { text: 'Wettbewerbsanalyse', active: true }
            ]
          }
        ],
        yearly: [
          {
            name: 'Individuell',
            desc: 'Selbstständige und kleine Unternehmen. Verwaltung von 1 Website.',
            price: 115,
            popular: true,
            features: [
              { text: 'SEO-Schulung & Support', active: true },
              { text: 'Berichte pro Tag', active: true },
              { text: 'Verfolgte Keywords', active: true },
              { text: 'Anzahl der Standorte', active: true },
              { text: 'Keyword-Recherche', active: false },
              { text: 'Wettbewerbsanalyse', active: false }
            ]
          },
          {
            name: 'Business',
            desc: 'Kleine Unternehmen. Verwaltung von 7 Websites.',
            price: 129,
            popular: false,
            features: [
              { text: 'SEO-Schulung & Support', active: true },
              { text: 'Berichte pro Tag', active: true },
              { text: 'Verfolgte Keywords', active: true },
              { text: 'Anzahl der Standorte', active: true },
              { text: 'Keyword-Recherche', active: true },
              { text: 'Wettbewerbsanalyse', active: false }
            ]
          },
          {
            name: 'Unternehmen / Agentur',
            desc: 'Große Unternehmen. Verwaltung von 10+ Websites.',
            price: 179,
            popular: false,
            features: [
              { text: 'SEO-Schulung & Support', active: true },
              { text: 'Berichte pro Tag', active: true },
              { text: 'Verfolgte Keywords', active: true },
              { text: 'Anzahl der Standorte', active: true },
              { text: 'Keyword-Recherche', active: true },
              { text: 'Wettbewerbsanalyse', active: true }
            ]
          }
        ]
      }
    },
    ar: {
      pageTitle: 'الأسعار',
      home: 'الرئيسية',
      sectionTitle: 'لنعمل معًا لإنشاء الشيء الكبير القادم',
      sectionDesc: 'نحن نقدم خطط أسعار مرنة تناسب احتياجاتك. اختر الخطة التي تناسب عملك.',
      monthlyTab: 'شهريًا',
      yearlyTab: 'سنويًا',
      month: 'شهر',
      year: 'سنة',
      getStarted: 'ابدأ الآن',
      included: 'ما يشمله:',
      popular: 'الأكثر شعبية',
      plans: {
        monthly: [
          {
            name: 'فردي',
            desc: 'للرواد والشركات الصغيرة. إدارة موقع واحد.',
            price: 15,
            popular: true,
            features: [
              { text: 'تدريب ودعم SEO', active: true },
              { text: 'تقارير يومية', active: true },
              { text: 'كلمات مفتاحية متابعة', active: true },
              { text: 'عدد المواقع', active: true },
              { text: 'بحث الكلمات المفتاحية', active: false },
              { text: 'تحليل المنافسين', active: false }
            ]
          },
          {
            name: 'تجاري',
            desc: 'للشركات الصغيرة. إدارة 7 مواقع.',
            price: 29,
            popular: false,
            features: [
              { text: 'تدريب ودعم SEO', active: true },
              { text: 'تقارير يومية', active: true },
              { text: 'كلمات مفتاحية متابعة', active: true },
              { text: 'عدد المواقع', active: true },
              { text: 'بحث الكلمات المفتاحية', active: true },
              { text: 'تحليل المنافسين', active: false }
            ]
          },
          {
            name: 'مؤسسة / وكالة',
            desc: 'للشركات الكبيرة. إدارة 10+ مواقع.',
            price: 79,
            popular: false,
            features: [
              { text: 'تدريب ودعم SEO', active: true },
              { text: 'تقارير يومية', active: true },
              { text: 'كلمات مفتاحية متابعة', active: true },
              { text: 'عدد المواقع', active: true },
              { text: 'بحث الكلمات المفتاحية', active: true },
              { text: 'تحليل المنافسين', active: true }
            ]
          }
        ],
        yearly: [
          {
            name: 'فردي',
            desc: 'للرواد والشركات الصغيرة. إدارة موقع واحد.',
            price: 115,
            popular: true,
            features: [
              { text: 'تدريب ودعم SEO', active: true },
              { text: 'تقارير يومية', active: true },
              { text: 'كلمات مفتاحية متابعة', active: true },
              { text: 'عدد المواقع', active: true },
              { text: 'بحث الكلمات المفتاحية', active: false },
              { text: 'تحليل المنافسين', active: false }
            ]
          },
          {
            name: 'تجاري',
            desc: 'للشركات الصغيرة. إدارة 7 مواقع.',
            price: 129,
            popular: false,
            features: [
              { text: 'تدريب ودعم SEO', active: true },
              { text: 'تقارير يومية', active: true },
              { text: 'كلمات مفتاحية متابعة', active: true },
              { text: 'عدد المواقع', active: true },
              { text: 'بحث الكلمات المفتاحية', active: true },
              { text: 'تحليل المنافسين', active: false }
            ]
          },
          {
            name: 'مؤسسة / وكالة',
            desc: 'للشركات الكبيرة. إدارة 10+ مواقع.',
            price: 179,
            popular: false,
            features: [
              { text: 'تدريب ودعم SEO', active: true },
              { text: 'تقارير يومية', active: true },
              { text: 'كلمات مفتاحية متابعة', active: true },
              { text: 'عدد المواقع', active: true },
              { text: 'بحث الكلمات المفتاحية', active: true },
              { text: 'تحليل المنافسين', active: true }
            ]
          }
        ]
      }
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
      this.monthlyPlans = this.texts[language as keyof typeof this.texts].plans.monthly as unknown as any[];
      this.yearlyPlans = this.texts[language as keyof typeof this.texts].plans.yearly as unknown as any[];
    }
  }
}