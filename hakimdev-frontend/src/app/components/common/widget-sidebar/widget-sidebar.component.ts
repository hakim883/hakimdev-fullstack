
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-widget-sidebar',
//   templateUrl: './widget-sidebar.component.html',
//   styleUrls: ['./widget-sidebar.component.scss']
// })
// export class WidgetSidebarComponent {
//   currentLang: any = {};
//   readonly langs = {
//     en: {
//       searchPlaceholder: 'Search keyword',
//       latestPosts: 'Latest Posts',
//       categories: 'Categories',
//       catWeb: 'Web Design',
//       catBranding: 'Branding',
//       catDigital: 'Digital Art',
//       catGraphics: 'Graphics',
//       catMarketing: 'Marketing',
//       followUs: 'Follow Us',
//       tags: 'Tags',
//       tagAffiliate: 'Affiliate',
//       tagMotion: 'Motion Graphics',
//       tagDigital: 'Digital',
//       tagLanding: 'Product Landing',
//       tagBranding: 'Company Branding'
//     },
//     fr: {
//       searchPlaceholder: 'Rechercher',
//       latestPosts: 'Articles récents',
//       categories: 'Catégories',
//       catWeb: 'Design Web',
//       catBranding: 'Branding',
//       catDigital: 'Art digital',
//       catGraphics: 'Graphisme',
//       catMarketing: 'Marketing',
//       followUs: 'Suivez-nous',
//       tags: 'Mots-clés',
//       tagAffiliate: 'Affiliation',
//       tagMotion: 'Motion Graphics',
//       tagDigital: 'Digital',
//       tagLanding: 'Landing Produit',
//       tagBranding: 'Branding Entreprise'
//     },
//     es: {
//       searchPlaceholder: 'Buscar palabra clave',
//       latestPosts: 'Últimas entradas',
//       categories: 'Categorías',
//       catWeb: 'Diseño Web',
//       catBranding: 'Branding',
//       catDigital: 'Arte Digital',
//       catGraphics: 'Gráficos',
//       catMarketing: 'Marketing',
//       followUs: 'Síguenos',
//       tags: 'Etiquetas',
//       tagAffiliate: 'Afiliado',
//       tagMotion: 'Motion Graphics',
//       tagDigital: 'Digital',
//       tagLanding: 'Landing de Producto',
//       tagBranding: 'Branding Empresa'
//     },
//     ar: {
//       searchPlaceholder: 'ابحث عن كلمة',
//       latestPosts: 'أحدث المقالات',
//       categories: 'الفئات',
//       catWeb: 'تصميم الويب',
//       catBranding: 'العلامة التجارية',
//       catDigital: 'الفن الرقمي',
//       catGraphics: 'الجرافيك',
//       catMarketing: 'التسويق',
//       followUs: 'تابعنا',
//       tags: 'الوسوم',
//       tagAffiliate: 'الشراكات',
//       tagMotion: 'الرسوم المتحركة',
//       tagDigital: 'رقمي',
//       tagLanding: 'صفحة الهبوط',
//       tagBranding: 'هوية الشركة'
//     }
//   };

//   readonly posts = [
//     { img: 'assets/images/blog/blog1.jpg', date: 'Feb 10, 2024', title: 'Standard operating procedures (SOP) changes with an LMS' },
//     { img: 'assets/images/blog/blog2.jpg', date: 'Feb 09, 2024', title: 'Questions to ask vendors before choosing an LMS platform' },
//     { img: 'assets/images/blog/blog3.jpg', date: 'Feb 08, 2024', title: 'In person, virtual or hybrid: helpful tools for back to school' },
//     { img: 'assets/images/blog/blog4.jpg', date: 'Feb 07, 2024', title: 'Corporate online learning trends you still need to implement' }
//   ];

//   constructor() {
//     this.currentLang = this.langs.en; // langue par défaut
//   }
// }
import { Component } from '@angular/core';

@Component({
  selector: 'app-widget-sidebar',
  templateUrl: './widget-sidebar.component.html',
  styleUrls: ['./widget-sidebar.component.scss']
})
export class WidgetSidebarComponent {
  currentLang: any = {};

  readonly texts = {
    en: {
      searchPlaceholder: 'Search keyword',
      latestPosts: 'Latest Posts',
      categories: 'Categories',
      followUs: 'Follow Us',
      tags: 'Tags',
      categoriesList: [
        { label: 'Web Design', count: 5 },
        { label: 'Branding', count: 14 },
        { label: 'Digital Art', count: 3 },
        { label: 'Graphics', count: 12 },
        { label: 'Marketing', count: 25 }
      ],
      socialLinks: [
        { label: 'Facebook', url: '#' },
        { label: 'Twitter', url: '#' },
        { label: 'Instagram', url: '#' },
        { label: 'Pinterest', url: '#' },
        { label: 'Linkedin', url: '#' }
      ],
      tagList: ['Affiliate', 'Motion Graphics', 'Digital', 'Product Landing', 'Company Branding']
    },
    fr: {
      searchPlaceholder: 'Rechercher',
      latestPosts: 'Articles récents',
      categories: 'Catégories',
      followUs: 'Suivez-nous',
      tags: 'Mots-clés',
      categoriesList: [
        { label: 'Design Web', count: 5 },
        { label: 'Branding', count: 14 },
        { label: 'Art digital', count: 3 },
        { label: 'Graphisme', count: 12 },
        { label: 'Marketing', count: 25 }
      ],
      socialLinks: [
        { label: 'Facebook', url: '#' },
        { label: 'Twitter', url: '#' },
        { label: 'Instagram', url: '#' },
        { label: 'Pinterest', url: '#' },
        { label: 'Linkedin', url: '#' }
      ],
      tagList: ['Affiliation', 'Motion Graphics', 'Digital', 'Landing Produit', 'Branding Entreprise']
    },
    es: {
      searchPlaceholder: 'Buscar palabra clave',
      latestPosts: 'Últimas entradas',
      categories: 'Categorías',
      followUs: 'Síguenos',
      tags: 'Etiquetas',
      categoriesList: [
        { label: 'Diseño Web', count: 5 },
        { label: 'Branding', count: 14 },
        { label: 'Arte Digital', count: 3 },
        { label: 'Gráficos', count: 12 },
        { label: 'Marketing', count: 25 }
      ],
      socialLinks: [
        { label: 'Facebook', url: '#' },
        { label: 'Twitter', url: '#' },
        { label: 'Instagram', url: '#' },
        { label: 'Pinterest', url: '#' },
        { label: 'Linkedin', url: '#' }
      ],
      tagList: ['Afiliado', 'Motion Graphics', 'Digital', 'Landing de Producto', 'Branding Empresa']
    },
    ar: {
      searchPlaceholder: 'ابحث عن كلمة',
      latestPosts: 'أحدث المقالات',
      categories: 'الفئات',
      followUs: 'تابعنا',
      tags: 'الوسوم',
      categoriesList: [
        { label: 'تصميم الويب', count: 5 },
        { label: 'العلامة التجارية', count: 14 },
        { label: 'الفن الرقمي', count: 3 },
        { label: 'الجرافيك', count: 12 },
        { label: 'التسويق', count: 25 }
      ],
      socialLinks: [
        { label: 'فيسبوك', url: '#' },
        { label: 'تويتر', url: '#' },
        { label: 'إنستغرام', url: '#' },
        { label: 'بينتريست', url: '#' },
        { label: 'لينكدإن', url: '#' }
      ],
      tagList: ['الشراكات', 'الرسوم المتحركة', 'رقمي', 'صفحة الهبوط', 'هوية الشركة']
    }
  };

  readonly posts = [
    {
      img: 'assets/images/blog/blog1.jpg',
      date: 'Feb 10, 2024',
      alt: 'blog-image',
      title: 'string'
    },
    {
      img: 'assets/images/blog/blog2.jpg',
      date: 'Feb 09, 2024',
      alt: 'blog-image',
      title: 'string'
    },
    {
      img: 'assets/images/blog/blog3.jpg',
      date: 'Feb 08, 2024',
      alt: 'blog-image',
      title: 'string'
    },
    {
      img: 'assets/images/blog/blog4.jpg',
      date: 'Feb 07, 2024',
      alt: 'blog-image',
      title: 'string'
    }
  ];

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