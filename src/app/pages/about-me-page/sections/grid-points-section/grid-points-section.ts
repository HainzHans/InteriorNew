import { Component } from '@angular/core';
import {BoxComponent} from '../../../../shared/components/box-component/box-component';

@Component({
  selector: 'app-grid-points-section',
  imports: [
    BoxComponent
  ],
  templateUrl: './grid-points-section.html',
  styleUrl: './grid-points-section.css',
})
export class GridPointsSection {

  gridPoints: GridPoint[] = [
    {
      title: 'EXPERTISE',
      text: 'Als ausgebildete Visual Merchandiserin mit Interior Design Diplom vereine ich professionelles Fachwissen mit praktischer Erfahrung.',
      icon: 'assets/icons/expertise.svg'
    },
    {
      title: 'ANTRIEB',
      text: 'Ich lebe für die Dankbarkeit meiner Kunden, die ich nach unserer Zusammenarbeit erfahren darf.Das ist das größte Kompliment für mich.',
      icon: 'assets/icons/bolt.svg'
    },
    {
      title: 'LEIDENSCHAFT',
      text: 'Ich habe schon als Kind in "Die Sims" Häuser eingerichtet und jede Wohnzeitschrift gelesen, die mir in die Finger gekommen ist.',
      icon: 'assets/icons/passion.svg'
    },
    {
      title: 'ZIEL',
      text: 'Mein kleines Business vorantreiben und so viele Menschen zu deren "Raum fürs echte Leben" verhelfen wie möglich.',
      icon: 'assets/icons/flag.svg'
    },
    {
      title: 'WURZELN',
      text: 'Aktuell wohne ich in einer kleinen aber feinen Dachgeschosswohnung in meinem Heimatdorf im wunderschönen Alpenvorland.',
      icon: 'assets/icons/park.svg'
    },
    {
      title: 'AUTHENTISCH',
      text: 'Neben meiner Arbeit verbringe ich gerne Zeit mit meinem Parter, meiner Familie und Freunden. Am Liebsten draußen beim wandern, klettern, reiten, snowboarden etc.',
      icon: 'assets/icons/verified.svg'
    },
  ];

}

export interface GridPoint {
  title: string;
  text: string;
  icon: string;
}
