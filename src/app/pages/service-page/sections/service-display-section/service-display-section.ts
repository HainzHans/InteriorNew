import { Component } from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {AbsoluteStarComponent} from '../../../../shared/components/absolute-star-component/absolute-star-component';

@Component({
  selector: 'app-service-display-section',
  imports: [
    MatIcon,
    AbsoluteStarComponent
  ],
  templateUrl: './service-display-section.html',
  styleUrl: './service-display-section.css',
})
export class ServiceDisplaySection {

  openQuickFixItem: number | null = null;
  openMakeOverItem: number | null = null;

  toggleQuickFix(id: number) {
    this.openQuickFixItem = this.openQuickFixItem === id ? null : id;
  }

  toggleMakeOver(id: number) {
    this.openMakeOverItem = this.openMakeOverItem === id ? null : id;
  }


  quickFixTitle: string = 'DER "QUICK FIX"';
  quickFixSubTitle: string = 'Du bekommst schnell und einfach Experten-Tipps rund um das Thema einrichten - abgestimmt auf dich, ' +
    'deine Wünsche und Bedürfnisse und die Funktion des Raumes.';

  quickFixPoints: ServicePoint[] = [
    {
      id: 1,
      title: 'ÜBERMITTLUNG VON FOTOS',
      text: 'Du schickst mir Fotos von einem "Problemraum" und erzählst mir kurz was dich stört.\n' +
        'Auf dieser Basis mache ich mir bereits ein paar Gedanken, bevor wir uns zu einem Zoom-Call verabreden und alles "vor Ort" besprechen.'
    },
    {
      id: 2,
      title: 'EXPERTEN GESPRÄCH',
      text: 'Wir verabreden uns zu einem Zoom-Call (ca. 1,5 Stunden).\n' +
        'Jetzt haben wir Zeit, um deine Probleme sowie erste Ideen meinerseits ausführlich zu besprechen.\n' +
        'Zusammen legen wir fest, welche Änderungen möglich und sinnvoll sind.'
    },
    {
      id: 3,
      title: 'ÜBERGABE HANDOUT',
      text: 'Nur das Beste für dich.\n' +
        'Du bekommst eine Zusammenfassung unseres Gesprächs mit vielen allgemeinen Tipps sowie meine konkreten Empfehlungen für die Umgestaltung deines Raumes.'
    }
  ]

  makeOverTitle: string = 'DAS "MAKEOVER"'
  makeOverSubTitle: string = 'Umgezogen oder einfach den Wusch nach was neuem? Mit meinem MAKEOVER bekommst du ein ganzheitliches Einrichtungskonzept ' +
    'inkl. Farberatung, Kaufliste und Umsetzungsleitfaden. Geplant nach deinen Wünschen und Bedürfnissen.';


  makeOverPoints: ServicePoint[] = [
    {
      id: 1,
      title: 'ÜBERMITTLUNG VON FOTOS',
      text: 'Du füllst den bereitgestellten Fragebogen aus und schickst mir diesen zusammen mit Fotos von deinem "Problemraum" zu.\n' +
        'Auf dieser Basis mache ich mir bereits ein paar Gedanken, bevor wir uns zu einem Zoom-Call verabreden und alles "vor Ort" besprechen.'
    },
    {
      id: 2,
      title: 'EXPERTEN GESPRÄCH',
      text: 'Wir verabreden uns zu einem Zoom-Call (ca 1,5 Stunden).\n' +
        'Jetzt haben wir Zeit, um die Punkte aus deinem Fragebogen sowie die ersten Ideen meinerseits ausführlich zu besprechen.\n' +
        'Zusammen legen wir fest, welche Änderungen möglich und sinnvoll sind.'
    },
    {
      id: 3,
      title: 'MOODBOARD',
      text: 'Du erhältst einen ersten Eindruck.\n' +
        'Auf Basis deiner Angaben erstelle ich ein Moodboard inklusive Farbkonzept. So bekommst du ein Gefühl dafür, wie sich der Raum zusammenfügen wird.\n' +
        'Dies besprechen wir in einem weiteren Zoom-Call'
    },
    {
      id: 4,
      title: 'OPTIMIERUNGEN',
      text: 'Wir verabreden uns zu einem weitern Zoom-Call (ca. 1,5 Stunden).\n' +
        'Wir besprechen das Moodboard und klären Fragen. Hier hast du auch die Möglichkeit Änderungswünsche zu kommunizieren.\n' +
        'Wir legen das Moodboard final fest.'
    },
    {
      id: 5,
      title: 'ENDERGEBNIS',
      text: 'Erarbeitung und Bereitstellung des ganzheitlichen Einrichtungskonzepts inkl. Leitfaden zur Umsetzung.\n' +
        'Aufgrund des überarbeiteten Moodboards erstelle ich das Konzept für deinen persönlichen "Raum fürs echte Leben".\n' +
        '\n' +
        'Dies beinhaltet:\n' +
        '- Moodboard inkl. Farbkonzept\n' +
        '- Möberlierungsplan\n' +
        '- Dekorationskonzept\n' +
        '- Wandgestaltung\n' +
        '- Einkaufsliste\n' +
        '- Guide zur Umsetzung\n' +
        '\n' +
        'optionale Zusatzleistungen:\n' +
        '3D-Ansichten - erste: 129,- jede weitere 30,-\n' +
        'Renderrings - je 30,-'
    }
  ]



}

export interface ServicePoint {
  id: number
  title: string;
  text: string;
}
