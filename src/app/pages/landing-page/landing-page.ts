import { Component } from '@angular/core';
import {HeaderComponent} from '../../shared/components/header-component/header-component';
import {HeroSection} from '../../shared/sections/hero-section/hero-section';
import {PainPointsSection} from './sections/pain-points-section/pain-points-section';
import {AboutMeSection} from '../../shared/sections/about-me-section/about-me-section';
import {ProjectSection} from '../../shared/sections/project-section/project-section';
import {CustomerReferenceSection} from './sections/customer-reference-section/customer-reference-section';
import {PainPoint} from './models/painPoint.model';
import {ServiceSection} from './sections/service-section/service-section';
import {ServicePoint} from './models/servicePoint.model';
import {FooterSection} from '../../shared/sections/footer-section/footer-section';
import {ContactSection} from '../../shared/sections/contact-section/contact-section';
import {Project} from '../project-page/models/project.model';

@Component({
  selector: 'app-landing-page',
  imports: [
    HeaderComponent,
    HeroSection,
    PainPointsSection,
    AboutMeSection,
    ProjectSection,
    CustomerReferenceSection,
    ServiceSection,
    FooterSection,
    ContactSection,
  ],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
})
export class LandingPage {

  heroImage = 'assets/images/heros/landing_hero.jpg';

  painPointsTitle = '"DINGE DIE DU WIRKLICH LIEBST. KOMMEN NIEMALS AUS DER MODE!"';
  painPoints: PainPoint[] = [
    {
      title: 'Es wirkt zusammengewürfelt?',
      text: 'Flohmarktfunde, Erbstücke und alte Lieblingsmöbel - viele verschiedene Möbel wirken oft zusammengewürfelt und unruhig. ' +
        'Das heißt aber nicht, dass alles raus muss. Melde dich für eine unverbindliche Einschätzung.'
    },
    {
      title: 'Irgendetwas fehlt?',
      text: 'Du kennst das Gefühl: Man schaut sich in einem Raum um und merkt, etwas fehlt hier. ' +
        'Oft helfen schon kleine Veränderungen, damit sich dein Raum endlich „ganz“ anfühlt und du dich entspannen und wohlfühlen kannst.'
    },
    {
      title: 'Keine Persönlichkeit?',
      text: 'Dein Raum fühlt sich nicht wirklich nach dir an? Das kann verschiedene Gründe haben. Gemeinsam finden wir heraus, was deinem Zuhause fehlt - ' +
        'und verwandeln es in einen Ort, der deine Persönlichkeit widerspiegelt.'
    },
  ]

  serviceTitle = 'LEISTUNGEN';
  servicePoints: ServicePoint[] = [
    {
      title: 'DER "QUICK FIX"',
      subTitle: 'Ideal für dich, wenn deinem Raum noch das i-Tüpfelchen fehlt',
      text: 'Erhalte auf dich und deine Bedürfnisse abgestimmte Tipps und Tricks, wie du deinen vier Wänden den letzten Schliff geben kannst. ' +
        'Die Analyse erfolgt aufgrund von Fotos oder Videos deines Raumes',
      subText: 'ca. 1,5 Stunden – 149€'
    },
    {
      title: 'DAS "MAKEOVER"',
      subTitle: 'Dein Angebot, wenn du Hilfe brauchst ein stimmiges, funktionales Gesamtkonzept zu erarbeiten.',
      text: 'Hier gehen wir in die Tiefe. Wir emitteln deine genauen Wünsche und Bedürfnisse sowie die Anforderungen an den Raum. ' +
        'Am Ende erhälst du eine detailierte "Anleitung", die dich durch die Umsetzung führt.',
      subText: 'Preis auf Anfrage'
    }
  ]

  aboutSubTitle = 'schön, dass du da bist!'
  aboutSubText = 'Du suchst eine Einrichtungsberatung mit Herz und einem Gespür für "Raum fürs echte Leben"? ' +
    'Dann bist du hier goldrichtig!'
  aboutText = 'Ich bin Verena, Naturliebhaberin, kreativer Kopf und permanent dabei meine vier Wände immer noch ein bisschen besser zu machen - so dass sie perfekt für mich und mein Leben funktionieren. ' +
    'Ich helfe dir das gleiche zu tun. Gemeinsam schaffen wir dein Zuhause voller Persönlichkeit, funktional und schön, mit ganz viel Platz fürs echte Leben - und allem was dazugehört.'
  aboutImageUrl = 'assets/images/profil/profil1.jpg'

  landingPageProject: Project = {
    title: 'SCHLAFZIMMER FÜR BERGLER',
    isLastProject: true,
    description: 'Hier wollte ein Ehepaar nach 30 Jahren endlich ein neues Schlafzimmer. ' +
      'Natürlich und gemütlich waren die Hauptwünsche und außerdem sollte der alte, selbst restaurierte Bauernschrank bleiben. ' +
      'Mit viel Holz natürlichen Grüntönen und einer Fototapete mit einem selbst geknipsten Bergpanorama als Motiv, ' +
      'zieht eine entspannte Gemütlichkeit in den Raum ein.',
    isButtonVisible: true,
    textColor: '#efebe0',
    backgroundColor: '#605f4b',
    bigImage: 'assets/images/project/bergler/model_bergler_4.jpg',
    firstSmallImage: 'assets/images/project/bergler/model_bergler_1.jpg',
    secondSmallImage: 'assets/images/project/bergler/before_bergler.jpg'
  }

}


