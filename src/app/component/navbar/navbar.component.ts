import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  navbarOpen = false;

  toggleNavbar(): void {
    this.navbarOpen = !this.navbarOpen;

    // this.navbarOpen = !this.navbarOpen;
    // this.navbarOpen = !this.navbarOpen;
    // if (this.navbarOpen) {
    //   this.renderer.addClass(this.el.nativeElement, 'highlight');
    // } else {
    //   this.renderer.removeClass(this.el.nativeElement, 'highlight');
    // }
  }
  toggle() {
    this.navbarOpen = !this.navbarOpen;
    if (this.navbarOpen) {
      this.renderer.addClass(this.el.nativeElement, 'highlight');
    } else {
      this.renderer.removeClass(this.el.nativeElement, 'highlight');
    }
  }
}
