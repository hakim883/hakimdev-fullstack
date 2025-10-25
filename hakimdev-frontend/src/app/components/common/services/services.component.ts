
// import { Component } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//     selector: 'app-services',
//     templateUrl: './services.component.html',
//     styleUrls: ['./services.component.scss']
// })
// export class ServicesComponent {
//     currentLang: any = {};
//     readonly langs = {
//         en: {
//             subTitle: 'OUR SERVICES',
//             heading: 'We provide creative solutions for your business',
//             description: 'Tailored strategies and cutting-edge technology to transform your ideas into profitable, scalable realities.',
//             strategyTitle: 'Business Strategy',
//             strategyDesc: 'Define clear road-maps, prioritize objectives, and outpace competitors with data-driven insights.',
//             webTitle: 'Web Development',
//             webDesc: 'Fast, secure, and scalable websites and APIs built with Angular, Spring Boot, and cloud best practices.',
//             marketingTitle: 'Digital Marketing',
//             marketingDesc: 'SEO, content, and paid campaigns that attract the right audience and convert visitors into loyal customers.',
//             graphicsTitle: 'Graphics Design',
//             graphicsDesc: 'Eye-catching visuals, branding assets, and UI/UX mock-ups that communicate your message instantly.',
//             viewMore: 'View More',
//             viewAll: 'View All Services'
//         },
//         fr: {
//             subTitle: 'NOS SERVICES',
//             heading: 'Des solutions créatives pour votre entreprise',
//             description: 'Stratégies sur mesure et technologies de pointe pour transformer vos idées en réalités rentables et évolutives.',
//             strategyTitle: 'Stratégie d’entreprise',
//             strategyDesc: 'Définir des feuilles de route claires, prioriser les objectifs et dépasser la concurrence grâce à des insights basés sur les données.',
//             webTitle: 'Développement Web',
//             webDesc: 'Sites et API rapides, sécurisés et évolutifs, construits avec Angular, Spring Boot et les meilleures pratiques cloud.',
//             marketingTitle: 'Marketing Digital',
//             marketingDesc: 'SEO, contenu et campagnes payantes qui attirent la bonne audience et convertissent les visiteurs en clients fidèles.',
//             graphicsTitle: 'Design Graphique',
//             graphicsDesc: 'Visuels percutants, chartes graphiques et maquettes UI/UX qui transmettent votre message instantanément.',
//             viewMore: 'En savoir plus',
//             viewAll: 'Tous les services'
//         },
//         es: {
//             subTitle: 'NUESTROS SERVICIOS',
//             heading: 'Brindamos soluciones creativas para tu negocio',
//             description: 'Estrategias a medida y tecnología punta para convertir tus ideas en realidades rentables y escalables.',
//             strategyTitle: 'Estrategia Empresarial',
//             strategyDesc: 'Define planes claros, prioriza objetivos y supera a la competencia con análisis basados en datos.',
//             webTitle: 'Desarrollo Web',
//             webDesc: 'Sitios y APIs rápidos, seguros y escalables, construidos con Angular, Spring Boot y mejores prácticas en la nube.',
//             marketingTitle: 'Marketing Digital',
//             marketingDesc: 'SEO, contenido y campañas pagadas que atraen la audiencia correcta y convierten visitantes en clientes leales.',
//             graphicsTitle: 'Diseño Gráfico',
//             graphicsDesc: 'Visuales impactantes, elementos de marca y mock-ups UI/UX que comunican tu mensaje al instante.',
//             viewMore: 'Ver más',
//             viewAll: 'Ver todos los servicios'
//         },
//         ar: {
//             subTitle: 'خدماتنا',
//             heading: 'نقدم حلولًا مبتكرة لعملك',
//             description: 'استراتيجيات مخصصة وتكنولوجيا متقدمة لتحويل أفكارك إلى حقائق مربحة وقابلة للتوسع.',
//             strategyTitle: 'استراتيجية الأعمال',
//             strategyDesc: 'تحديد خرائط طريق واضحة، ترتيب الأولويات، والتفوق على المنافسين من خلال رؤى قائمة على البيانات.',
//             webTitle: 'تطوير الويب',
//             webDesc: 'مواقع وواجهات برمجة سريعة وآمنة وقابلة للتوسع، مبنية باستخدام Angular وSpring Boot وأفضل ممارسات السحابة.',
//             marketingTitle: 'التسويق الرقمي',
//             marketingDesc: 'تحسين محركات البحث، المحتوى والحملات المدفوعة التي تجذب الجمهور المناسب وتحوّل الزوار إلى عملاء أوفياء.',
//             graphicsTitle: 'التصميم الجرافيكي',
//             graphicsDesc: 'صور مذهلة، عناصر هوية بصرية ونماذج UI/UX تنقل رسالتك في لحظة.',
//             viewMore: 'عرض المزيد',
//             viewAll: 'عرض جميع الخدمات'
//         }
//     };

//     constructor(public router: Router) {
//         this.currentLang = this.langs.en; // par défaut
//     }
// }
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  currentLang: any = {};

  readonly texts = {
    en: {
      subTitle: 'OUR SERVICES',
      heading: 'We provide creative solutions for your business',
      description:
        'Tailored strategies and cutting-edge technology to transform your ideas into profitable, scalable realities.',
      strategyTitle: 'Business Strategy',
      strategyDesc:
        'Define clear road-maps, prioritize objectives, and outpace competitors with data-driven insights.',
      webTitle: 'Web Development',
      webDesc:
        'Fast, secure, and scalable websites and APIs built with Angular, Spring Boot, and cloud best practices.',
      marketingTitle: 'Digital Marketing',
      marketingDesc:
        'SEO, content, and paid campaigns that attract the right audience and convert visitors into loyal customers.',
      graphicsTitle: 'Graphics Design',
      graphicsDesc:
        'Eye-catching visuals, branding assets, and UI/UX mock-ups that communicate your message instantly.',
      viewMore: 'View More',
      viewAll: 'View All Services'
    },
    fr: {
      subTitle: 'NOS SERVICES',
      heading: 'Des solutions créatives pour votre entreprise',
      description:
        'Stratégies sur mesure et technologies de pointe pour transformer vos idées en réalités rentables et évolutives.',
      strategyTitle: 'Stratégie d’entreprise',
      strategyDesc:
        'Définir des feuilles de route claires, prioriser les objectifs et dépasser la concurrence grâce à des insights basés sur les données.',
      webTitle: 'Développement Web',
      webDesc:
        'Sites et API rapides, sécurisés et évolutifs, construits avec Angular, Spring Boot et les meilleures pratiques cloud.',
      marketingTitle: 'Marketing Digital',
      marketingDesc:
        'SEO, contenu et campagnes payantes qui attirent la bonne audience et convertissent les visiteurs en clients fidèles.',
      graphicsTitle: 'Design Graphique',
      graphicsDesc:
        'Visuels percutants, chartes graphiques et maquettes UI/UX qui transmettent votre message instantanément.',
      viewMore: 'En savoir plus',
      viewAll: 'Tous les services'
    },
    de: {
      subTitle: 'UNSERE DIENSTLEISTUNGEN',
      heading: 'Kreative Lösungen für Ihr Unternehmen',
      description:
        'Maßgeschneiderte Strategien und modernste Technologien, um Ihre Ideen in profitable, skalierbare Realitäten zu verwandeln.',
      strategyTitle: 'Unternehmensstrategie',
      strategyDesc:
        'Klare Roadmaps definieren, Ziele priorisieren und Wettbewerber mit datengesteuerten Erkenntnissen übertreffen.',
      webTitle: 'Web-Entwicklung',
      webDesc:
        'Schnelle, sichere und skalierbare Websites und APIs, entwickelt mit Angular, Spring Boot und Cloud-Best Practices.',
      marketingTitle: 'Digitales Marketing',
      marketingDesc:
        'SEO, Content- und Paid-Kampagnen, die die richtige Zielgruppe anziehen und Besucher in treue Kunden verwandeln.',
      graphicsTitle: 'Grafikdesign',
      graphicsDesc:
        'Auffällige Visuals, Branding-Assets und UI/UX-Mock-ups, die Ihre Botschaft sofort vermitteln.',
      viewMore: 'Mehr anzeigen',
      viewAll: 'Alle Dienstleistungen'
    },
    ar: {
      subTitle: 'خدماتنا',
      heading: 'نقدم حلولاً مبتكرة لعملك',
      description:
        'استراتيجيات مخصصة وتكنولوجيا متقدمة لتحويل أفكارك إلى حقائق مربحة وقابلة للتوسع.',
      strategyTitle: 'استراتيجية الأعمال',
      strategyDesc:
        'تحديد خرائط طريق واضحة، ترتيب الأولويات، والتفوق على المنافسين من خلال رؤى قائمة على البيانات.',
      webTitle: 'تطوير الويب',
      webDesc:
        'مواقع وواجهات برمجة سريعة وآمنة وقابلة للتوسع، مبنية باستخدام Angular وSpring Boot وأفضل ممارسات السحابة.',
      marketingTitle: 'التسويق الرقمي',
      marketingDesc:
        'تحسين محركات البحث، المحتوى والحملات المدفوعة التي تجذب الجمهور المناسب وتحوّل الزوار إلى عملاء أوفياء.',
      graphicsTitle: 'التصميم الجرافيكي',
      graphicsDesc:
        'صور مذهلة، عناصر هوية بصرية ونماذج UI/UX تنقل رسالتك في لحظة.',
      viewMore: 'عرض المزيد',
      viewAll: 'عرض جميع الخدمات'
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