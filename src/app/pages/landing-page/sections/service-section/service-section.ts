import {Component, input} from '@angular/core';
import {PainPointComponent} from '../../../../shared/components/pain-point-component/pain-point-component';
import {ServicePoint} from '../../models/servicePoint.model';
import {NavigationButton} from '../../../../shared/components/navigation-button/navigation-button';

@Component({
  selector: 'app-service-section',
  imports: [
    PainPointComponent,
    NavigationButton
  ],
  templateUrl: './service-section.html',
  styleUrl: './service-section.css',
})
export class ServiceSection {

  title = input<string>('');
  servicePoints = input<ServicePoint[]>([]);
  textColor = '#605f4b';

}
