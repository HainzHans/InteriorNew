import { Component, signal } from '@angular/core';
import {LandingPage} from './pages/landing-page/landing-page';

@Component({
  selector: 'app-root',
  imports: [
    LandingPage
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('InteriorNew');
}
