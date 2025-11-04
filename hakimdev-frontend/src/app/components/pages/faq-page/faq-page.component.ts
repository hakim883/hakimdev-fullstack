
import { Component } from '@angular/core';

@Component({
  selector: 'app-faq-page',
  templateUrl: './faq-page.component.html',
  styleUrls: ['./faq-page.component.scss']
})
export class FaqPageComponent {
  currentLang: any = {};

  oneAtATime = true;
  isFirstOpen = true;

  readonly texts = {
    en: {
      pageTitle: 'FAQ',
      home: 'Home',
      questions: [
        {
          title: 'What is the company culture?',
          answer: 'We foster a collaborative, innovative and transparent culture where every idea counts and continuous learning is encouraged.'
        },
        {
          title: 'Which market is the startup targeting?',
          answer: 'Our primary focus is on the Swiss and European SMEs looking to digitize and scale their businesses.'
        },
        {
          title: 'What is the runway of the business?',
          answer: 'With sustainable revenue and prudent cash-flow management, we remain agile for the next 24 months and beyond.'
        },
        {
          title: 'Who are the investors in the company?',
          answer: 'We are proudly bootstrapped and supported by a network of private Swiss business angels and strategic partners.'
        },
        {
          title: 'How do you ask about your business?',
          answer: 'Book a free 30-minute discovery call via the contact form, and we will guide you step by step.'
        },
        {
          title: 'What does a digital marketing agency do?',
          answer: 'We craft data-driven strategies, create engaging content, manage ads and optimize SEO to grow your online presence.'
        },
        {
          title: 'What is Search Engine Optimization?',
          answer: 'SEO is the process of improving your website’s visibility on search engines to attract organic, high-quality traffic.'
        },
        {
          title: 'How do SEOs choose keywords?',
          answer: 'Through market research, competitor analysis and user-intent data to target terms that convert.'
        },
        {
          title: 'Do I need to pay for services upfront?',
          answer: 'We offer flexible packages—monthly, milestone-based or retainer—to match your cash-flow needs.'
        },
        {
          title: 'What makes for a good web design?',
          answer: 'Speed, accessibility, mobile-first layout, clear navigation and strong visual identity aligned with your brand.'
        }
      ]
    },
    fr: {
      pageTitle: 'FAQ',
      home: 'Accueil',
      questions: [
        {
          title: 'Quelle est la culture de l’entreprise ?',
          answer: 'Nous encourageons la collaboration, l’innovation et la transparence où chaque idée compte et l’apprentissage continu est la norme.'
        },
        {
          title: 'Quel marché vise le projet ?',
          answer: 'Nous ciblons principalement les PME suisses et européennes qui souhaitent se digitaliser et se développer.'
        },
        {
          title: 'Quelle est la visibilité financière ?',
          answer: 'Grâce à des revenus récurrents et une gestion rigoureuse, nous restons agiles pour les 24 prochains mois.'
        },
        {
          title: 'Qui sont les investisseurs ?',
          answer: 'Nous sommes autofinancés et soutenus par des business angels suisses et des partenaires stratégiques.'
        },
        {
          title: 'Comment poser une question sur mon projet ?',
          answer: 'Réservez un appel découverte gratuit de 30 minutes via le formulaire de contact.'
        },
        {
          title: 'Que fait une agence de marketing digital ?',
          answer: 'Nous élaborons des stratégies data-driven, créons du contenu engageant et optimisons le SEO pour faire croître votre présence en ligne.'
        },
        {
          title: 'Qu’est-ce que le SEO ?',
          answer: 'Le SEO améliore la visibilité de votre site sur les moteurs de recherche pour attirer un trafic organique de qualité.'
        },
        {
          title: 'Comment choisir les bons mots-clés ?',
          answer: 'Grâce à l’analyse du marché, de la concurrence et de l’intention utilisateur.'
        },
        {
          title: 'Dois-je payer à l’avance ?',
          answer: 'Nous proposons des forfaits flexibles : mensuel, par étapes ou en régie.'
        },
        {
          title: 'Qu’est-ce qu’un bon design web ?',
          answer: 'Rapidité, accessibilité, responsive, navigation claire et identité visuelle cohérente.'
        }
      ]
    },
    de: {
      pageTitle: 'FAQ',
      home: 'Startseite',
      questions: [
        {
          title: 'Was ist die Unternehmenskultur?',
          answer: 'Wir fördern Kollaboration, Innovation und Transparenz, wo jede Idee zählt und kontinuierliches Lernen gelebt wird.'
        },
        {
          title: 'Welchen Markt adressiert das Startup?',
          answer: 'Unser Fokus liegt auf Schweizer und europäischen KMU, die digitalisieren und skalieren möchten.'
        },
        {
          title: 'Wie ist die finanzielle Laufzeit?',
          answer: 'Durch wiederkehrende Einnahmen und solide Cash-Flow-Steuerung bleiben wir 24 Monate und länger agil.'
        },
        {
          title: 'Wer sind die Investoren?',
          answer: 'Wir sind bootstrapped und werden von Schweizer Business-Angels und strategischen Partnern unterstützt.'
        },
        {
          title: 'Wie kann ich mein Projekt besprechen?',
          answer: 'Buchen Sie einen kostenlosen 30-minütigen Discovery-Call über das Kontaktformular.'
        },
        {
          title: 'Was macht eine Digital-Marketing-Agentur?',
          answer: 'Wir entwickeln datengesteuerte Strategien, erstellen ansprechende Inhalte und optimieren SEO für Ihre Online-Präsenz.'
        },
        {
          title: 'Was ist SEO?',
          answer: 'SEO verbessert die Sichtbarkeit Ihrer Website in Suchmaschinen, um qualitativen organischen Traffic zu generieren.'
        },
        {
          title: 'Wie wählt man Keywords aus?',
          answer: 'Durch Marktanalyse, Wettbewerbsforschung und Nutzer-Intent-Daten.'
        },
        {
          title: 'Muss ich im Voraus zahlen?',
          answer: 'Flexible Modelle: monatlich, meilensteinbasiert oder auf Abruf.'
        },
        {
          title: 'Was macht gutes Web-Design aus?',
          answer: 'Geschwindigkeit, Barrierefreiheit, mobile Optimierung, klare Navigation und konsistente Markenidentität.'
        }
      ]
    },
    ar: {
      pageTitle: 'الأسئلة الشائعة',
      home: 'الرئيسية',
      questions: [
        {
          title: 'ما هي ثقافة الشركة؟',
          answer: 'نحن نشجع على التعاون والابتكار والشفافية، حيث تحسب كل فكرة والتعلم المستمر هو المعيار.'
        },
        {
          title: 'ما السوق الذي يستهدفه المشروع؟',
          answer: 'نركز بشكل أساسي على الشركات الصغيرة والمتوسطة السويسرية والأوروبية التي تسعى للتحول الرقمي.'
        },
        {
          title: 'ما هو مدى الاستقرار المالي؟',
          answer: 'بفضل الإيرادات المتكررة والإدارة المالية الحذرة، نبقى مرنين لمدة 24 شهرًا وأكثر.'
        },
        {
          title: 'من هم المستثمرون؟',
          answer: 'نحن مموّلون ذاتيًا ومدعومون من قبل مستثمرين سويسريين وشركاء استراتيجيين.'
        },
        {
          title: 'كيف يمكنني مناقشة مشروعي؟',
          answer: 'احجز مكالمة استكشافية مجانية مدتها 30 دقيقة عبر نموذج الاتصال.'
        },
        {
          title: 'ماذا تفعل وكالة التسويق الرقمي؟',
          answer: 'نقوم بوضع استراتيجيات قائمة على البيانات، وإنشاء محتوى جذاب وتحسين SEO لنمو حضورك الرقمي.'
        },
        {
          title: 'ما هو SEO؟',
          answer: 'SEO يحسن ظهور موقعك في محركات البحث لجذب حركة مرور عضوية عالية الجودة.'
        },
        {
          title: 'كيف يتم اختيار الكلمات المفتاحية؟',
          answer: 'من خلال تحليل السوق والمنافسين وبيانات نية المستخدم.'
        },
        {
          title: 'هل يجب الدفع مقدمًا؟',
          answer: 'نقدم نماذج مرنة: شهري، حسب المراحل، أو عند الطلب.'
        },
        {
          title: 'ما الذي يجعل تصميم الويب جيدًا؟',
          answer: 'السرعة، إمكانية الوصول، التصميم المستجيب، التنقل الواضح وهوية العلامة التجارية المتسقة.'
        }
      ]
    }
  };

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