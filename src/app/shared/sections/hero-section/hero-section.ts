import {Component, input} from '@angular/core';
import {PrimaryButton} from '../../components/primary-button/primary-button';
import {NgStyle} from '@angular/common';

@Component({
  selector: 'app-hero-section',
  imports: [
    PrimaryButton,
    NgStyle
  ],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css',
})
export class HeroSection {

  smallHero = input<boolean>(false);

  aboutHero = input<boolean>(false);
  projectHero = input<boolean>(false);
  serviceHero = input<boolean>(false);

  heroImage = input<string>('');

}
