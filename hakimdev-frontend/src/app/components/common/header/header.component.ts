
// import { Component, HostListener } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-header',
//   templateUrl: './header.component.html',
//   styleUrls: ['./header.component.scss']
// })
// export class HeaderComponent {
//   lang = 'fr';
//   currentLang: any = {};
//   readonly texts = {
//     en: { email:'contact@hakimdev.ch',phone:'+41783540949',login:'Login',home:'Home',services:'Services',projects:'Projects',about:'About Us',blog:'Blog',cours:'Courses',contact:'Contact Us',letsTalk:'Let’s Talk',search:'Search...',contactInfo:'Contact Info',address:'2750 Quadra Street Victoria Road, New York, USA' },
//     fr: { email:'contact@hakimdev.ch',phone:'+41783540949',login:'Connexion',home:'Accueil',services:'Services',projects:'Projets',about:'À propos',blog:'Blog',cours:'Cours',contact:'Contact',letsTalk:'Discutons',search:'Rechercher...',contactInfo:'Infos Contact',address:'2750 Quadra Street Victoria Road, New York, USA' },
//     es: { email:'contact@hakimdev.ch',phone:'+41783540949',login:'Iniciar sesión',home:'Inicio',services:'Servicios',projects:'Proyectos',about:'Nosotros',blog:'Blog',cours:'Cursos',contact:'Contacto',letsTalk:'Hablemos',search:'Buscar...',contactInfo:'Info Contacto',address:'2750 Quadra Street Victoria Road, New York, USA' },
//     ar: { email:'contact@hakimdev.ch',phone:'+41783540949',login:'تسجيل الدخول',home:'الرئيسية',services:'الخدمات',projects:'المشاريع',about:'من نحن',blog:'المدونة',cours:'الدورات',contact:'اتصل بنا',letsTalk:'لنتحدث',search:'ابحث...',contactInfo:'معلومات التواصل',address:'2750 Quadra Street Victoria Road, New York, USA' }
//   } as const;

//   constructor(public router: Router) {
//     this.switchLang(this.lang);
//   }

//   switchLang(language: string) {
//     const keys = ['en', 'fr', 'es', 'ar'] as const;
//     if (keys.includes(language as any)) {
//       this.currentLang = this.texts[language as keyof typeof this.texts];
//     }
//   }

//   classApplied = false; toggleClass() { this.classApplied = !this.classApplied; }
//   searchClassApplied = false; toggleSearchClass() { this.searchClassApplied = !this.searchClassApplied; }
//   sidebarClassApplied = false; toggleSidebarClass() { this.sidebarClassApplied = !this.sidebarClassApplied; }
//   isSticky = false;
//   @HostListener('window:scroll', ['$event'])
//   checkScroll() { this.isSticky = (window.pageYOffset || 0) >= 50; }
// }
// import { Component, HostListener } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-header',
//   templateUrl: './header.component.html',
//   styleUrls: ['./header.component.scss']
// })
// export class HeaderComponent {
  
//   lang = localStorage.getItem('lang') || 'fr';
//   currentLang: any = {};

//   readonly texts = {
//     en: {
//       email: 'contact@hakimdev.ch',
//       phone: '+41 78 354 09 49',
//       login: 'Login',
//       home: 'Home',
//       services: 'Services',
//       projects: 'Projects',
//       about: 'About Us',
//       blog: 'Blog',
//       cours: 'Courses',
//       contact: 'Contact',
//       letsTalk: 'Let’s Talk',
//       search: 'Search...',
//       contactInfo: 'Contact Info',
//       address: 'Nyon, Switzerland'
//     },
//     fr: {
//       email: 'contact@hakimdev.ch',
//       phone: '+41 78 354 09 49',
//       login: 'Connexion',
//       home: 'Accueil',
//       services: 'Services',
//       projects: 'Projets',
//       about: 'À propos',
//       blog: 'Blog',
//       cours: 'Cours',
//       contact: 'Contact',
//       letsTalk: 'Discutons',
//       search: 'Rechercher...',
//       contactInfo: 'Infos Contact',
//       address: 'Nyon, Suisse'
//     },
//     de: {
//       email: 'contact@hakimdev.ch',
//       phone: '+41 78 354 09 49',
//       login: 'Anmelden',
//       home: 'Startseite',
//       services: 'Dienstleistungen',
//       projects: 'Projekte',
//       about: 'Über uns',
//       blog: 'Blog',
//       cours: 'Kurse',
//       contact: 'Kontakt',
//       letsTalk: 'Lass uns reden',
//       search: 'Suchen...',
//       contactInfo: 'Kontaktinfo',
//       address: 'Nyon, Schweiz'
//     },
//     ar: {
//       email: 'contact@hakimdev.ch',
//       phone: '+41 78 354 09 49',
//       login: 'تسجيل الدخول',
//       home: 'الرئيسية',
//       services: 'الخدمات',
//       projects: 'المشاريع',
//       about: 'من نحن',
//       blog: 'المدونة',
//       cours: 'الدورات',
//       contact: 'اتصل بنا',
//       letsTalk: 'لنتحدث',
//       search: 'ابحث...',
//       contactInfo: 'معلومات التواصل',
//       address: 'نيُون، سويسرا'
//     }
//   } as const;

//   constructor(public router: Router) {
//     this.switchLang(this.lang);
//   }

//   switchLang(language: string): void {
//     const keys = ['en', 'fr', 'de', 'ar'] as const;
//     if (keys.includes(language as any)) {
//       this.lang = language;
//       this.currentLang = this.texts[language as keyof typeof this.texts];
//       localStorage.setItem('lang', language);
//     }
//   }

//   classApplied = false;
//   toggleClass() { this.classApplied = !this.classApplied; }

//   searchClassApplied = false;
//   toggleSearchClass() { this.searchClassApplied = !this.searchClassApplied; }

//   sidebarClassApplied = false;
//   toggleSidebarClass() { this.sidebarClassApplied = !this.sidebarClassApplied; }

//   isSticky = false;
//   @HostListener('window:scroll')
//   checkScroll() {
//     this.isSticky = window.pageYOffset >= 50;
//   }
// }


import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  lang = localStorage.getItem('lang') || 'fr';
  currentLang: any = {};

  readonly texts = {
    en: {
      email: 'contact@hakimdev.ch',
      phone: '+41 78 354 09 49',
      login: 'Login',
      home: 'Home',
      services: 'Services',
      projects: 'Projects',
      about: 'About Us',
      blog: 'Blog',
      cours: 'Courses',
      contact: 'Contact',
      letsTalk: 'Let’s Talk',
      search: 'Search...',
      contactInfo: 'Contact Info',
      address: 'Nyon, Switzerland'
    },
    fr: {
      email: 'contact@hakimdev.ch',
      phone: '+41 78 354 09 49',
      login: 'Connexion',
      home: 'Accueil',
      services: 'Services',
      projects: 'Projets',
      about: 'À propos',
      blog: 'Blog',
      cours: 'Cours',
      contact: 'Contact',
      letsTalk: 'Discutons',
      search: 'Rechercher...',
      contactInfo: 'Infos Contact',
      address: 'Nyon, Suisse'
    },
    de: {
      email: 'contact@hakimdev.ch',
      phone: '+41 78 354 09 49',
      login: 'Anmelden',
      home: 'Startseite',
      services: 'Dienstleistungen',
      projects: 'Projekte',
      about: 'Über uns',
      blog: 'Blog',
      cours: 'Kurse',
      contact: 'Kontakt',
      letsTalk: 'Lass uns reden',
      search: 'Suchen...',
      contactInfo: 'Kontaktinfo',
      address: 'Nyon, Schweiz'
    },
    ar: {
      email: 'contact@hakimdev.ch',
      phone: '+41 78 354 09 49',
      login: 'تسجيل الدخول',
      home: 'الرئيسية',
      services: 'الخدمات',
      projects: 'المشاريع',
      about: 'من نحن',
      blog: 'المدونة',
      cours: 'الدورات',
      contact: 'اتصل بنا',
      letsTalk: 'لنتحدث',
      search: 'ابحث...',
      contactInfo: 'معلومات التواصل',
      address: 'نيُون، سويسرا'
    }
  } as const;

  searchTerm = '';
  results: { title: string; url: string }[] = [];
  searchOpen = false;

  constructor(public authService: AuthService,public router: Router, private http: HttpClient) {
    this.switchLang(this.lang);
  }

  switchLang(language: string): void {
    const keys = ['en', 'fr', 'de', 'ar'] as const;
    if (keys.includes(language as any)) {
      this.lang = language;
      this.currentLang = this.texts[language as keyof typeof this.texts];
      localStorage.setItem('lang', language);
    }
  }

  toggleSearchClass(): void {
    this.searchOpen = !this.searchOpen;
    if (!this.searchOpen) {
      this.searchTerm = '';
      this.results = [];
    }
  }
  logout(): void {
    this.authService.logout();
    this.router.navigate(['/']); // retour à la page d’accueil
    
      // this.auth.logout();
      window.location.reload(); // refresh pour mettre à jour l’UI
    
  }
  onSearch(): void {
    const term = this.searchTerm.toLowerCase();
    if (!term) {
      this.results = [];
      return;
    }

    // Simulation de recherche locale
    const allPages = [
      { title: this.currentLang.home, url: '/' },
      { title: this.currentLang.services, url: '/services' },
      { title: this.currentLang.projects, url: '/projects' },
      { title: this.currentLang.about, url: '/about' },
      { title: this.currentLang.contact, url: '/contact' },
      { title: this.currentLang.cours, url: '/cours' }
    ];

    this.results = allPages.filter(p => p.title.toLowerCase().includes(term));
  }

  classApplied = false;
  toggleClass() { this.classApplied = !this.classApplied; }

  searchClassApplied = false;
  toggleModalSearch() { this.searchClassApplied = !this.searchClassApplied; }

  sidebarClassApplied = false;
  toggleSidebarClass() { this.sidebarClassApplied = !this.sidebarClassApplied; }

  isSticky = false;
  @HostListener('window:scroll')
  checkScroll() {
    this.isSticky = window.pageYOffset >= 50;
  }
}