import { Component } from '@angular/core';
import {HeroSection} from '../../shared/sections/hero-section/hero-section';
import {HeaderComponent} from '../../shared/components/header-component/header-component';
import {ProjectSection} from '../../shared/sections/project-section/project-section';
import {Project} from './models/project.model';
import {ContactSection} from '../../shared/sections/contact-section/contact-section';
import {FooterSection} from '../../shared/sections/footer-section/footer-section';

@Component({
  selector: 'app-project-page',
  imports: [
    HeroSection,
    HeaderComponent,
    ProjectSection,
    ContactSection,
    FooterSection
  ],
  templateUrl: './project-page.html',
  styleUrl: './project-page.css',
})
export class ProjectPage {

  projects: Project[] = [
    {
      title: 'SCHLAFZIMMER FÜR BERGLER',
      isLastProject: true,
      description: 'Hier wollte ein Ehepaar nach 30 Jahren endlich ein neues Schlafzimmer. ' +
        'Natürlich und gemütlich waren die Hauptwünsche und außerdem sollte der alte, selbst restaurierte Bauernschrank bleiben. ' +
        'Mit viel Holz natürlichen Grüntönen und einer Fototapete mit einem selbst geknipsten Bergpanorama als Motiv, ' +
        'zieht eine entspannte Gemütlichkeit in den Raum ein.',
      isButtonVisible: false,
      textColor: '#605f4b',
      backgroundColor: '#efebe0',
      bigImage: 'assets/images/project/bergler/model_bergler_4.jpg',
      firstSmallImage: 'assets/images/project/bergler/model_bergler_1.jpg',
      secondSmallImage: 'assets/images/project/bergler/before_bergler.jpg'
    },
    {
      title: 'WOHNZIMMER FÜR SAMMLER',
      isLastProject: false,
      description: 'Der Arbeitsplatz sollte harmonisch ins Wohnzimmer integriert werden - weg aus dem Durchgang. ' +
        'Sofa, Teppich und persönliche Gegenstände dürfen bleiben, der Rest ist offen. ' +
        'Gewünscht: Ein Wohlfühlraum, in dem die Plattensammlung inklusive Plattenspieler in den Mittelpunktrückt und durchdachten Stauraum bietet',
      isButtonVisible: false,
      textColor: '#efebe0',
      backgroundColor: '#605f4b',
      bigImage: 'assets/images/project/sammler/after_sammler.png',
      firstSmallImage: 'assets/images/project/sammler/model_sammler_1.jpg',
      secondSmallImage: 'assets/images/project/sammler/before_sammler.jpg'
    },
    {
      title: 'PROJEKT 3',
      isLastProject: false,
      description: 'Der Arbeitsplatz sollte harmonisch ins Wohnzimmer integriert werden - weg aus dem Durchgang. ' +
        'Sofa, Teppich und persönliche Gegenstände dürfen bleiben, der Rest ist offen. ' +
        'Gewünscht: Ein Wohlfühlraum, in dem die Plattensammlung inklusive Plattenspieler in den Mittelpunktrückt und durchdachten Stauraum bietet',
      isButtonVisible: false,
      textColor: '#605f4b',
      backgroundColor: '#efebe0',
      bigImage: 'assets/images/project/schlafzimmer/after_schlafzimmer.jpg',
      firstSmallImage: 'assets/images/project/schlafzimmer/model_schlafzimmer_1.jpg',
      secondSmallImage: 'assets/images/project/schlafzimmer/before_schlafzimmer.jpg'
    }
  ]

}
