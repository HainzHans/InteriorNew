import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class JumpToSectionService {

  scrollToSection(section: string) {
    const element = document.getElementById(section);
    if (!element) return;

    const y = element.getBoundingClientRect().top + window.scrollY - 50;

    window.scrollTo({
      top: y,
      behavior: 'smooth'
    });
  }

}
