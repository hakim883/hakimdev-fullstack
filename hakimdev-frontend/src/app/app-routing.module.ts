import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/common/not-found/not-found.component';
import { AboutPageComponent } from './components/pages/about-page/about-page.component';
// import { LetsTalkComponent } from './components/common/lets-talk/lets-talk.component';
import { BlogGridPageComponent } from './components/pages/blog-grid-page/blog-grid-page.component';
import { ClientsFeedbackPageComponent } from './components/pages/clients-feedback-page/clients-feedback-page.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import { CoursPageComponent } from './components/pages/cours-page/cours-page.component';
import { FaqPageComponent } from './components/pages/faq-page/faq-page.component';
import { ForgotPasswordPageComponent } from './components/pages/forgot-password-page/forgot-password-page.component';
import { HomeDemoOneComponent } from './components/pages/home-demo-one/home-demo-one.component';
import { PortfolioPageOneComponent } from './components/pages/portfolio-page-one/portfolio-page-one.component';
import { PricingPageComponent } from './components/pages/pricing-page/pricing-page.component';
import { PrivacyPolicyPageComponent } from './components/pages/privacy-policy-page/privacy-policy-page.component';
import { ProfileAuthenticationPageComponent } from './components/pages/profile-authentication-page/profile-authentication-page.component';
import { ServicesPageOneComponent } from './components/pages/services-page-one/services-page-one.component';
import { TeamPageComponent } from './components/pages/team-page/team-page.component';
import { TermsConditionsPageComponent } from './components/pages/terms-conditions-page/terms-conditions-page.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import {ChatKimiComponent} from './components/common/chat-kimi/chat-kimi.component'
const routes: Routes = [
    { path: 'auth', component: ProfileAuthenticationPageComponent },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
        {path: '', component: HomeDemoOneComponent},
  
    {path: 'about', component: AboutPageComponent},
    {path: 'team', component: TeamPageComponent},
    {path: 'pricing', component: PricingPageComponent},
    {path: 'services', component: ServicesPageOneComponent},

  
    {path: 'projects', component: PortfolioPageOneComponent},
  
    {path: 'profile-authentication', component: ProfileAuthenticationPageComponent},
    {path: 'forgot-password', component: ForgotPasswordPageComponent},
    {path: 'clients-feedback', component: ClientsFeedbackPageComponent},
    {path: 'faq', component: FaqPageComponent},
    {path: 'privacy-policy', component: PrivacyPolicyPageComponent},
    {path: 'terms-conditions', component: TermsConditionsPageComponent},
    {path:'cours',component:CoursPageComponent},
    {path: 'blog-grid', component: BlogGridPageComponent},
    {path: 'contact', component: ContactPageComponent},

    {path: '**', component: NotFoundComponent} ,// This line will remain down from the whole pages component list
   
     { path: 'discute', component: ChatKimiComponent },
     { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }