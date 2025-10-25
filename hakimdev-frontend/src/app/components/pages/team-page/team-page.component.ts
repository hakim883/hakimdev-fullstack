// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-team-page',
//   templateUrl: './team-page.component.html',
//   styleUrls: ['./team-page.component.scss']
// })
// export class TeamPageComponent {

// }
import { Component } from '@angular/core';

@Component({
  selector: 'app-team-page',
  templateUrl: './team-page.component.html',
  styleUrls: ['./team-page.component.scss']
})
export class TeamPageComponent {
  currentLang: any = {};
  leadership: any[] = [];
  team: any[] = [];

  readonly texts = {
    en: {
      pageTitle: 'Meet Our Team',
      home: 'Home',
      leadershipTitle: 'Meet our leadership preparing for your success',
      leadershipDesc: 'Our leaders drive innovation and excellence to ensure your project succeeds.',
      teamTitle: 'Meet our full team',
      teamDesc: 'A talented group of professionals ready to bring your ideas to life.',
      leadership: [
        {
          name: 'James White',
          role: 'CEO & Founder',
          image: 'assets/images/team/team12.jpg',
          links: [
            { url: 'https://www.linkedin.com/', icon: 'bx bxl-linkedin' },
            { url: 'https://twitter.com/', icon: 'bx bxl-twitter' },
            { url: 'https://www.facebook.com/', icon: 'bx bxl-facebook' },
            { url: 'https://www.instagram.com/', icon: 'bx bxl-instagram' },
            { url: 'https://dribbble.com/', icon: 'bx bxl-dribbble' }
          ]
        },
        {
          name: 'Johnson Lee',
          role: 'Backend Specialist',
          image: 'assets/images/team/team13.jpg',
          links: [
            { url: 'https://www.linkedin.com/', icon: 'bx bxl-linkedin' },
            { url: 'https://twitter.com/', icon: 'bx bxl-twitter' },
            { url: 'https://www.facebook.com/', icon: 'bx bxl-facebook' },
            { url: 'https://www.instagram.com/', icon: 'bx bxl-instagram' },
            { url: 'https://dribbble.com/', icon: 'bx bxl-dribbble' }
          ]
        },
        {
          name: 'Williams Smith',
          role: 'Front-End Specialist',
          image: 'assets/images/team/team14.jpg',
          links: [
            { url: 'https://www.linkedin.com/', icon: 'bx bxl-linkedin' },
            { url: 'https://twitter.com/', icon: 'bx bxl-twitter' },
            { url: 'https://www.facebook.com/', icon: 'bx bxl-facebook' },
            { url: 'https://www.instagram.com/', icon: 'bx bxl-instagram' },
            { url: 'https://dribbble.com/', icon: 'bx bxl-dribbble' }
          ]
        },
        {
          name: 'David Miller',
          role: 'React.js Specialist',
          image: 'assets/images/team/team15.jpg',
          links: [
            { url: 'https://www.linkedin.com/', icon: 'bx bxl-linkedin' },
            { url: 'https://twitter.com/', icon: 'bx bxl-twitter' },
            { url: 'https://www.facebook.com/', icon: 'bx bxl-facebook' },
            { url: 'https://www.instagram.com/', icon: 'bx bxl-instagram' },
            { url: 'https://dribbble.com/', icon: 'bx bxl-dribbble' }
          ]
        }
      ],
      team: [
        { name: 'Sarah Taylor', role: 'Marketing Lead', image: 'assets/images/team/team1.jpg' },
        { name: 'Ben Stokes', role: 'Art Director', image: 'assets/images/team/team2.jpg' },
        { name: 'Ellyse Perry', role: 'Designer', image: 'assets/images/team/team3.jpg' },
        { name: 'Steven Smith', role: 'Development', image: 'assets/images/team/team4.jpg' },
        { name: 'Suzie Bates', role: 'Front-End Development', image: 'assets/images/team/team5.jpg' },
        { name: 'David Warner', role: 'Head of Team', image: 'assets/images/team/team6.jpg' },
        { name: 'Ross Taylor', role: 'Front-End Developer', image: 'assets/images/team/team7.jpg' },
        { name: 'Meg Lanning', role: 'Art Director', image: 'assets/images/team/team8.jpg' },
        { name: 'James Andy', role: 'Designer', image: 'assets/images/team/team9.jpg' },
        { name: 'Ellyse Perry', role: 'Development', image: 'assets/images/team/team10.jpg' },
        { name: 'Daniel John', role: 'Front-End Development', image: 'assets/images/team/team11.jpg' }
      ]
    },
    fr: {
      pageTitle: 'Équipe',
      home: 'Accueil',
      leadershipTitle: 'Rencontrez notre leadership préparé pour votre réussite',
      leadershipDesc: 'Nos leaders stimulent l’innovation et l’excellence pour garantir la réussite de votre projet.',
      teamTitle: 'Rencontrez toute notre équipe',
      teamDesc: 'Un groupe talentueux de professionnels prêts à donner vie à vos idées.',
      leadership: [
        {
          name: 'James White',
          role: 'PDG & Fondateur',
          image: 'assets/images/team/team12.jpg',
          links: [
            { url: 'https://www.linkedin.com/', icon: 'bx bxl-linkedin' },
            { url: 'https://twitter.com/', icon: 'bx bxl-twitter' },
            { url: 'https://www.facebook.com/', icon: 'bx bxl-facebook' },
            { url: 'https://www.instagram.com/', icon: 'bx bxl-instagram' },
            { url: 'https://dribbble.com/', icon: 'bx bxl-dribbble' }
          ]
        },
        {
          name: 'Johnson Lee',
          role: 'Spécialiste Backend',
          image: 'assets/images/team/team13.jpg',
          links: [
            { url: 'https://www.linkedin.com/', icon: 'bx bxl-linkedin' },
            { url: 'https://twitter.com/', icon: 'bx bxl-twitter' },
            { url: 'https://www.facebook.com/', icon: 'bx bxl-facebook' },
            { url: 'https://www.instagram.com/', icon: 'bx bxl-instagram' },
            { url: 'https://dribbble.com/', icon: 'bx bxl-dribbble' }
          ]
        },
        {
          name: 'Williams Smith',
          role: 'Spécialiste Front-End',
          image: 'assets/images/team/team14.jpg',
          links: [
            { url: 'https://www.linkedin.com/', icon: 'bx bxl-linkedin' },
            { url: 'https://twitter.com/', icon: 'bx bxl-twitter' },
            { url: 'https://www.facebook.com/', icon: 'bx bxl-facebook' },
            { url: 'https://www.instagram.com/', icon: 'bx bxl-instagram' },
            { url: 'https://dribbble.com/', icon: 'bx bxl-dribbble' }
          ]
        },
        {
          name: 'David Miller',
          role: 'Spécialiste React.js',
          image: 'assets/images/team/team15.jpg',
          links: [
            { url: 'https://www.linkedin.com/', icon: 'bx bxl-linkedin' },
            { url: 'https://twitter.com/', icon: 'bx bxl-twitter' },
            { url: 'https://www.facebook.com/', icon: 'bx bxl-facebook' },
            { url: 'https://www.instagram.com/', icon: 'bx bxl-instagram' },
            { url: 'https://dribbble.com/', icon: 'bx bxl-dribbble' }
          ]
        }
      ],
      team: [
        { name: 'Sarah Taylor', role: 'Responsable Marketing', image: 'assets/images/team/team1.jpg' },
        { name: 'Ben Stokes', role: 'Directeur Artistique', image: 'assets/images/team/team2.jpg' },
        { name: 'Ellyse Perry', role: 'Designer', image: 'assets/images/team/team3.jpg' },
        { name: 'Steven Smith', role: 'Développement', image: 'assets/images/team/team4.jpg' },
        { name: 'Suzie Bates', role: 'Développement Front-End', image: 'assets/images/team/team5.jpg' },
        { name: 'David Warner', role: 'Chef d’équipe', image: 'assets/images/team/team6.jpg' },
        { name: 'Ross Taylor', role: 'Développeur Front-End', image: 'assets/images/team/team7.jpg' },
        { name: 'Meg Lanning', role: 'Directrice Artistique', image: 'assets/images/team/team8.jpg' },
        { name: 'James Andy', role: 'Designer', image: 'assets/images/team/team9.jpg' },
        { name: 'Ellyse Perry', role: 'Développement', image: 'assets/images/team/team10.jpg' },
        { name: 'Daniel John', role: 'Développement Front-End', image: 'assets/images/team/team11.jpg' }
      ]
    },
    de: {
      pageTitle: 'Team',
      home: 'Startseite',
      leadershipTitle: 'Lernen Sie unsere Führungskräfte kennen',
      leadershipDesc: 'Unsere Führungskräfte fördern Innovation und Exzellenz, um Ihren Erfolg sicherzustellen.',
      teamTitle: 'Lernen Sie unser gesamtes Team kennen',
      teamDesc: 'Eine talentierte Gruppe von Fachkräften, bereit, Ihre Ideen zum Leben zu erwecken.',
      leadership: [
        {
          name: 'James White',
          role: 'CEO & Gründer',
          image: 'assets/images/team/team12.jpg',
          links: [
            { url: 'https://www.linkedin.com/', icon: 'bx bxl-linkedin' },
            { url: 'https://twitter.com/', icon: 'bx bxl-twitter' },
            { url: 'https://www.facebook.com/', icon: 'bx bxl-facebook' },
            { url: 'https://www.instagram.com/', icon: 'bx bxl-instagram' },
            { url: 'https://dribbble.com/', icon: 'bx bxl-dribbble' }
          ]
        },
        {
          name: 'Johnson Lee',
          role: 'Backend-Spezialist',
          image: 'assets/images/team/team13.jpg',
          links: [
            { url: 'https://www.linkedin.com/', icon: 'bx bxl-linkedin' },
            { url: 'https://twitter.com/', icon: 'bx bxl-twitter' },
            { url: 'https://www.facebook.com/', icon: 'bx bxl-facebook' },
            { url: 'https://www.instagram.com/', icon: 'bx bxl-instagram' },
            { url: 'https://dribbble.com/', icon: 'bx bxl-dribbble' }
          ]
        },
        {
          name: 'Williams Smith',
          role: 'Frontend-Spezialist',
          image: 'assets/images/team/team14.jpg',
          links: [
            { url: 'https://www.linkedin.com/', icon: 'bx bxl-linkedin' },
            { url: 'https://twitter.com/', icon: 'bx bxl-twitter' },
            { url: 'https://www.facebook.com/', icon: 'bx bxl-facebook' },
            { url: 'https://www.instagram.com/', icon: 'bx bxl-instagram' },
            { url: 'https://dribbble.com/', icon: 'bx bxl-dribbble' }
          ]
        },
        {
          name: 'David Miller',
          role: 'React.js-Spezialist',
          image: 'assets/images/team/team15.jpg',
          links: [
            { url: 'https://www.linkedin.com/', icon: 'bx bxl-linkedin' },
            { url: 'https://twitter.com/', icon: 'bx bxl-twitter' },
            { url: 'https://www.facebook.com/', icon: 'bx bxl-facebook' },
            { url: 'https://www.instagram.com/', icon: 'bx bxl-instagram' },
            { url: 'https://dribbble.com/', icon: 'bx bxl-dribbble' }
          ]
        }
      ],
      team: [
        { name: 'Sarah Taylor', role: 'Marketingleiter', image: 'assets/images/team/team1.jpg' },
        { name: 'Ben Stokes', role: 'Art Director', image: 'assets/images/team/team2.jpg' },
        { name: 'Ellyse Perry', role: 'Designer', image: 'assets/images/team/team3.jpg' },
        { name: 'Steven Smith', role: 'Entwicklung', image: 'assets/images/team/team4.jpg' },
        { name: 'Suzie Bates', role: 'Frontend-Entwicklung', image: 'assets/images/team/team5.jpg' },
        { name: 'David Warner', role: 'Teamleiter', image: 'assets/images/team/team6.jpg' },
        { name: 'Ross Taylor', role: 'Frontend-Entwickler', image: 'assets/images/team/team7.jpg' },
        { name: 'Meg Lanning', role: 'Art Director', image: 'assets/images/team/team8.jpg' },
        { name: 'James Andy', role: 'Designer', image: 'assets/images/team/team9.jpg' },
        { name: 'Ellyse Perry', role: 'Entwicklung', image: 'assets/images/team/team10.jpg' },
        { name: 'Daniel John', role: 'Frontend-Entwicklung', image: 'assets/images/team/team11.jpg' }
      ]
    },
    ar: {
      pageTitle: 'فريق العمل',
      home: 'الرئيسية',
      leadershipTitle: 'تعرف على قيادتنا التي تعدك بالنجاح',
      leadershipDesc: 'قادتنا يدفعون الابتكار والتميز لضمان نجاح مشروعك.',
      teamTitle: 'تعرف على فريقنا بالكامل',
      teamDesc: 'مجموعة موهوبة من المحترفين جاهزة لتحقيق أفكارك.',
      leadership: [
        {
          name: 'جيمس وايت',
          role: 'المدير التنفيذي والمؤسس',
          image: 'assets/images/team/team12.jpg',
          links: [
            { url: 'https://www.linkedin.com/', icon: 'bx bxl-linkedin' },
            { url: 'https://twitter.com/', icon: 'bx bxl-twitter' },
            { url: 'https://www.facebook.com/', icon: 'bx bxl-facebook' },
            { url: 'https://www.instagram.com/', icon: 'bx bxl-instagram' },
            { url: 'https://dribbble.com/', icon: 'bx bxl-dribbble' }
          ]
        },
        {
          name: 'جونسون لي',
          role: 'أخصائي باك-إند',
          image: 'assets/images/team/team13.jpg',
          links: [
            { url: 'https://www.linkedin.com/', icon: 'bx bxl-linkedin' },
            { url: 'https://twitter.com/', icon: 'bx bxl-twitter' },
            { url: 'https://www.facebook.com/', icon: 'bx bxl-facebook' },
            { url: 'https://www.instagram.com/', icon: 'bx bxl-instagram' },
            { url: 'https://dribbble.com/', icon: 'bx bxl-dribbble' }
          ]
        },
        {
          name: 'ويليامز سميث',
          role: 'أخصائي فرونت-إند',
          image: 'assets/images/team/team14.jpg',
          links: [
            { url: 'https://www.linkedin.com/', icon: 'bx bxl-linkedin' },
            { url: 'https://twitter.com/', icon: 'bx bxl-twitter' },
            { url: 'https://www.facebook.com/', icon: 'bx bxl-facebook' },
            { url: 'https://www.instagram.com/', icon: 'bx bxl-instagram' },
            { url: 'https://dribbble.com/', icon: 'bx bxl-dribbble' }
          ]
        },
        {
          name: 'ديفيد ميلر',
          role: 'أخصائي React.js',
          image: 'assets/images/team/team15.jpg',
          links: [
            { url: 'https://www.linkedin.com/', icon: 'bx bxl-linkedin' },
            { url: 'https://twitter.com/', icon: 'bx bxl-twitter' },
            { url: 'https://www.facebook.com/', icon: 'bx bxl-facebook' },
            { url: 'https://www.instagram.com/', icon: 'bx bxl-instagram' },
            { url: 'https://dribbble.com/', icon: 'bx bxl-dribbble' }
          ]
        }
      ],
      team: [
        { name: 'سارة تايلور', role: 'قائدة التسويق', image: 'assets/images/team/team1.jpg' },
        { name: 'بن ستوكس', role: 'مدير فني', image: 'assets/images/team/team2.jpg' },
        { name: 'إليس بيري', role: 'مصممة', image: 'assets/images/team/team3.jpg' },
        { name: 'ستيفن سميث', role: 'تطوير', image: 'assets/images/team/team4.jpg' },
        { name: 'سوزي بيتس', role: 'تطوير فرونت-إند', image: 'assets/images/team/team5.jpg' },
        { name: 'ديفيد وارنر', role: 'رئيس الفريق', image: 'assets/images/team/team6.jpg' },
        { name: 'روس تايلور', role: 'مطور فرونت-إند', image: 'assets/images/team/team7.jpg' },
        { name: 'ميج لانينغ', role: 'مديرة فنية', image: 'assets/images/team/team8.jpg' },
        { name: 'جيمس آندي', role: 'مصمم', image: 'assets/images/team/team9.jpg' },
        { name: 'إليس بيري', role: 'تطوير', image: 'assets/images/team/team10.jpg' },
        { name: 'دانيال جون', role: 'تطوير فرونت-إند', image: 'assets/images/team/team11.jpg' }
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
        leadershipTitle: selected.leadershipTitle,
        leadershipDesc: selected.leadershipDesc,
        teamTitle: selected.teamTitle,
        teamDesc: selected.teamDesc
      };
      this.leadership = selected.leadership as unknown as any[];
      this.team = selected.team as unknown as any[] ;
    }
  }
}