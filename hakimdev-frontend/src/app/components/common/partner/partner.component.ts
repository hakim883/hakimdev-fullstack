// import { Component } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//     selector: 'app-partner',
//     templateUrl: './partner.component.html',
//     styleUrls: ['./partner.component.scss']
// })
// export class PartnerComponent {

//     constructor(
//         public router: Router
//     ) { }

// }
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.scss']
})
export class PartnerComponent {
  currentLang: any = {};

  readonly texts = {
    en: {
      partners: [
        { logo: 'assets/images/partner/partner1.png', alt: 'Partner 1' },
        { logo: 'assets/images/partner/partner2.png', alt: 'Partner 2' },
        { logo: 'assets/images/partner/partner3.png', alt: 'Partner 3' },
        { logo: 'assets/images/partner/partner4.png', alt: 'Partner 4' },
        { logo: 'assets/images/partner/partner5.png', alt: 'Partner 5' },
        { logo: 'assets/images/partner/partner6.png', alt: 'Partner 6' },
        { logo: 'assets/images/partner/partner7.png', alt: 'Partner 7' }
      ]
    },
    fr: {
      partners: [
        { logo: 'assets/images/partner/partner1.png', alt: 'Partenaire 1' },
        { logo: 'assets/images/partner/partner2.png', alt: 'Partenaire 2' },
        { logo: 'assets/images/partner/partner3.png', alt: 'Partenaire 3' },
        { logo: 'assets/images/partner/partner4.png', alt: 'Partenaire 4' },
        { logo: 'assets/images/partner/partner5.png', alt: 'Partenaire 5' },
        { logo: 'assets/images/partner/partner6.png', alt: 'Partenaire 6' },
        { logo: 'assets/images/partner/partner7.png', alt: 'Partenaire 7' }
      ]
    },
    de: {
      partners: [
        { logo: 'assets/images/partner/partner1.png', alt: 'Partner 1' },
        { logo: 'assets/images/partner/partner2.png', alt: 'Partner 2' },
        { logo: 'assets/images/partner/partner3.png', alt: 'Partner 3' },
        { logo: 'assets/images/partner/partner4.png', alt: 'Partner 4' },
        { logo: 'assets/images/partner/partner5.png', alt: 'Partner 5' },
        { logo: 'assets/images/partner/partner6.png', alt: 'Partner 6' },
        { logo: 'assets/images/partner/partner7.png', alt: 'Partner 7' }
      ]
    },
    ar: {
      partners: [
        { logo: 'assets/images/partner/partner1.png', alt: 'شريك 1' },
        { logo: 'assets/images/partner/partner2.png', alt: 'شريك 2' },
        { logo: 'assets/images/partner/partner3.png', alt: 'شريك 3' },
        { logo: 'assets/images/partner/partner4.png', alt: 'شريك 4' },
        { logo: 'assets/images/partner/partner5.png', alt: 'شريك 5' },
        { logo: 'assets/images/partner/partner6.png', alt: 'شريك 6' },
        { logo: 'assets/images/partner/partner7.png', alt: 'شريك 7' }
      ]
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