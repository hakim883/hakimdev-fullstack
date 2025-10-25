// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-dashboard',
//   standalone: true,
//   imports: [],
//   templateUrl: './dashboard.component.html',
//   styleUrl: './dashboard.component.scss'
// })
// export class DashboardComponent {

// }
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  currentLang: any = {};

  readonly texts = {
    en: {
      pageTitle: 'Dashboard',
      home: 'Home',
      welcome: 'Welcome to your dashboard',
      subtitle: 'Manage your projects, clients and statistics from one place.',
      projects: 'Projects',
      clients: 'Clients',
      messages: 'Messages',
      revenue: 'Revenue',
      addProject: 'Add new project'
    },
    fr: {
      pageTitle: 'Tableau de bord',
      home: 'Accueil',
      welcome: 'Bienvenue sur votre tableau de bord',
      subtitle: 'Gérez vos projets, clients et statistiques en un seul endroit.',
      projects: 'Projets',
      clients: 'Clients',
      messages: 'Messages',
      revenue: 'Revenu',
      addProject: 'Nouveau projet'
    },
    de: {
      pageTitle: 'Dashboard',
      home: 'Startseite',
      welcome: 'Willkommen in Ihrem Dashboard',
      subtitle: 'Verwalten Sie Projekte, Kunden und Statistiken an einem Ort.',
      projects: 'Projekte',
      clients: 'Kunden',
      messages: 'Nachrichten',
      revenue: 'Umsatz',
      addProject: 'Neues Projekt'
    },
    ar: {
      pageTitle: 'لوحة التحكم',
      home: 'الرئيسية',
      welcome: 'مرحبًا بك في لوحة التحكم',
      subtitle: 'إدارة مشاريعك وعملائك وإحصائياتك من مكان واحد.',
      projects: 'المشاريع',
      clients: 'العملاء',
      messages: 'الرسائل',
      revenue: 'الإيرادات',
      addProject: 'إضافة مشروع جديد'
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
    }
  }
}