// import { Component } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//     selector: 'app-team',
//     templateUrl: './team.component.html',
//     styleUrls: ['./team.component.scss']
// })
// export class TeamComponent {

//     constructor(
//         public router: Router
//     ) { }

// }
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent {
  currentLang: any = {};

  readonly texts = {
    en: {
      subTitle: 'OUR TEAM',
      heading: 'Meet our leadership preparing for your success',
      description:
        'A passionate group of developers, designers and strategists ready to turn your ideas into reality.',
      team: [
        {
          name: 'James White',
          role: 'CEO & Founder',
          img: 'assets/images/team/team12.jpg',
          alt: 'James White – CEO',
          social: [
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
          img: 'assets/images/team/team13.jpg',
          alt: 'Johnson Lee – Backend Specialist',
          social: [
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
          img: 'assets/images/team/team14.jpg',
          alt: 'Williams Smith – Front-End Specialist',
          social: [
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
          img: 'assets/images/team/team15.jpg',
          alt: 'David Miller – React.js Specialist',
          social: [
            { url: 'https://www.linkedin.com/', icon: 'bx bxl-linkedin' },
            { url: 'https://twitter.com/', icon: 'bx bxl-twitter' },
            { url: 'https://www.facebook.com/', icon: 'bx bxl-facebook' },
            { url: 'https://www.instagram.com/', icon: 'bx bxl-instagram' },
            { url: 'https://dribbble.com/', icon: 'bx bxl-dribbble' }
          ]
        }
      ],
      heading4: 'Meet our leadership preparing for your success',
      description4:
        'A diverse team of experts dedicated to delivering high-quality digital solutions.',
      team4: [
        { name: 'Sarah Taylor', role: 'Marketing Lead', img: 'assets/images/team/team1.jpg' },
        { name: 'Ben Stokes', role: 'Art Director', img: 'assets/images/team/team2.jpg' },
        { name: 'Ellyse Perry', role: 'Designer', img: 'assets/images/team/team3.jpg' },
        { name: 'Steven Smith', role: 'Development', img: 'assets/images/team/team4.jpg' },
        { name: 'Suzie Bates', role: 'Front-End Development', img: 'assets/images/team/team5.jpg' },
        { name: 'David Warner', role: 'Head of Team', img: 'assets/images/team/team6.jpg' },
        { name: 'Ross Taylor', role: 'Front-End Developer', img: 'assets/images/team/team7.jpg' },
        { name: 'Meg Lanning', role: 'Art Director', img: 'assets/images/team/team8.jpg' },
        { name: 'James Andy', role: 'Designer', img: 'assets/images/team/team9.jpg' },
        { name: 'Ellyse Perry', role: 'Development', img: 'assets/images/team/team10.jpg' },
        { name: 'Daniel John', role: 'Front-End Development', img: 'assets/images/team/team11.jpg' }
      ]
    },
    fr: {
      subTitle: 'NOTRE ÉQUIPE',
      heading: 'Rencontrez nos leaders qui préparent votre succès',
      description:
        'Un groupe passionné de développeurs, designers et stratèges prêt à transformer vos idées en réalité.',
      team: [
        {
          name: 'James White',
          role: 'PDG & Fondateur',
          img: 'assets/images/team/team12.jpg',
          alt: 'James White – PDG',
          social: [
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
          img: 'assets/images/team/team13.jpg',
          alt: 'Johnson Lee – Backend',
          social: [
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
          img: 'assets/images/team/team14.jpg',
          alt: 'Williams Smith – Front-End',
          social: [
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
          img: 'assets/images/team/team15.jpg',
          alt: 'David Miller – React.js',
          social: [
            { url: 'https://www.linkedin.com/', icon: 'bx bxl-linkedin' },
            { url: 'https://twitter.com/', icon: 'bx bxl-twitter' },
            { url: 'https://www.facebook.com/', icon: 'bx bxl-facebook' },
            { url: 'https://www.instagram.com/', icon: 'bx bxl-instagram' },
            { url: 'https://dribbble.com/', icon: 'bx bxl-dribbble' }
          ]
        }
      ],
      heading4: 'Rencontrez nos leaders qui préparent votre succès',
      description4:
        'Une équipe diversifiée d’experts dédiée à la fourniture de solutions numériques de qualité.',
      team4: [
        { name: 'Sarah Taylor', role: 'Responsable Marketing', img: 'assets/images/team/team1.jpg' },
        { name: 'Ben Stokes', role: 'Directeur Artistique', img: 'assets/images/team/team2.jpg' },
        { name: 'Ellyse Perry', role: 'Designer', img: 'assets/images/team/team3.jpg' },
        { name: 'Steven Smith', role: 'Développement', img: 'assets/images/team/team4.jpg' },
        { name: 'Suzie Bates', role: 'Développement Front-End', img: 'assets/images/team/team5.jpg' },
        { name: 'David Warner', role: 'Chef d’équipe', img: 'assets/images/team/team6.jpg' },
        { name: 'Ross Taylor', role: 'Développeur Front-End', img: 'assets/images/team/team7.jpg' },
        { name: 'Meg Lanning', role: 'Directrice Artistique', img: 'assets/images/team/team8.jpg' },
        { name: 'James Andy', role: 'Designer', img: 'assets/images/team/team9.jpg' },
        { name: 'Ellyse Perry', role: 'Développement', img: 'assets/images/team/team10.jpg' },
        { name: 'Daniel John', role: 'Développement Front-End', img: 'assets/images/team/team11.jpg' }
      ]
    }
  } as const;

  constructor(public router: Router) {
    const saved = localStorage.getItem('lang') || 'fr';
    this.switchLang(saved);
  }

  switchLang(language: string): void {
    const keys = ['en', 'fr'] as const;
    if (keys.includes(language as any)) {
      this.currentLang = this.texts[language as keyof typeof this.texts];
    }
  }
}