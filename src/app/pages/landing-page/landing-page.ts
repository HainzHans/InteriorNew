import { Component } from '@angular/core';
import {HeaderComponent} from '../../shared/components/header-component/header-component';
import {HeroSection} from '../../shared/sections/hero-section/hero-section';
import {PainPointsSection} from './sections/pain-points-section/pain-points-section';
import {AboutMeSection} from './sections/about-me-section/about-me-section';
import {ProjectSection} from './sections/project-section/project-section';
import {CustomerReferenceSection} from './sections/customer-reference-section/customer-reference-section';
import {PainPoint} from './models/painPoint.model';
import {ServiceSection} from './sections/service-section/service-section';
import {ServicePoint} from './models/servicePoint.model';
import {FooterSection} from '../../shared/sections/footer-section/footer-section';
import {ContactSection} from '../../shared/sections/contact-section/contact-section';

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


}


