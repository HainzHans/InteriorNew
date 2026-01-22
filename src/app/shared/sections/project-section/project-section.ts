import {Component, input} from '@angular/core';
import {PainPointComponent} from '../../components/pain-point-component/pain-point-component';
import {PrimaryButton} from '../../components/primary-button/primary-button';
import {NavigationButton} from '../../components/navigation-button/navigation-button';
import {Project} from '../../../pages/project-page/models/project.model';

@Component({
  selector: 'app-project-section',
  imports: [
    PainPointComponent,
    NavigationButton
  ],
  templateUrl: './project-section.html',
  styleUrl: './project-section.css',
})
export class ProjectSection {

  project = input<Project>();

}
