import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-testimonies',
  templateUrl: './testimonies.component.html',
  styleUrls: ['./testimonies.component.scss'],
})
export class TestimoniesComponent {
  @Input() testimonial!: { quote: string; author: string; imageUrl: string };
}
