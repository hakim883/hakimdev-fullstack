// import { Component } from '@angular/core';
// import { AuthService } from '../../../services/auth.service';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-profile-authentication-page',
//   templateUrl: './profile-authentication-page.component.html'
// })
// export class ProfileAuthenticationPageComponent {
//   email = '';
//   password = '';
//   username = '';

//   constructor(private authService: AuthService, private router: Router) {}

//   login() {
//     this.authService.login(this.email, this.password).subscribe({
//       next: (res: any) => {
//         this.authService.saveToken(res.token);
//         alert('✅ Connecté');
//         this.router.navigate(['/']); // redirige vers accueil
//       },
//       error: () => alert('❌ Identifiants invalides')
//     });
//   }

//   register() {
//     this.authService.register(this.username, this.email, this.password).subscribe({
//       next: () => alert('✅ Compte créé'),
//       error: (err) => alert('❌ Erreur : ' + err.error.error)
//     });
//   }
// }
import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-authentication-page',
  templateUrl: './profile-authentication-page.component.html'
})
export class ProfileAuthenticationPageComponent {
  email = '';
  password = '';
  username = '';

  currentLang: any = {};

  readonly texts = {
    en: {
      pageTitle: 'Login / Register',
      home: 'Home',
      auth: 'Authentication',
      loginTitle: 'Login',
      registerTitle: 'Create Account',
      emailLabel: 'Email',
      passwordLabel: 'Password',
      usernameLabel: 'Username',
      loginBtn: 'Login',
      registerBtn: 'Register',
      successLogin: '✅ Logged in',
      successRegister: '✅ Account created',
      errorLogin: '❌ Invalid credentials',
      errorRegister: '❌ Error:'
    },
    fr: {
      pageTitle: 'Connexion / Inscription',
      home: 'Accueil',
      auth: 'Authentification',
      loginTitle: 'Se connecter',
      registerTitle: 'Créer un compte',
      emailLabel: 'Email',
      passwordLabel: 'Mot de passe',
      usernameLabel: "Nom d'utilisateur",
      loginBtn: 'Connexion',
      registerBtn: "S'inscrire",
      successLogin: '✅ Connecté',
      successRegister: '✅ Compte créé',
      errorLogin: '❌ Identifiants invalides',
      errorRegister: '❌ Erreur :'
    },
    de: {
      pageTitle: 'Anmeldung / Registrierung',
      home: 'Startseite',
      auth: 'Authentifizierung',
      loginTitle: 'Anmelden',
      registerTitle: 'Konto erstellen',
      emailLabel: 'E-Mail',
      passwordLabel: 'Passwort',
      usernameLabel: 'Benutzername',
      loginBtn: 'Anmelden',
      registerBtn: 'Registrieren',
      successLogin: '✅ Angemeldet',
      successRegister: '✅ Konto erstellt',
      errorLogin: '❌ Ungültige Anmeldedaten',
      errorRegister: '❌ Fehler:'
    },
    ar: {
      pageTitle: 'تسجيل الدخول / إنشاء حساب',
      home: 'الرئيسية',
      auth: 'المصادقة',
      loginTitle: 'تسجيل الدخول',
      registerTitle: 'إنشاء حساب',
      emailLabel: 'البريد الإلكتروني',
      passwordLabel: 'كلمة المرور',
      usernameLabel: 'اسم المستخدم',
      loginBtn: 'دخول',
      registerBtn: 'تسجيل',
      successLogin: '✅ تم تسجيل الدخول',
      successRegister: '✅ تم إنشاء الحساب',
      errorLogin: '❌ بيانات غير صالحة',
      errorRegister: '❌ خطأ:'
    }
  } as const;

  constructor(private authService: AuthService, private router: Router) {
    const saved = localStorage.getItem('lang') || 'fr';
    this.switchLang(saved);
  }

  switchLang(language: string): void {
    const keys = ['en', 'fr', 'de', 'ar'] as const;
    if (keys.includes(language as any)) {
      this.currentLang = this.texts[language as keyof typeof this.texts];
    }
  }

  login() {
    this.authService.login(this.email, this.password).subscribe({
      next: (res: any) => {
        this.authService.saveToken(res.token);
        alert(this.currentLang.successLogin);
        this.router.navigate(['/']);
      },
      error: () => alert(this.currentLang.errorLogin)
    });
  }

  register() {
    this.authService.register(this.username, this.email, this.password).subscribe({
      next: () => alert(this.currentLang.successRegister),
      error: (err) => alert(`${this.currentLang.errorRegister} ${err.error?.error || ''}`)
    });
  }
  
}