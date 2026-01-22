import { Component } from '@angular/core';
import {HeroSection} from '../../shared/sections/hero-section/hero-section';
import {HeaderComponent} from '../../shared/components/header-component/header-component';

@Component({
  selector: 'app-about-me-page',
  imports: [
    HeroSection,
    HeaderComponent
  ],
  templateUrl: './about-me-page.html',
  styleUrl: './about-me-page.css',
})
export class AboutMePage {

}
