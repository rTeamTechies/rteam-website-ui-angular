import { Component, ViewChild, ElementRef, HostListener, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('servicesSection') servicesSection!: ElementRef;
  @ViewChild('workSection') workSection!: ElementRef;
  @ViewChild('contactSection') contactSection!: ElementRef;
  @ViewChild('heroSection') heroSection!: ElementRef;

  isNavbarScrolled = false;
  activeSection: string = 'home';

  ngAfterViewInit() {
    this.onWindowScroll(); // Set initial state
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPos = window.pageYOffset;
    
    // Get section positions using getBoundingClientRect for more accuracy
    const heroRect = this.heroSection?.nativeElement?.getBoundingClientRect();
    const servicesRect = this.servicesSection?.nativeElement?.getBoundingClientRect();
    const workRect = this.workSection?.nativeElement?.getBoundingClientRect();
    const contactRect = this.contactSection?.nativeElement?.getBoundingClientRect();

    // Check if navbar should be scrolled (after hero section)
    this.isNavbarScrolled = scrollPos > (this.heroSection?.nativeElement?.offsetHeight || 0) - 10;

    // Determine active section based on which section is in view
    if (servicesRect && servicesRect.top > 100) {
      this.activeSection = 'home';
    } else if (servicesRect && servicesRect.top <= 100 && workRect && workRect.top > 100) {
      this.activeSection = 'about';
    } else if (workRect && workRect.top <= 100 && contactRect && contactRect.top > 500) {
      this.activeSection = 'work';
    } else if (contactRect && contactRect.top <= 500) {
      this.activeSection = 'contact';
    }
  }

  scrollToServicesSection() {
    this.scrollToSection(this.servicesSection);
  }
  scrollToWorkSection() {
    this.scrollToSection(this.workSection);
  }
  scrollToContactSection() {
    this.scrollToSection(this.contactSection);
  }

  private scrollToSection(sectionRef: ElementRef) {
    const yOffset = -60; // Adjust this offset for your header height
    const element = sectionRef.nativeElement;
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}
