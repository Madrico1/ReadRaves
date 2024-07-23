import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],  // Correct imports for standalone mode
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  // Corrected to 'styleUrls' and as an array
})
export class AppComponent {
  title = 'book-review-platform';
}