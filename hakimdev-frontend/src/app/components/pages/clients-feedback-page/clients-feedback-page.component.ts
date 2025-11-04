
import { Component } from '@angular/core';

@Component({
  selector: 'app-clients-feedback-page',
  templateUrl: './clients-feedback-page.component.html',
  styleUrls: ['./clients-feedback-page.component.scss']
})
export class ClientsFeedbackPageComponent {
  currentLang: any = {};

  readonly texts = {
    en: {
      pageTitle: 'Client Feedback',
      home: 'Home',
      feedback: 'Client Feedback',
      feedbacks: [
        {
          comment: 'Hakim delivered a full-stack application ahead of schedule and it runs flawlessly in production.',
          name: 'Jasika Alloy',
          role: 'CTO at Envato'
        },
        {
          comment: 'From design to deployment, every detail was handled with precision and creativity.',
          name: 'James Andy',
          role: 'CTO at EnvyTheme'
        },
        {
          comment: 'The multilingual portal Hakim built doubled our conversion rate within three months.',
          name: 'Alina Smith',
          role: 'CTO at ThemeForest'
        },
        {
          comment: 'Scalable architecture and clear documentation made onboarding new developers seamless.',
          name: 'Carlos Ruiz',
          role: 'CEO at StartupX'
        },
        {
          comment: 'Training sessions were engaging and our team now masters Spring Boot and Angular.',
          name: 'Sophie Laurent',
          role: 'Head of Engineering, SwissTech'
        },
        {
          comment: 'Speed, security, and elegant UX—exactly what we needed for our SaaS product.',
          name: 'Nadia Rahman',
          role: 'Product Lead, Cloudify'
        },
        {
          comment: 'Hakim’s availability in Romandy Switzerland allowed us to iterate in real time.',
          name: 'Mark Müller',
          role: 'Founder, AlpineWorks'
        },
        {
          comment: 'Excellent communication in French, English and Arabic; a true polyglot developer.',
          name: 'Amina Benali',
          role: 'Marketing Director, GlobalReach'
        },
        {
          comment: 'Our e-commerce platform now handles 10× traffic thanks to Hakim’s performance tuning.',
          name: 'Luca Rossi',
          role: 'COO, ShopFast'
        }
      ]
    },
    fr: {
      pageTitle: 'Retours clients',
      home: 'Accueil',
      feedback: 'Retours clients',
      feedbacks: [
        {
          comment: 'Hakim a livré une application full-stack en avance et elle fonctionne parfaitement en production.',
          name: 'Jasika Alloy',
          role: 'CTO chez Envato'
        },
        {
          comment: 'Du design au déploiement, chaque détail a été géré avec précision et créativité.',
          name: 'James Andy',
          role: 'CTO chez EnvyTheme'
        },
        {
          comment: 'Le portail multilingue de Hakim a doublé notre taux de conversion en trois mois.',
          name: 'Alina Smith',
          role: 'CTO chez ThemeForest'
        },
        {
          comment: 'Architecture évolutive et documentation claire ; intégration des nouveaux développeurs simplifiée.',
          name: 'Carlos Ruiz',
          role: 'CEO chez StartupX'
        },
        {
          comment: 'Formations captivantes ; notre équipe maîtrise désormais Spring Boot et Angular.',
          name: 'Sophie Laurent',
          role: 'Head of Engineering, SwissTech'
        },
        {
          comment: 'Vitesse, sécurité et UX élégante—exactement ce dont notre SaaS avait besoin.',
          name: 'Nadia Rahman',
          role: 'Product Lead, Cloudify'
        },
        {
          comment: 'Sa présence en Suisse romande nous a permis d’itérer en temps réel.',
          name: 'Mark Müller',
          role: 'Founder, AlpineWorks'
        },
        {
          comment: 'Communication fluide en français, anglais et arabe ; un développeur polyglotte.',
          name: 'Amina Benali',
          role: 'Directrice Marketing, GlobalReach'
        },
        {
          comment: 'Notre plateforme e-commerce gère désormais 10× plus de trafic grâce à ses optimisations.',
          name: 'Luca Rossi',
          role: 'COO, ShopFast'
        }
      ]
    },
    es: {
      pageTitle: 'Opiniones de clientes',
      home: 'Inicio',
      feedback: 'Opiniones',
      feedbacks: [
        {
          comment: 'Hakim entregó una aplicación full-stack antes de tiempo y funciona perfectamente en producción.',
          name: 'Jasika Alloy',
          role: 'CTO en Envato'
        },
        {
          comment: 'Desde el diseño hasta el despliegue, cada detalle fue manejado con precisión y creatividad.',
          name: 'James Andy',
          role: 'CTO en EnvyTheme'
        },
        {
          comment: 'El portal multilingüe de Hakim duplicó nuestra tasa de conversión en tres meses.',
          name: 'Alina Smith',
          role: 'CTO en ThemeForest'
        },
        {
          comment: 'Arquitectura escalable y documentación clara; integración de nuevos desarrolladores sin fricciones.',
          name: 'Carlos Ruiz',
          role: 'CEO en StartupX'
        },
        {
          comment: 'Las sesiones de formación fueron dinámicas y ahora dominamos Spring Boot y Angular.',
          name: 'Sophie Laurent',
          role: 'Head of Engineering, SwissTech'
        },
        {
          comment: 'Velocidad, seguridad y UX elegante—justo lo que necesitábamos para nuestro SaaS.',
          name: 'Nadia Rahman',
          role: 'Product Lead, Cloudify'
        },
        {
          comment: 'Su presencia en Suiza romanda nos permitió iterar en tiempo real.',
          name: 'Mark Müller',
          role: 'Founder, AlpineWorks'
        },
        {
          comment: 'Excelente comunicación en francés, inglés y árabe; un verdadero desarrollador políglota.',
          name: 'Amina Benali',
          role: 'Marketing Director, GlobalReach'
        },
        {
          comment: 'Nuestra plataforma e-commerce ahora maneja 10× más tráfico gracias a sus optimizaciones.',
          name: 'Luca Rossi',
          role: 'COO, ShopFast'
        }
      ]
    },
    ar: {
      pageTitle: 'آراء العملاء',
      home: 'الرئيسية',
      feedback: 'آراء العملاء',
      feedbacks: [
        {
          comment: 'سلّم Hakim تطبيقًا كاملًا قبل الموعد ويعمل بكفاءة في الإنتاج.',
          name: 'جاسيكا ألوي',
          role: 'CTO في Envato'
        },
        {
          comment: 'من التصميم إلى النشر، كل تفصيل تم التعامل معه بدقة وإبداع.',
          name: 'جيمس آندي',
          role: 'CTO في EnvyTheme'
        },
        {
          comment: 'البوابة متعددة اللغات التي بناها Hakim مضاعفت معدل التحويل خلال ثلاثة أشهر.',
          name: 'ألينا سميث',
          role: 'CTO في ThemeForest'
        },
        {
          comment: 'بنية قابلة للتوسع وتوثيق واضح؛ تكامل المطورين الجدد بسلاسة.',
          name: 'كارلوس رويز',
          role: 'CEO في StartupX'
        },
        {
          comment: 'كانت جلسات التدريب ممتعة وفريقنا أصبح يتقن Spring Boot و Angular.',
          name: 'صوفي لوران',
          role: 'Head of Engineering في SwissTech'
        },
        {
          comment: 'السرعة، الأمان وتجربة مستخدم أنيقة—بالضبط ما كنا بحاجة إليه لمنتج SaaS.',
          name: 'نادية رحمن',
          role: 'Product Lead في Cloudify'
        },
        {
          comment: 'وجوده في سويسرا الروماندية مكّننا من التكرار في الوقت الفعلي.',
          name: 'مارك مولر',
          role: 'Founder في AlpineWorks'
        },
        {
          comment: 'تواصل رائع بالفرنسية، الإنجليزية والعربية؛ مطور متعدد اللغات حقيقي.',
          name: 'أمينة بن علي',
          role: 'مديرة تسويق في GlobalReach'
        },
        {
          comment: 'منصتنا للتجارة الإلكترونية تتحمل الآن 10× من الزوار بفضل تحسيناته.',
          name: 'لوكا روسي',
          role: 'COO في ShopFast'
        }
      ]
    }
  } as const;

  constructor() {
    const saved = localStorage.getItem('lang') || 'fr';
    this.switchLang(saved);
  }

  switchLang(language: string): void {
    const keys = ['en', 'fr', 'es', 'ar'] as const;
    if (keys.includes(language as any)) {
      this.currentLang = this.texts[language as keyof typeof this.texts];
    }
  }
}