import {Component, input} from '@angular/core';
import {PainPointComponent} from '../../../../shared/components/pain-point-component/pain-point-component';
import {PainPoint} from '../../models/painPoint.model';

@Component({
  selector: 'app-pain-points-section',
  imports: [
    PainPointComponent
  ],
  templateUrl: './pain-points-section.html',
  styleUrl: './pain-points-section.css',
})
export class PainPointsSection {

  title = input<string>('')
  points = input<PainPoint[]>([])

}


