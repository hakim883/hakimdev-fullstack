
import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-forgot-password-page',
  templateUrl: './forgot-password-page.component.html',
  styleUrls: ['./forgot-password-page.component.scss']
})
export class ForgotPasswordPageComponent {
  currentLang: any = {};

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]]
  });

  readonly texts = {
    en: {
      pageTitle: 'Forgot Password',
      home: 'Home',
      description:
        'Lost your password? Please enter your email address. You will receive a link to create a new password via email.',
      label: 'Email address',
      placeholder: 'your@email.com',
      btn: 'Reset Password'
    },
    fr: {
      pageTitle: 'Mot de passe oublié',
      home: 'Accueil',
      description:
        'Mot de passe perdu ? Entrez votre adresse e-mail. Vous recevrez un lien pour créer un nouveau mot de passe.',
      label: 'Adresse e-mail',
      placeholder: 'votre@email.com',
      btn: 'Réinitialiser'
    },
    de: {
      pageTitle: 'Passwort vergessen',
      home: 'Startseite',
      description:
        'Passwort vergessen? Geben Sie Ihre E-Mail-Adresse ein. Sie erhalten einen Link zum Erstellen eines neuen Passworts.',
      label: 'E-Mail-Adresse',
      placeholder: 'ihre@email.com',
      btn: 'Zurücksetzen'
    },
    ar: {
      pageTitle: 'نسيت كلمة المرور',
      home: 'الرئيسية',
      description:
        'هل نسيت كلمة المرور؟ أدخل بريدك الإلكتروني وسيتم إرسال رابط لإنشاء كلمة مرور جديدة.',
      label: 'البريد الإلكتروني',
      placeholder: 'بريدك@مثال.كوم',
      btn: 'إعادة تعيين'
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
    console.log('Reset demandé pour :', this.form.value.email);
  }
}