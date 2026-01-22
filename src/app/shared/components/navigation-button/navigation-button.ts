import {Component, input} from '@angular/core';

@Component({
  selector: 'app-navigation-button',
  imports: [],
  templateUrl: './navigation-button.html',
  styleUrl: './navigation-button.css',
})
export class NavigationButton {

  buttonTitle = input<string>('');

}
