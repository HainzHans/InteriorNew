import { Component } from '@angular/core';
import {HeroSection} from '../../shared/sections/hero-section/hero-section';
import {HeaderComponent} from '../../shared/components/header-component/header-component';
import {TextSection} from './sections/text-section/text-section';
import {AboutMeSection} from '../../shared/sections/about-me-section/about-me-section';
import {GridPointsSection} from './sections/grid-points-section/grid-points-section';
import {CheckpointSection} from './sections/checkpoint-section/checkpoint-section';
import {ContactSection} from '../../shared/sections/contact-section/contact-section';
import {FooterSection} from '../../shared/sections/footer-section/footer-section';

@Component({
  selector: 'app-about-me-page',
  imports: [
    HeroSection,
    HeaderComponent,
    TextSection,
    AboutMeSection,
    GridPointsSection,
    CheckpointSection,
    ContactSection,
    FooterSection
  ],
  templateUrl: './about-me-page.html',
  styleUrl: './about-me-page.css',
})
export class AboutMePage {

  heroImage = 'assets/images/heros/about_hero.jpg';

  aboutSubTitle = 'ich bin Verena.'
  aboutSubText = 'deine Einrichtungsexpertin aus dem bayrischen Oberland. ' +
    'Mit viel Leidenschaft und Gespür für Menschen und Räumne, verhelfe ich dir zu deinem ganz persönlichen "Raum fürs echte Leben". ' +
    'Auch über die Grenzen des Oberlands hinaus.'
  aboutText = 'Meine persönliche Mission:';
  aboutImageUrl = 'assets/images/profil/profil3.jpg'
}
