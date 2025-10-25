




import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { SubscribeComponent } from './components/common/subscribe/subscribe.component';
import { NotFoundComponent } from './components/common/not-found/not-found.component';
import { BlogComponent } from './components/common/blog/blog.component';
import { PricingComponent } from './components/common/pricing/pricing.component';
import { ProjectsComponent } from './components/common/projects/projects.component';
import { WhyChooseUsComponent } from './components/common/why-choose-us/why-choose-us.component';
import { FeedbackComponent } from './components/common/feedback/feedback.component';
import { FunfactsComponent } from './components/common/funfacts/funfacts.component';
import { ServicesComponent } from './components/common/services/services.component';
import { QuotesComponent } from './components/common/quotes/quotes.component';
import { FeaturesComponent } from './components/common/features/features.component';
import { PartnerComponent } from './components/common/partner/partner.component';
import { HomeoneBannerComponent } from './components/pages/home-demo-one/homeone-banner/homeone-banner.component';
import { ExpertiseComponent } from './components/common/expertise/expertise.component';
import { AboutComponent } from './components/common/about/about.component';
import { TeamComponent } from './components/common/team/team.component';
import { ServicesPageOneComponent } from './components/pages/services-page-one/services-page-one.component';
import { FaqComponent } from './components/common/faq/faq.component';
import { PrivacyPolicyPageComponent } from './components/pages/privacy-policy-page/privacy-policy-page.component';
import { TermsConditionsPageComponent } from './components/pages/terms-conditions-page/terms-conditions-page.component';
import { ForgotPasswordPageComponent } from './components/pages/forgot-password-page/forgot-password-page.component';
import { ClientsFeedbackPageComponent } from './components/pages/clients-feedback-page/clients-feedback-page.component';
import { TeamPageComponent } from './components/pages/team-page/team-page.component';
import { BlogGridPageComponent } from './components/pages/blog-grid-page/blog-grid-page.component';
import { WidgetSidebarComponent } from './components/common/widget-sidebar/widget-sidebar.component';

import { SlicePipe } from '@angular/common';








 import{CommonModule} from '@angular/common'

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS,HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Modules ngx-bootstrap
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxScrollTopModule } from 'ngx-scrolltop';

// Composants
import { HomeDemoOneComponent } from './components/pages/home-demo-one/home-demo-one.component';
import { AppComponent } from './app.component';
// import { LetsTalkComponent } from './components/common/lets-talk/lets-talk.component';
import { ChatKimiComponent } from './components/common/chat-kimi/chat-kimi.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import { FaqPageComponent } from './components/pages/faq-page/faq-page.component';
import { PricingPageComponent } from './components/pages/pricing-page/pricing-page.component';
import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { PortfolioPageOneComponent } from './components/pages/portfolio-page-one/portfolio-page-one.component';
import { CoursPageComponent } from './components/pages/cours-page/cours-page.component';
import { ProfileAuthenticationPageComponent } from './components/pages/profile-authentication-page/profile-authentication-page.component';
// Common
// import { authInterceptor } from './interceptors/auth.interceptor';
import { HeaderComponent } from './components/common/header/header.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { TokenInterceptor } from './interceptors/auth.interceptor';
// Interceptor
// import { AuthInterceptor } from './interceptors/auth.interceptor';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    // LetsTalkComponent,
    HomeDemoOneComponent,
    //  ChatKimiComponent,
        ContactPageComponent,
    FaqPageComponent,
    PricingPageComponent,
    AboutPageComponent,
    PortfolioPageOneComponent,
    CoursPageComponent,
    ProfileAuthenticationPageComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    BlogComponent,
    PricingComponent,
    ProjectsComponent,
    WhyChooseUsComponent,
    FeedbackComponent,
    FunfactsComponent,
    ServicesComponent,
    QuotesComponent,
    FeaturesComponent,
    PartnerComponent,
    HomeoneBannerComponent,
    ExpertiseComponent,
    TeamComponent,
    ServicesPageOneComponent,
    FaqComponent,
    PrivacyPolicyPageComponent,
    TermsConditionsPageComponent,
    ForgotPasswordPageComponent,
    ClientsFeedbackPageComponent,
    TeamPageComponent,
    BlogGridPageComponent,
    WidgetSidebarComponent,
    //  DiscuteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    SlicePipe,
    BrowserAnimationsModule,
    NgxScrollTopModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    //DiscuteComponent,
    //  LetsTalkComponent,
     ChatKimiComponent,
    RouterModule.forRoot([
      { path: 'contact', component: ContactPageComponent },
       { path: 'discute', component: ChatKimiComponent },
      { path: 'auth', component: ProfileAuthenticationPageComponent },
      { path: 'cours', component: CoursPageComponent },
      { path: 'projets', component: PortfolioPageOneComponent },
      { path: '', redirectTo: '/', pathMatch: 'full' },
    ]),

    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),

    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ModalModule.forRoot(),
    AccordionModule.forRoot(),
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot()
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
