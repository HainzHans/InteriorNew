import { Routes } from '@angular/router';
import {AboutMePage} from './pages/about-me-page/about-me-page';
import {LandingPage} from './pages/landing-page/landing-page';

export const routes: Routes = [
  {path: 'home', component: LandingPage },
  {path: 'about', component: AboutMePage},
  {path: '**', redirectTo: 'home' },
];
