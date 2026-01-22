import { Component } from '@angular/core';
import {PrimaryButton} from '../primary-button/primary-button';
import {JumpToSectionService} from '../../services/jump-to-section-service';

@Component({
  selector: 'app-header-component',
  imports: [
    PrimaryButton,
  ],
  templateUrl: './header-component.html',
  styleUrl: './header-component.css',
})
export class HeaderComponent {

  isMenuOpen = false;

  constructor(private jumpToSectionService: JumpToSectionService) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  scrollToSection(section: string) {
    this.jumpToSectionService.scrollToSection(section);
    this.isMenuOpen = false;
  }
}

