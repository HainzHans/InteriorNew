import { Component } from '@angular/core';
import {HeaderComponent} from '../../shared/components/header-component/header-component';
import {HeroSection} from '../../shared/sections/hero-section/hero-section';
import {ServiceDisplaySection} from './sections/service-display-section/service-display-section';
import {ContactSection} from '../../shared/sections/contact-section/contact-section';
import {FooterSection} from '../../shared/sections/footer-section/footer-section';

@Component({
  selector: 'app-service-page',
  imports: [
    HeaderComponent,
    HeroSection,
    ServiceDisplaySection,
    ContactSection,
    FooterSection
  ],
  templateUrl: './service-page.html',
  styleUrl: './service-page.css',
})
export class ServicePage {

  heroImage = 'assets/images/heros/project_hero.jpg';

}
