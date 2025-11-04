// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-services-page-one',
//   templateUrl: './services-page-one.component.html',
//   styleUrls: ['./services-page-one.component.scss']
// })
// export class ServicesPageOneComponent {

// }
// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-services-page-one',
//   templateUrl: './services-page-one.component.html',
//   styleUrls: ['./services-page-one.component.scss']
// })
// export class ServicesPageOneComponent implements OnInit {
//   services: any[] = [];

//   constructor(private http: HttpClient) {}

//   ngOnInit() {
//     this.http.get<any[]>('http://localhost:8080/api/services')
//       .subscribe(data => this.services = data);
//   }
// }








// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-services-page-one',
//   templateUrl: './services-page-one.component.html',
//   styleUrls: ['./services-page-one.component.scss']
// })
// export class ServicesPageOneComponent {}
import { Component } from '@angular/core';

@Component({
  selector: 'app-services-page-one',
  templateUrl: './services-page-one.component.html',
  styleUrls: ['./services-page-one.component.scss']
})
export class ServicesPageOneComponent {
  currentLang: any = {};
  services: any[] = [];

  readonly texts = {
    en: {
      pageTitle: 'Services',
      home: 'Home',
      viewMore: 'View More',
      services: [
        {
          icon: 'flaticon-presentation',
          title: 'Business Strategy',
          desc: 'A plan that defines how a business proposes, manages and delivers services to meet customer needs and align operations with business goals.'
        },
        {
          icon: 'flaticon-web-programming',
          title: 'Web Development',
          desc: 'A professional service that includes the design, creation, deployment and maintenance of websites and online applications using HTML, CSS, JavaScript, PHP or Python.'
        },
        {
          icon: 'flaticon-content-management',
          title: 'Digital Marketing',
          desc: 'A set of techniques and strategies using digital channels to promote products, services or brands and generate sales.'
        },
        {
          icon: 'flaticon-curve',
          title: 'Graphics Design',
          desc: 'Creating unique visual compositions combining images, text and colors to effectively convey a message to a target audience.'
        },
        {
          icon: 'flaticon-data',
          title: 'Data Analysis',
          desc: 'Collecting, cleaning, transforming and modelling raw data to extract relevant information and trends for informed decision-making.'
        },
        {
          icon: 'flaticon-coding',
          title: 'App Development',
          desc: 'Designing, creating, implementing, testing and maintaining software, web or mobile applications to meet specific needs.'
        },
        {
          icon: 'flaticon-taget',
          title: 'UI & UX Design',
          desc: 'Designing digital products so they are both performant and enjoyable to use, focusing on user experience and visual interface.'
        },
        {
          icon: 'flaticon-diagram-1',
          title: 'Web Branding',
          desc: 'Defining, developing and managing a company’s visual identity and reputation online to create a strong and consistent brand image.'
        }
      ]
    },
    fr: {
      pageTitle: 'Services',
      home: 'Accueil',
      viewMore: 'En savoir plus',
      services: [
        {
          icon: 'flaticon-presentation',
          title: 'Stratégie d’entreprise',
          desc: 'Un plan qui définit la manière dont une entreprise propose, gère et fournit des services pour répondre aux besoins des clients.'
        },
        {
          icon: 'flaticon-web-programming',
          title: 'Développement Web',
          desc: 'Service professionnel incluant la conception, la création, le déploiement et la maintenance de sites et applications en ligne.'
        },
        {
          icon: 'flaticon-content-management',
          title: 'Marketing digital',
          desc: 'Ensemble de techniques et stratégies utilisant les canaux numériques pour promouvoir des produits ou services.'
        },
        {
          icon: 'flaticon-curve',
          title: 'Design graphique',
          desc: 'Création de compositions visuelles uniques combinant images, textes et couleurs pour transmettre un message efficacement.'
        },
        {
          icon: 'flaticon-data',
          title: 'Analyse de données',
          desc: 'Collecte, nettoyage, transformation et modélisation des données brutes pour extraire des informations pertinentes.'
        },
        {
          icon: 'flaticon-coding',
          title: 'Développement d’applications',
          desc: 'Conception, création, test et maintenance d’applications logicielles, web ou mobiles répondant à des besoins spécifiques.'
        },
        {
          icon: 'flaticon-taget',
          title: 'Design UI/UX',
          desc: 'Conception de produits numériques performants et agréables à utiliser, centrés sur l’expérience utilisateur.'
        },
        {
          icon: 'flaticon-diagram-1',
          title: 'Branding web',
          desc: 'Branding web: Définir, développer et gérer l’identité visuelle et la réputation d’une entreprise en ligne.'
        }
      ]
    },
    de: {
      pageTitle: 'Dienstleistungen',
      home: 'Startseite',
      viewMore: 'Mehr anzeigen',
      services: [
        {
          icon: 'flaticon-presentation',
          title: 'Unternehmensstrategie',
          desc: 'Ein Plan, der definiert, wie ein Unternehmen Dienstleistungen anbietet, verwaltet und liefert, um Kundenbedürfnisse zu erfüllen.'
        },
        {
          icon: 'flaticon-web-programming',
          title: 'Web-Entwicklung',
          desc: 'Professioneller Service, der Design, Erstellung, Bereitstellung und Wartung von Websites und Online-Anwendungen umfasst.'
        },
        {
          icon: 'flaticon-content-management',
          title: 'Digitales Marketing',
          desc: 'Satz von Techniken und Strategien zur Förderung von Produkten oder Dienstleistungen über digitale Kanäle.'
        },
        {
          icon: 'flaticon-curve',
          title: 'Grafikdesign',
          desc: 'Erstellung einzigartiger visueller Kompositionen aus Bildern, Texten und Farben zur effektiven Botschaftsübermittlung.'
        },
        {
          icon: 'flaticon-data',
          title: 'Datenanalyse',
          desc: 'Sammeln, Bereinigen, Transformieren und Modellieren von Rohdaten zur Extraktion relevanter Informationen.'
        },
        {
          icon: 'flaticon-coding',
          title: 'App-Entwicklung',
          desc: 'Design, Erstellung, Test und Wartung von Software-, Web- oder mobilen Anwendungen für spezifische Bedürfnisse.'
        },
        {
          icon: 'flaticon-taget',
          title: 'UI & UX Design',
          desc: 'Gestaltung leistungsfähiger und benutzerfreundlicher digitaler Produkte mit Fokus auf Nutzererfahrung.'
        },
        {
          icon: 'flaticon-diagram-1',
          title: 'Web-Branding',
          desc: 'Definition, Entwicklung und Verwaltung der visuellen Identität und Reputation eines Unternehmens online.'
        }
      ]
    },
    ar: {
      pageTitle: 'الخدمات',
      home: 'الرئيسية',
      viewMore: 'عرض المزيد',
      services: [
        {
          icon: 'flaticon-presentation',
          title: 'استراتيجية الأعمال',
          desc: 'خطة تحدد كيفية تقديم الشركة لخدماتها وإدارتها وتسليمها لتلبية احتياجات العملاء.'
        },
        {
          icon: 'flaticon-web-programming',
          title: 'تطوير الويب',
          desc: 'خدمة احترافية تشمل تصميم وإنشاء ونشر وصيانة المواقع والتطبيقات الإلكترونية.'
        },
        {
          icon: 'flaticon-content-management',
          title: 'التسويق الرقمي',
          desc: 'مجموعة من التقنيات والاستراتيجيات لاستخدام القنوات الرقمية في الترويج للمنتجات والخدمات.'
        },
        {
          icon: 'flaticon-curve',
          title: 'التصميم الجرافيكي',
          desc: 'إنشاء تراكيب بصرية فريدة تجمع بين الصور والنصوص والألوان لإيصال رسالة فعالة.'
        },
        {
          icon: 'flaticon-data',
          title: 'تحليل البيانات',
          desc: 'جمع وتنظيف وتحويل ونمذجة البيانات الخام لاستخراج معلومات ذات صلة.'
        },
        {
          icon: 'flaticon-coding',
          title: 'تطوير التطبيقات',
          desc: 'تصميم وإنشاء واختبار وصيانة التطبيقات البرمجية أو الويب أو الجوال لتلبية احتياجات محددة.'
        },
        {
          icon: 'flaticon-taget',
          title: 'تصميم UI و UX',
          desc: 'تصميم منتجات رقمية فعالة وسهلة الاستخدام مع التركيز على تجربة المستخدم.'
        },
        {
          icon: 'flaticon-diagram-1',
          title: 'العلامة التجارية على الويب',
          desc: 'تحديد وتطوير وإدارة الهوية البصرية وسمعة الشركة على الإنترنت.'
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
      const selected = this.texts[language as keyof typeof this.texts];
      this.currentLang = {
        pageTitle: selected.pageTitle,
        home: selected.home,
        viewMore: selected.viewMore
      };
      this.services = selected.services as unknown as any[];    }
  }
}