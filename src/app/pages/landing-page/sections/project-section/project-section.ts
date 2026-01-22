import { Component } from '@angular/core';
import {PainPointComponent} from '../../../../shared/components/pain-point-component/pain-point-component';
import {PrimaryButton} from '../../../../shared/components/primary-button/primary-button';
import {NavigationButton} from '../../../../shared/components/navigation-button/navigation-button';

@Component({
  selector: 'app-project-section',
  imports: [
    PainPointComponent,
    NavigationButton
  ],
  templateUrl: './project-section.html',
  styleUrl: './project-section.css',
})
export class ProjectSection {

  title = 'SCHLAFZIMMER FÜR BERGLER';
  titleColor = '#efebe0';

}
