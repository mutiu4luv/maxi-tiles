import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appTypewriter]',
})
export class TypewriterDirective implements AfterViewInit {
  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const text = this.el.nativeElement.textContent;
    this.el.nativeElement.textContent = '';

    this.typeText(text);
  }

  typeText(text: string) {
    let index = 0;

    const typingInterval = setInterval(() => {
      if (index < text.length) {
        this.el.nativeElement.textContent += text[index];
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100); // Adjust the typing speed as needed
  }
}
