import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../../services/review.service';
import { CommonModule } from '@angular/common';
import { ReviewFormComponent } from '../review-form/review-form.component';

@Component({
  selector: 'app-review-list',
  standalone: true,
  imports: [CommonModule,ReviewFormComponent], 
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit {

  reviews: any[] = [];
  showForm: boolean = false;

  constructor(private reviewService: ReviewService) { }

  ngOnInit(): void {
    this.loadReviews();
  }

  loadReviews() {
    this.reviewService.getReviews().subscribe(
      (data) => {
        this.reviews = data;
      },
      (error) => {
        console.error('Error fetching reviews', error);
      }
    );
  }
  toggleForm(): void {
    this.showForm = !this.showForm;
  }

  getStars(rating: number): string {
    return '⭐'.repeat(rating);
  }
}