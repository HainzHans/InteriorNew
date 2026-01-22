import {Component, input} from '@angular/core';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-box-component',
  imports: [
    MatIcon
  ],
  templateUrl: './box-component.html',
  styleUrl: './box-component.css',
})
export class BoxComponent {

  icon = input<string>('');
  title = input<string>('');
  text = input<string>('');

}
