// import { Component } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-features',
//   templateUrl: './features.component.html',
//   styleUrls: ['./features.component.scss']
// })
// export class FeaturesComponent {
//   constructor(public router: Router) {}
// }
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent {
  currentLang: any = {};

  readonly texts = {
    en: {
      subTitle: 'TOP FEATURES',
      heading: 'I support my clients in creating innovative digital solutions by combining product engineering, UX/UI design and data mining.',
      description: 'My approach is based on three pillars: designing robust and scalable products, imagining intuitive, user-centric interfaces, and leveraging data to guide strategic decisions. This synergy enables the development of high-performance solutions that meet concrete needs, improve the customer experience, and support business growth.',
      card1Title: 'Product Engineering',
      card1Desc: 'Product engineering applies engineering principles to the entire product lifecycle, from initial design to post-launch support.',
      card2Title: 'UX/UI Design',
      card2Desc: 'UX/UI design creates digital products that deliver the best possible user experience by combining user experience (UX) and user interface (UI) design.',
      card3Title: 'Big Data & Analytics',
      card3Desc: 'Big data & analytics collects, examines, processes and leverages massive data sets to extract strategic insights.',
      viewMore: 'View more'
    },
    fr: {
      subTitle: 'FONCTIONNALITÉS CLÉS',
      heading: 'J’accompagne mes clients dans la création de solutions numériques innovantes en combinant ingénierie produit, design UX/UI et exploitation des données',
      description: 'Mon approche repose sur trois piliers : concevoir des produits solides et évolutifs, imaginer des interfaces intuitives centrées sur l’utilisateur, et valoriser la donnée pour orienter les décisions stratégiques. Cette synergie permet de développer des solutions performantes qui répondent aux besoins concrets, améliorent l’expérience client et soutiennent la croissance des entreprises.',
      card1Title: 'Ingénierie produit',
      card1Desc: 'L’ingénierie produit applique des principes d’ingénierie à l’ensemble du cycle de vie d’un produit, de sa conception initiale jusqu’à son support après lancement.',
      card2Title: 'Design UX/UI',
      card2Desc: 'Le design UX/UI crée des produits numériques offrant la meilleure expérience utilisateur possible en combinant l’expérience utilisateur (UX) et le design d’interface (UI).',
      card3Title: 'Big Data & Analytics',
      card3Desc: 'Le Big Data & Analytics consiste à collecter, examiner, traiter et exploiter des ensembles massifs de données pour en extraire des informations stratégiques.',
      viewMore: 'En savoir plus'
    },
    de: {
      subTitle: 'TOP-FUNKTIONEN',
      heading: 'Ik ondersteun mijn klanten bij het creëren van innovatieve digitale oplossingen door product engineering, UX/UI design en data mining te combineren.',
      description: 'Mijn aanpak is gebaseerd op drie pijlers: het ontwerpen van robuuste en schaalbare producten, het bedenken van intuïtieve, gebruikersgerichte interfaces en het benutten van data om strategische beslissingen te sturen. Deze synergie maakt de ontwikkeling mogelijk van hoogwaardige oplossingen die voldoen aan concrete behoeften, de klantervaring verbeteren en bedrijfsgroei ondersteunen.',
      card1Title: 'Produkt-Engineering',
      card1Desc: 'Produkt-Engineering wendet Ingenieurprinzipien auf den gesamten Produktlebenszyklus an – vom ersten Design bis zum Support nach dem Launch.',
      card2Title: 'UX/UI-Design',
      card2Desc: 'UX/UI-Design entwickelt digitale Produkte, die das bestmögliche Nutzererlebnis bieten, indem es User-Experience (UX) und Interface-Design (UI) verbindet.',
      card3Title: 'Big Data & Analytics',
      card3Desc: 'Big Data & Analytics erfasst, untersucht, verarbeitet und nutzt riesige Datenmengen, um strategische Erkenntnisse zu gewinnen.',
      viewMore: 'Mehr anzeigen'
    },
    ar: {
      subTitle: 'أهم الميزات',
      heading: 'أدعم عملائي في إنشاء حلول رقمية مبتكرة من خلال الجمع بين هندسة المنتجات وتصميم تجربة المستخدم وواجهة المستخدم واستخراج البيانات.',
      description: 'يعتمد نهجي على ثلاثة ركائز أساسية: تصميم منتجات متينة وقابلة للتطوير، وتصور واجهات استخدام سهلة الاستخدام، وتركيز على المستخدم، والاستفادة من البيانات لتوجيه القرارات الاستراتيجية. يُمكّن هذا التآزر من تطوير حلول عالية الأداء تُلبي احتياجات ملموسة، وتُحسّن تجربة العملاء، وتدعم نمو الأعمال.',
      card1Title: 'هندسة المنتج',
      card1Desc: 'هندسة المنتج تطبق مبادئ الهندسة على دورة حياة المنتج بالكامل، من التصميم الأولي إلى الدعم بعد الإطلاق.',
      card2Title: 'تصميم UX/UI',
      card2Desc: 'تصميم UX/UI يبتكر منتجات رقمية تقدم أفضل تجربة ممكنة للمستخدم من خلال دمج تجربة المستخدم (UX) وتصميم الواجهة (UI).',
      card3Title: 'البيغ داتا والتحليلات',
      card3Desc: 'البيغ داتا والتحليلات تجمع، تفحص، تعالج وتستغل مجموعات بيانات ضخمة لاستخلاص رؤى استراتيجية.',
      viewMore: 'عرض المزيد'
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