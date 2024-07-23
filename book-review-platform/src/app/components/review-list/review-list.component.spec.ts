import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReviewListComponent } from './review-list.component';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule if needed
import { NO_ERRORS_SCHEMA } from '@angular/core'; // Optional: To ignore unknown elements and attributes

describe('ReviewListComponent', () => {
  let component: ReviewListComponent;
  let fixture: ComponentFixture<ReviewListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReviewListComponent], // Add ReviewListComponent to declarations
      imports: [HttpClientModule], // Add HttpClientModule if your component uses HTTP services
      schemas: [NO_ERRORS_SCHEMA] // Optional: To ignore unknown elements and attributes
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
