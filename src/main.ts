import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { HeaderComponent } from './app/components/header.component';
import { HeroComponent } from './app/components/hero.component';
import { ServicesComponent } from './app/components/services.component';
import { PortfolioComponent } from './app/components/portfolio/portfolio.component';
import { ContactComponent } from './app/components/contact.component';
import { FooterComponent } from './app/components/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    ServicesComponent,
    PortfolioComponent,
    ContactComponent,
    FooterComponent
  ],
  template: `
    <app-header></app-header>
    <app-hero></app-hero>
    <app-services></app-services>
    <app-portfolio></app-portfolio>
    <app-contact></app-contact>
    <app-footer></app-footer>
  `
})
export class App {}

bootstrapApplication(App);