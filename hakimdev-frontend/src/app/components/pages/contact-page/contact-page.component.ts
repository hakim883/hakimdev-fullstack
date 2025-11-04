
import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent {
  currentLang: any = {};

  form = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', []],
    message: ['', [Validators.required]]
  });

  readonly texts = {
    en: {
      pageTitle: 'Contact Us',
      home: 'Home',
      address: 'Address',
      addressCity: 'Nyon, Switzerland',
      phone: 'Phone',
      phoneValue: '+41 78 354 09 49',
      email: 'Email',
      emailValue: 'contact@hakimdev.ch',
      follow: 'Follow Us',
      contactForm: 'Get in Touch',
      nameLabel: 'Name',
      namePlaceholder: 'Your name',
      emailLabel: 'Email',
      emailPlaceholder: 'Your email',
      phoneLabel: 'Phone',
      phonePlaceholder: 'Your phone number',
      messageLabel: 'Message',
      messagePlaceholder: 'Tell us about your project',
      sendBtn: 'Send Message'
    },
    fr: {
      pageTitle: 'Contact',
      home: 'Accueil',
      address: 'Adresse',
      addressCity: 'Nyon, Suisse',
      phone: 'Téléphone',
      phoneValue: '+41 78 354 09 49',
      email: 'Email',
      emailValue: 'contact@hakimdev.ch',
      follow: 'Suivez-nous',
      contactForm: 'Contactez-nous',
      nameLabel: 'Nom',
      namePlaceholder: 'Votre nom',
      emailLabel: 'Email',
      emailPlaceholder: 'Votre email',
      phoneLabel: 'Téléphone',
      phonePlaceholder: 'Votre numéro',
      messageLabel: 'Message',
      messagePlaceholder: 'Parlez-nous de votre projet',
      sendBtn: 'Envoyer'
    },
    de: {
      pageTitle: 'Kontakt',
      home: 'Startseite',
      address: 'Adresse',
      addressCity: 'Nyon, Schweiz',
      phone: 'Telefon',
      phoneValue: '+41 78 354 09 49',
      email: 'E-Mail',
      emailValue: 'contact@hakimdev.ch',
      follow: 'Folgen Sie uns',
      contactForm: 'Kontakt aufnehmen',
      nameLabel: 'Name',
      namePlaceholder: 'Ihr Name',
      emailLabel: 'E-Mail',
      emailPlaceholder: 'Ihre E-Mail',
      phoneLabel: 'Telefon',
      phonePlaceholder: 'Ihre Telefonnummer',
      messageLabel: 'Nachricht',
      messagePlaceholder: 'Erzählen Sie uns von Ihrem Projekt',
      sendBtn: 'Senden'
    },
    ar: {
      pageTitle: 'اتصل بنا',
      home: 'الرئيسية',
      address: 'العنوان',
      addressCity: 'نيون، سويسرا',
      phone: 'الهاتف',
      phoneValue: '+41 78 354 09 49',
      email: 'البريد',
      emailValue: 'contact@hakimdev.ch',
      follow: 'تابعنا',
      contactForm: 'تواصل معنا',
      nameLabel: 'الاسم',
      namePlaceholder: 'اسمك',
      emailLabel: 'البريد الإلكتروني',
      emailPlaceholder: 'بريدك الإلكتروني',
      phoneLabel: 'الهاتف',
      phonePlaceholder: 'رقم هاتفك',
      messageLabel: 'الرسالة',
      messagePlaceholder: 'حدّثنا عن مشروعك',
      sendBtn: 'إرسال'
    }
  } as const;

  constructor(private fb: FormBuilder) {
    const saved = localStorage.getItem('lang') || 'fr';
    this.switchLang(saved);
  }

  switchLang(language: string): void {
    const keys = ['en', 'fr', 'de', 'ar'] as const;
    if (keys.includes(language as any)) {
      this.currentLang = this.texts[language as keyof typeof this.texts];
    }
  }

  onSubmit(): void {
    if (this.form.invalid) return;

    emailjs
      .send(
        'service_48zra4a',
        'template_lhu8ycs',
        this.form.value as any,
        '2uR3NBpS5i0LZCfOQ'
      )
      .then(
        () => {
          alert('✅ Message envoyé !');
          this.form.reset();
        },
        err => {
          alert('❌ Erreur : ' + JSON.stringify(err));
        }
      );
  }
}