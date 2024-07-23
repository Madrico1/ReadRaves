import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  private baseUrl = 'http://localhost:3000/api/reviews';

  constructor(private http: HttpClient) { }

  getReviews(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  getReviewById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createReview(review: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post(this.baseUrl, review,{ headers });
  }

  updateReview(id: number, review: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, review);
  }

  deleteReview(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}