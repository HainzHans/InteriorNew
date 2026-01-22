import { Routes } from '@angular/router';
import {AboutMePage} from './pages/about-me-page/about-me-page';
import {LandingPage} from './pages/landing-page/landing-page';
import {ProjectPage} from './pages/project-page/project-page';
import {ServicePage} from './pages/service-page/service-page';

export const routes: Routes = [
  {path: 'home', component: LandingPage },
  {path: 'about', component: AboutMePage},
  {path: 'projects', component: ProjectPage},
  {path: 'services', component: ServicePage},
  {path: '**', redirectTo: 'home' },
];
