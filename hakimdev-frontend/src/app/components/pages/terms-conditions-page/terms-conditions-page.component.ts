
import { Component } from '@angular/core';

@Component({
  selector: 'app-terms-conditions-page',
  templateUrl: './terms-conditions-page.component.html',
  styleUrls: ['./terms-conditions-page.component.scss']
})
export class TermsConditionsPageComponent {
  currentLang: any = {};

  readonly texts = {
    en: {
      pageTitle: 'Terms & Conditions',
      home: 'Home',
      intro: `Before you register and download any <strong>HakimDev</strong> product(s), please ensure you have read, acknowledged, and accepted all the terms. By using <strong>HakimDev</strong>, you agree to the following terms and conditions.`,

      refundsTitle: 'Refunds',
      refundsText: `We offer a friendly 15-day <a href="#" target="_blank">refund policy</a>. However, you cannot request a refund claiming a feature that your purchased theme or plugin does not include.`,
      refundsList: [
        'Complimentary ground shipping within 1 to 7 business days',
        'In-store collection available within 1 to 7 business days',
        'Next-day and Express delivery options also available',
        'Purchases are delivered in an orange box tied with a Bolduc ribbon, with the exception of certain items',
        'See the delivery FAQs for details on shipping methods, costs and delivery times'
      ],

      deliveryTitle: 'Product Delivery',
      deliveryText: `All products are downloadable immediately after purchase. Products will be <i>unrestricted</i> for download after payment is received and verified.`,
      deliveryList: [
        'Credit Card: Visa, MasterCard, Discover, American Express, JCB, Visa Electron. The total will be charged to your card when the order is shipped.',
        'HakimDev features a Fast Checkout option, allowing you to securely save your credit card details so that you don\'t have to re-enter them for future purchases.',
        'PayPal: Shop easily online without having to enter your credit card details on the website. Your account will be charged once the order is completed. To register for a PayPal account, visit the website <a href="https://paypal.com" target="_blank">paypal.com</a>.'
      ],
      deliveryNote: `Your purchase info will be emailed to you. You must create an account on our site to download any product. Delays may occur due to fraud checks and can last from 1 hour to 48 hours.`,

      updatesTitle: 'Product Updates',
      updatesText: 'All themes and plugins are compatible with the latest version of WordPress and modern browsers. Updates are provided for a lifetime.',

      modificationsTitle: 'Modifications',
      modificationsText: 'You may modify any product to suit your needs, but please check documentation and contact support before major changes.',

      unauthorizedTitle: 'Unauthorized Usage',
      unauthorizedText: `You may not use HakimDev products for any unauthorized or illegal purpose. Use on sites promoting violence, pornography, or piracy is strictly forbidden. We reserve the right to block your account instantly for improper usage.`,

      licensingTitle: 'Licensing and Usage',
      licensingText: 'Our items are licensed under the GNU General Public License v2.0.',

      supportTitle: 'Help/Support',
      supportText: `Once downloaded, you can contact us via comment, support ticket, or email for help. If your request requires extra customization, you must hire an expert.`,

      proprietaryTitle: 'Proprietary',
      proprietaryText: `You may not claim ownership of any product, modified or not. All products belong to <strong>HakimDev</strong>. Our products are provided “as is” without warranty.`,

      antiFraudTitle: 'Anti-Fraud',
      antiFraudText: 'Purchases may be delayed for manual anti-fraud checks. Accounts may be suspended for up to 24 hours or longer for investigation.',

      priceChangesTitle: 'Price Changes',
      priceChangesText: 'HakimDev reserves the right to change or discontinue any product at any time without notice.',

      warrantyTitle: 'Warranty',
      warrantyText: `HakimDev products are provided “as is” without any warranty. We guarantee compatibility with the latest stable versions of WordPress and modern browsers. We do not guarantee compatibility with third-party plugins or provide stock images/fonts.`,

      finalClause: 'We reserve the right to change and modify terms and conditions at any time without prior notice.'
    },
    fr: {
      pageTitle: 'Conditions Générales',
      home: 'Accueil',
      intro: `Avant de télécharger un produit <strong>HakimDev</strong>, assurez-vous d’avoir lu et accepté les conditions. En utilisant nos services, vous acceptez ces termes.`,

      refundsTitle: 'Remboursements',
      refundsText: `Politique de remboursement amicale de 15 jours. Aucun remboursement pour une fonctionnalité absente.`,
      refundsList: [
        'Livraison gratuite sous 1 à 7 jours ouvrables',
        'Retrait en magasin sous 1 à 7 jours ouvrables',
        'Options livraison express disponibles',
        'Livraison dans une boîte orange avec ruban Bolduc',
        'Consultez les FAQ pour détails et délais'
      ],

      deliveryTitle: 'Livraison des produits',
      deliveryText: `Tous les produits sont téléchargeables après vérification du paiement.`,
      deliveryList: [
        'Cartes acceptées : Visa, MasterCard, Discover, American Express, JCB...',
        'Option "Fast Checkout" pour sauvegarder vos infos en toute sécurité',
        'PayPal : sans saisie de carte. Créez un compte sur <a href="https://paypal.com" target="_blank">paypal.com</a>'
      ],
      deliveryNote: `Les infos d’achat seront envoyées par email. Créez un compte pour télécharger. Délai possible de 1h à 48h en cas de contrôle anti-fraude.`,

      updatesTitle: 'Mises à jour',
      updatesText: 'Compatibles avec la dernière version de WordPress et navigateurs modernes. Mises à jour à vie.',

      modificationsTitle: 'Modifications',
      modificationsText: 'Vous pouvez modifier selon vos besoins, mais consultez la doc ou le support avant.',

      unauthorizedTitle: 'Usage non autorisé',
      unauthorizedText: `Interdit d’utiliser les produits pour des fins illégales ou sur des sites violents, pornographiques ou pirates.`,

      licensingTitle: 'Licence',
      licensingText: 'Nos produits sont sous licence GNU GPL v2.0.',

      supportTitle: 'Support',
      supportText: `Contactez-nous via commentaire ou ticket. Pour modifications avancées, engagez un expert.`,

      proprietaryTitle: 'Propriété',
      proprietaryText: `Aucune revendication de propriété intellectuelle. Produits fournis « en l’état » sans garantie.`,

      antiFraudTitle: 'Anti-fraude',
      antiFraudText: 'Vérifications manuelles possibles. Suspension jusqu’à 24h ou plus en cas d’investigation.',

      priceChangesTitle: 'Changements de prix',
      priceChangesText: 'HakimDev se réserve le droit de changer ou retirer tout produit sans préavis.',

      warrantyTitle: 'Garantie',
      warrantyText: `Produits fournis « en l’état ». Garantie de compatibilité avec WordPress et navigateurs récents. Pas de garantie avec plugins tiers ni images/fonts.`,

      finalClause: 'Nous nous réservons le droit de modifier les conditions à tout moment sans préavis.'
    },
    de: {
      pageTitle: 'Allgemeine Geschäftsbedingungen',
      home: 'Startseite',
      intro: `Bevor Sie ein <strong>HakimDev</strong>-Produkt herunterladen, lesen und akzeptieren Sie bitte die Bedingungen.`,

      refundsTitle: 'Rückerstattungen',
      refundsText: `Freundliche 15-Tage-Rückgabepolitik. Keine Rückerstattung für fehlende Funktionen.`,
      refundsList: [
        'Kostenloser Versand innerhalb von 1–7 Werktagen',
        'Abholung im Geschäft innerhalb von 1–7 Werktagen',
        'Expresslieferung verfügbar',
        'Lieferung in orangener Box mit Bolduc-Band',
        'Siehe FAQ für Versanddetails'
      ],

      deliveryTitle: 'Produktdownload',
      deliveryText: `Alle Produkte sind sofort nach Zahlungsbestätigung verfügbar.`,
      deliveryList: [
        'Akzeptierte Karten: Visa, MasterCard, Discover, American Express, JCB...',
        'Schneller Checkout zur sicheren Speicherung Ihrer Daten',
        'PayPal: keine Karteneingabe. Registrierung unter <a href="https://paypal.com" target="_blank">paypal.com</a>'
      ],
      deliveryNote: `Kaufdaten werden per E-Mail versendet. Sie benötigen ein Konto. Verzögerungen von 1–48h möglich bei Anti-Betrugsprüfung.`,

      updatesTitle: 'Updates',
      updatesText: 'Kompatible mit der neuesten WordPress-Version und modernen Browsern. Lebenslange Updates.',

      modificationsTitle: 'Änderungen',
      modificationsText: 'Sie dürfen anpassen, aber bitte vorher Dokumentation prüfen oder Support kontaktieren.',

      unauthorizedTitle: 'Unbefugte Nutzung',
      unauthorizedText: `Nutzung für illegale Zwecke oder auf Seiten mit Gewalt, Pornografie oder Piraterie verboten.`,

      licensingTitle: 'Lizenz',
      licensingText: 'Unsere Produkte sind unter der GNU GPL v2.0 lizenziert.',

      supportTitle: 'Support',
      supportText: `Kontakt über Kommentar oder Ticket. Für komplexe Anpassungen Expert hinzuziehen.`,

      proprietaryTitle: 'Eigentum',
      proprietaryText: `Keine Eigentumsansprüche. Produkte „wie gesehen“ ohne Garantie.`,

      antiFraudTitle: 'Anti-Betrug',
      antiFraudText: 'Manuelle Prüfungen möglich. Kontosperre bis 24h oder länger bei Untersuchung.',

      priceChangesTitle: 'Preisänderungen',
      priceChangesText: 'HakimDev behält sich das Recht vor, Produkte jederzeit ohne Vorankündigung zu ändern.',

      warrantyTitle: 'Garantie',
      warrantyText: `Produkte „wie gesehen“. Garantie für Kompatibilität mit aktuellem WordPress und Browsern. Keine Garantie für Plugins oder Bilder/Schriften.`,

      finalClause: 'Wir behalten uns das Recht vor, Bedingungen jederzeit ohne Vorankündigung zu ändern.'
    },
    ar: {
      pageTitle: 'الشروط والأحكام',
      home: 'الرئيسية',
      intro: `قبل تنزيل أي منتج من <strong>HakimDev</strong>، يرجى قراءة وقبول جميع الشروط. باستخدام خدماتنا، توافق على هذه الشروط.`,

      refundsTitle: 'الاسترداد',
      refundsText: `سياسة استرداد لمدة 15 يومًا. لا يمكن استرداد المبالغ بسبب ميزة غير موجودة.`,
      refundsList: [
        'شحن مجاني خلال 1–7 أيام عمل',
        'استلام من المتجر خلال 1–7 أيام عمل',
        'خيارات توصيل سريع متاحة',
        'التوصيل في صندوق برتقالي مع شريط Bolduc',
        'راجع الأسئلة الشائعة للحصول على التفاصيل'
      ],

      deliveryTitle: 'تحميل المنتج',
      deliveryText: `جميع المنتجات متاحة للتحميل بعد التحقق من الدفع.`,
      deliveryList: [
        'الكروت المقبولة: Visa، MasterCard، Discover، American Express، JCB...',
        'خيار الدفع السريع لحفظ بياناتك بأمان',
        'PayPal: بدون إدخال كرت. التسجيل في <a href="https://paypal.com" target="_blank">paypal.com</a>'
      ],
      deliveryNote: `سيتم إرسال معلومات الشراء بالبريد الإلكتروني. تحتاج إلى حساب. قد يستغرق 1–48 ساعة في حالة مراجعة احتيال.`,

      updatesTitle: 'التحديثات',
      updatesText: 'متوافقة مع أحدث إصدار ووردبريس والمتصفحات الحديثة. تحديثات مدى الحياة.',

      modificationsTitle: 'التعديلات',
      modificationsText: 'يمكنك التعديل حسب الحاجة، لكن راجع الوثائق أو تواصل مع الدعم أولًا.',

      unauthorizedTitle: 'الاستخدام غير المصرح',
      unauthorizedText: `يُمنع استخدام المنتجات لأغراض غير قانونية أو على مواقع تحتوي على عنف أو إباحية أو قرصنة.`,

      licensingTitle: 'الترخيص',
      licensingText: 'منتجاتنا مرخصة بموجب ترخيص GNU GPL v2.0.',

      supportTitle: 'الدعم',
      supportText: `تواصل معنا عبر التعليق أو التذكرة. للتعديلات المعقدة استعن بخبير.`,

      proprietaryTitle: 'الملكية',
      proprietaryText: `لا يمكنك المطالبة بالملكية. المنتجات مقدمة "كما هي" بدون ضمان.`,

      antiFraudTitle: 'مكافحة الاحتيال',
      antiFraudText: 'قد تتأخر المشتريات لمراجعة احتيال. يمكن تعليق الحساب حتى 24 ساعة أو أكثر.',

      priceChangesTitle: 'تغييرات الأسعار',
      priceChangesText: 'HakimDev تحتفظ بالحق في تغيير أو سحب أي منتج في أي وقت دون إشعار.',

      warrantyTitle: 'الضمان',
      warrantyText: `المنتجات مقدمة "كما هي". ضمان التوافق مع WordPress والمتصفحات الحديثة. لا ضمان مع الإضافات أو الصور/الخطوط.`,

      finalClause: 'نحتفظ بالحق في تغيير الشروط في أي وقت دون إشعار مسبق.'
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