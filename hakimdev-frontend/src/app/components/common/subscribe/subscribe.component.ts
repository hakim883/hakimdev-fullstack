
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class SubscribeComponent {
  form: FormGroup;
  currentLang: any = {};

  readonly texts = {
    en: {
      subTitle: 'NEWSLETTER',
      heading: 'Stay updated on my courses & projects',
      placeholder: 'Your email',
      cta: 'Subscribe'
    },
    fr: {
      subTitle: 'NEWSLETTER',
      heading: 'Restez à jour sur mes formations & projets',
      placeholder: 'Votre email',
      cta: 'S’abonner'
    },
    es: {
      subTitle: 'NEWSLETTER',
      heading: 'Mantente al día sobre mis cursos y proyectos',
      placeholder: 'Tu email',
      cta: 'Suscribirse'
    },
    ar: {
      subTitle: 'النشرة الإخبارية',
      heading: 'ابق على اطلاع على دوراتي ومشاريعي',
      placeholder: 'بريدك الإلكتروني',
      cta: 'اشترك'
    }
  } as const;

  constructor(private http: HttpClient, private fb: FormBuilder) {
    const saved = localStorage.getItem('lang') || 'fr';
    this.switchLang(saved);

    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  switchLang(language: string): void {
    const keys = ['en', 'fr', 'es', 'ar'] as const;
    if (keys.includes(language as any)) {
      this.currentLang = this.texts[language as keyof typeof this.texts];
    }
  }

  subscribe(): void {
    if (this.form.invalid) return;

    this.http
      .post('http://localhost:8080/api/newsletter', { email: this.form.value.email })
      .subscribe(() => {
        alert('✅ ' + (this.currentLang.cta === 'Subscribe' ? 'Subscribed!' : 'Abonné !'));
        this.form.reset();
      });
  }
}