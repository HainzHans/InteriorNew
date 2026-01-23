import {Component, input} from '@angular/core';
import {NavigationButton} from '../navigation-button/navigation-button';

@Component({
  selector: 'app-pain-point-component',
  imports: [
    NavigationButton
  ],
  templateUrl: './pain-point-component.html',
  styleUrl: './pain-point-component.css',
})
export class PainPointComponent {

  title = input<string | undefined>('');
  subTitle = input<string>('');
  text = input<string>('');
  subText = input<string>('');

  titleColor = input<string | undefined>('');
  textColor = input<string | undefined>('');

  buttonTitle = input<string>('');

  mobileStarVisible = input<boolean>(true);
  backgroundVisible = input<boolean>(false);
}
