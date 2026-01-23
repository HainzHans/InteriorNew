import {Component, input} from '@angular/core';

@Component({
  selector: 'app-absolute-star-component',
  imports: [],
  templateUrl: './absolute-star-component.html',
  styleUrl: './absolute-star-component.css',
})
export class AbsoluteStarComponent {

  size = input<string>('6rem');

}
