import {Component, input} from '@angular/core';
import {NavigationButton} from '../../components/navigation-button/navigation-button';

@Component({
  selector: 'app-about-me-section',
  imports: [
    NavigationButton
  ],
  templateUrl: './about-me-section.html',
  styleUrl: './about-me-section.css',
})
export class AboutMeSection {

  subTitle = input<string>('');
  subText = input<string>('');
  text = input<string>('');
  imageUrl = input<string>('');

  displayButton = input<boolean>(true);

}
