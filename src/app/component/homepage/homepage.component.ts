import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent {
  testimonials = [
    {
      quote: 'Great product! It exceeded my expectations.',
      author: 'Helen Doe',
      imageUrl: 'assets/helen.jpg',
    },
    {
      quote: "Amazing service. I'm really impressed.",
      author: 'Henry Smith',
      imageUrl: 'assets/henry.jpg',
    },
    {
      quote: 'Amazing service. this is the best tiles i have gotten.',
      author: 'Mutiu Emmanuel',
      imageUrl: 'assets/mutiu.jpg',
    },
    {
      quote: "i'm impressed with your sevice",
      author: 'Oluchi Madu',
      imageUrl: 'assets/oluchi.jpg',
    },
    // Add more testimonials here
  ];
}
