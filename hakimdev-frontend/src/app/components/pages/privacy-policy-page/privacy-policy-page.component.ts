// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-privacy-policy-page',
//   templateUrl: './privacy-policy-page.component.html',
//   styleUrls: ['./privacy-policy-page.component.scss']
// })
// export class PrivacyPolicyPageComponent {

// }
import { Component } from '@angular/core';

@Component({
  selector: 'app-privacy-policy-page',
  templateUrl: './privacy-policy-page.component.html',
  styleUrls: ['./privacy-policy-page.component.scss']
})
export class PrivacyPolicyPageComponent {
  currentLang: any = {};

  readonly texts = {
    en: {
      pageTitle: 'Privacy Policy',
      home: 'Home',
      lastUpdated: 'Last updated on February 3, 2024.',
      intro1: `Hi there, we’re <strong>HakimDev</strong>, and welcome to our privacy policy which also applies to our customers.<br>
               This policy sets out how we handle your personal information if you’re a <strong>HakimDev</strong> user or visitor to our site.`,
      intro2: `When we say ‘we’, ‘us’, or <strong>‘HakimDev’</strong>, it’s because that’s who we are and we own and run the site.<br>
               If we say ‘policy’ we’re talking about this privacy policy. If we say ‘user terms’ we’re talking about the rules for using the site.`,

      infoWeCollectTitle: 'The type of personal information we collect',
      infoWeCollectText: `We collect certain personal information about visitors and users of our site.<br>
                          The most common types include: usernames, email addresses, contact details, support queries, and comments.`,

      howWeCollectTitle: 'How we collect personal information',
      howWeCollectText1: 'We collect personal information directly when you provide it to us, automatically as you navigate through the site.',
      howWeCollectText2: 'We collect it when you register, purchase services, subscribe to newsletters, or send us feedback.',

      howWeUseTitle: 'How we use personal information',
      howWeUseText: `This data identifies you as our customer/subscriber and allows us to deliver products, information, and marketing.<br>
                     You cannot purchase or subscribe anonymously, so this data is necessary for site functionality.`,

      whenWeDiscloseTitle: 'When we disclose your personal information',
      whenWeDiscloseText: `We do not disclose your data to third parties in a way that reveals personal information like email or name.<br>
                          Only our authorized personnel have access to your data.`,

      securityTitle: 'How we keep your personal information secure',
      securityText: `We store personal information on secure servers managed by us and our service providers.<br>
                    Access is protected by authentication and encryption where appropriate.`,

      accessTitle: 'How you can access your personal information',
      accessText: `You can access some information by logging into your account.<br>
                  You may also request access to other data or corrections via our support team.`,

      marketingTitle: 'Marketing Choices regarding your personal information',
      marketingText1: 'With your consent, we may send you marketing emails. You can opt-out at any time using the unsubscribe link.',
      marketingText2: 'You can manage cookie preferences in your browser. Rejecting cookies may affect site functionality.',

      cookiesTitle: 'Cookies and web analytics',
      cookiesText: `We use cookies to identify and track visitors, their actions on the site, and preferences.<br>
                   Visitors can disable cookies in their browser settings.`,

      retentionTitle: 'How long we keep your personal information',
      retentionText: `We retain your data as long as necessary to provide services and comply with legal obligations.<br>
                     You can request deletion and account closure at any time.`,

      updatesTitle: 'When we need to update this policy',
      updatesText: 'We may update this policy to reflect legal or operational changes. Updates will be posted on this page.',

      contactTitle: 'How you can contact us',
      contactText: `If you have questions about our privacy practices, please contact us at <a href="mailto:contact@hakimdev.ch">contact@hakimdev.ch</a>.`,
      definition: 'Both personal information and personal data have the same meaning in this Privacy Policy.'
    },
    fr: {
      pageTitle: 'Politique de confidentialité',
      home: 'Accueil',
      lastUpdated: 'Dernière mise à jour le 3 février 2024.',
      intro1: `Bonjour, nous sommes <strong>HakimDev</strong>, et bienvenue dans notre politique de confidentialité.<br>
               Cette politique explique comment nous traitons vos données personnelles.`,
      intro2: `Lorsque nous disons « nous » ou « HakimDev », nous faisons référence à notre société qui gère le site.<br>
               Les « conditions d’utilisation » désignent les règles d’utilisation du site.`,

      infoWeCollectTitle: 'Les types de données collectées',
      infoWeCollectText: `Nous collectons des informations personnelles sur les visiteurs et utilisateurs.<br>
                          Cela inclut : noms d’utilisateur, adresses e-mail, coordonnées, demandes de support et commentaires.`,

      howWeCollectTitle: 'Comment nous collectons vos données',
      howWeCollectText1: 'Nous collectons vos données directement ou automatiquement lors de votre navigation.',
      howWeCollectText2: 'Cela se fait lors de l’inscription, de l’achat, de l’abonnement ou de l’envoi de retours.',

      howWeUseTitle: 'Utilisation des données',
      howWeUseText: `Ces données nous permettent de vous identifier et de vous fournir nos services.<br>
                     L’achat ou l’abonnement ne peut pas être effectué de manière anonyme.`,

      whenWeDiscloseTitle: 'Communication des données',
      whenWeDiscloseText: `Nous ne partageons pas vos données avec des tiers de manière à révéler votre identité.<br>
                          Seuls nos agents autorisés y ont accès.`,

      securityTitle: 'Sécurité des données',
      securityText: `Vos données sont stockées sur des serveurs sécurisés gérés par nous ou nos prestataires.<br>
                    L’accès est protégé par authentification et chiffrement.`,

      accessTitle: 'Accès à vos données',
      accessText: `Vous pouvez accéder à certaines données via votre compte.<br>
                  Vous pouvez demander l’accès ou la correction via notre support.`,

      marketingTitle: 'Marketing et consentement',
      marketingText1: 'Avec votre consentement, nous vous envoyons des e-mails marketing. Vous pouvez vous désabonner à tout moment.',
      marketingText2: 'Vous pouvez gérer les cookies via votre navigateur. Leur refus peut affecter certaines fonctionnalités.',

      cookiesTitle: 'Cookies et analytique',
      cookiesText: `Nous utilisons des cookies pour suivre les visiteurs et leurs actions.<br>
                   Vous pouvez les désactiver dans les paramètres de votre navigateur.`,

      retentionTitle: 'Durée de conservation',
      retentionText: `Nous conservons vos données tant que nécessaire pour les services et obligations légales.<br>
                     Vous pouvez demander la suppression et la fermeture de votre compte.`,

      updatesTitle: 'Mises à jour de la politique',
      updatesText: 'Nous mettons à jour cette politique pour refléter les changements légaux ou opérationnels.',

      contactTitle: 'Contact',
      contactText: `Pour toute question, contactez-nous à <a href="mailto:contact@hakimdev.ch">contact@hakimdev.ch</a>.`,
      definition: 'Les termes « données personnelles » et « informations personnelles » ont la même signification.'
    },
    de: {
      pageTitle: 'Datenschutzerklärung',
      home: 'Startseite',
      lastUpdated: 'Zuletzt aktualisiert am 3. Februar 2024.',
      intro1: `Hallo, wir sind <strong>HakimDev</strong>. Willkommen zu unserer Datenschutzerklärung.<br>
               Diese Richtlinie erklärt, wie wir Ihre personenbezogenen Daten verarbeiten.`,
      intro2: `Wenn wir „wir“ oder „HakimDev“ sagen, meinen wir das Unternehmen, das die Website betreibt.<br>
               Die „Nutzungsbedingungen“ sind die Regeln zur Nutzung der Website.`,

      infoWeCollectTitle: 'Art der gesammelten Daten',
      infoWeCollectText: `Wir sammeln bestimmte personenbezogene Daten von Besuchern und Nutzern.<br>
                          Dazu gehören: Benutzernamen, E-Mail-Adressen, Kontaktdaten, Supportanfragen und Kommentare.`,

      howWeCollectTitle: 'Datenerhebung',
      howWeCollectText1: 'Wir erheben Daten direkt oder automatisch während Ihrer Nutzung der Website.',
      howWeCollectText2: 'Dies geschieht bei Registrierung, Kauf, Newsletter-Anmeldung oder Feedback.',

      howWeUseTitle: 'Verwendung der Daten',
      howWeUseText: `Diese Daten dienen zur Identifizierung und Bereitstellung unserer Dienstleistungen.<br>
                     Ein Kauf oder Abonnement ist ohne diese Daten nicht möglich.`,

      whenWeDiscloseTitle: 'Weitergabe der Daten',
      whenWeDiscloseText: `Wir geben Ihre Daten nicht an Dritte weiter, sodass Ihre Identität preisgegeben wird.<br>
                          Nur autorisierte Mitarbeiter haben Zugriff.`,

      securityTitle: 'Datensicherheit',
      securityText: `Ihre Daten werden auf sicheren Servern gespeichert.<br>
                    Der Zugriff ist durch Authentifizierung und Verschlüsselung geschützt.`,

      accessTitle: 'Zugriff auf Ihre Daten',
      accessText: `Sie können über Ihr Konto auf einige Daten zugreifen.<br>
                  Zugangs- oder Korrekturanfragen können über unseren Support gestellt werden.`,

      marketingTitle: 'Marketing und Einwilligung',
      marketingText1: 'Mit Ihrer Einwilligung senden wir Ihnen Marketing-E-Mails. Sie können sich jederzeit abmelden.',
      marketingText2: 'Sie können Cookies in Ihrem Browser verwalten. Deren Ablehnung kann Funktionen beeinträchtigen.',

      cookiesTitle: 'Cookies und Analyse',
      cookiesText: `Wir verwenden Cookies, um Besucher zu identifizieren und deren Verhalten zu verfolgen.<br>
                   Sie können Cookies in Ihren Browsereinstellungen deaktivieren.`,

      retentionTitle: 'Aufbewahrungsdauer',
      retentionText: `Wir speichern Ihre Daten so lange wie nötig für die Dienstleistungen und gesetzliche Pflichten.<br>
                     Sie können jederzeit Löschung und Kontoschließung verlangen.`,

      updatesTitle: 'Aktualisierungen der Richtlinie',
      updatesText: 'Wir aktualisieren diese Richtlinie, um rechtliche oder betriebliche Änderungen zu berücksichtigen.',

      contactTitle: 'Kontakt',
      contactText: `Bei Fragen kontaktieren Sie uns unter <a href="mailto:contact@hakimdev.ch">contact@hakimdev.ch</a>.`,
      definition: 'Die Begriffe „personenbezogene Daten“ und „personenbezogene Informationen“ haben die gleiche Bedeutung.'
    },
    ar: {
      pageTitle: 'سياسة الخصوصية',
      home: 'الرئيسية',
      lastUpdated: 'آخر تحديث في 3 فبراير 2024.',
      intro1: `مرحبًا، نحن <strong>HakimDev</strong>، ونرحب بكم في سياسة الخصوصية الخاصة بنا.<br>
               توضح هذه السياسة كيفية التعامل مع بياناتكم الشخصية.`,
      intro2: `عندما نقول "نحن" أو "HakimDev"، فنحن نعني الشركة التي تُدير الموقع.<br>
               "شروط الاستخدام" هي القواعد الخاصة باستخدام الموقع.`,

      infoWeCollectTitle: 'أنواع البيانات التي نجمعها',
      infoWeCollectText: `نقوم بجمع معلومات شخصية عن الزوار والمستخدمين.<br>
                          وتشمل: أسماء المستخدمين، عناوين البريد، معلومات الاتصال، طلبات الدعم والتعليقات.`,

      howWeCollectTitle: 'كيفية جمع البيانات',
      howWeCollectText1: 'نجمع بياناتك مباشرة عند تقديمها لنا أو تلقائيًا أثناء تصفحك للموقع.',
      howWeCollectText2: 'يحدث ذلك أثناء التسجيل، الشراء، الاشتراك في النشرة البريدية أو إرسال الملاحظات.',

      howWeUseTitle: 'كيفية استخدام البيانات',
      howWeUseText: `تُستخدم هذه البيانات لتحديد هويتك وتزويدك بخدماتنا.<br>
                     لا يمكن الشراء أو الاشتراك بشكل مجهول.`,

      whenWeDiscloseTitle: 'وقت الكشف عن البيانات',
      whenWeDiscloseText: `لا نشارك بياناتك مع أطراف ثالثة بطريقة تكشف هويتك.<br>
                          فقط الموظفون المخولون لديهم حق الوصول.`,

      securityTitle: 'أمن البيانات',
      securityText: `تُخزن بياناتك على خوادم آمنة.<br>
                    الوصول محمي بمصادقة وتشفير عند الحاجة.`,

      accessTitle: 'الوصول إلى بياناتك',
      accessText: `يمكنك الوصول إلى بعض البيانات عبر حسابك.<br>
                  يمكنك طلب الوصول أو التصحيح عبر الدعم.`,

      marketingTitle: 'التسويق والموافقة',
      marketingText1: 'بموافقتك، نرسل رسائل تسويقية. يمكنك إلغاء الاشتراك في أي وقت.',
      marketingText2: 'يمكنك التحكم في ملفات تعريف الارتباط عبر المتصفح. رفضها قد يؤثر على بعض الوظائف.',

      cookiesTitle: 'ملفات تعريف الارتباط',
      cookiesText: `نستخدم ملفات تعريف الارتباط لتتبع الزوار وأفعالهم.<br>
                   يمكنك تعطيلها من إعدادات المتصفح.`,

      retentionTitle: 'مدة الاحتفاظ بالبيانات',
      retentionText: `نحتفظ ببياناتك طالما كان ذلك ضروريًا لتقديم الخدمات والالتزام بالقوانين.<br>
                     يمكنك طلب الحذف وإغلاق الحساب.`,

      updatesTitle: 'تحديثات السياسة',
      updatesText: 'نقوم بتحديث هذه السياسة لتعكس التغييرات القانونية أو التشغيلية.',

      contactTitle: 'الاتصال',
      contactText: `لأي استفسار، تواصل معنا عبر <a href="mailto:contact@hakimdev.ch">contact@hakimdev.ch</a>.`,
      definition: 'تُستخدم كلمتا "المعلومات الشخصية" و"البيانات الشخصية" بنفس المعنى في هذه السياسة.'
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