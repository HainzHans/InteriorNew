import { Component } from '@angular/core';
import {PrimaryButton} from '../primary-button/primary-button';

@Component({
  selector: 'app-header-component',
  imports: [
    PrimaryButton,
  ],
  templateUrl: './header-component.html',
  styleUrl: './header-component.css',
})
export class HeaderComponent {

}
