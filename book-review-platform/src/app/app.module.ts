import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ReviewFormComponent } from './components/review-form/review-form.component';
import { routes } from './app-routing.module'; // Import routes
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ReviewListComponent } from './components/review-list/review-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ReviewListComponent,
    ReviewFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes) // Add RouterModule with routes
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi()) // Configure HttpClient with interceptors
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }