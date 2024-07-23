import { Component } from '@angular/core';
import { ReviewService } from '../../services/review.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-review-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.css']
})
export class ReviewFormComponent {

  bookTitle: string = '';
  reviewContent: string = '';
  rating: number = 1;  // Default rating value

  constructor(private reviewService: ReviewService) { }

  submitReview() {
    const review = {
      bookTitle: this.bookTitle,
      reviewContent: this.reviewContent,
      rating: this.rating
    };

    this.reviewService.createReview(review).subscribe({
      next: (response) => {
        console.log('Review submitted successfully', response);
        window.location.reload(); // Refresh the page
      },
      error: (error) => {
        console.error('Error submitting review', error);
      }
    });
  }
}
