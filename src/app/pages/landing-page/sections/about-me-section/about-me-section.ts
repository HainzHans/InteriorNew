import { Component } from '@angular/core';
import {PrimaryButton} from '../../../../shared/components/primary-button/primary-button';
import {NavigationButton} from '../../../../shared/components/navigation-button/navigation-button';

@Component({
  selector: 'app-about-me-section',
  imports: [
    PrimaryButton,
    NavigationButton
  ],
  templateUrl: './about-me-section.html',
  styleUrl: './about-me-section.css',
})
export class AboutMeSection {

}
