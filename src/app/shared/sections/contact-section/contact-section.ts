import { Component } from '@angular/core';
import {PainPointComponent} from "../../components/pain-point-component/pain-point-component";

@Component({
  selector: 'app-contact-section',
    imports: [
        PainPointComponent
    ],
  templateUrl: './contact-section.html',
  styleUrl: './contact-section.css',
})
export class ContactSection {

}
