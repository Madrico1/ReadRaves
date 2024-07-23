import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ReviewListComponent } from './components/review-list/review-list.component';
import { ReviewFormComponent } from './components/review-form/review-form.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'reviews', component: ReviewListComponent }, // Add the route for ReviewListComponent
  { path: 'review-form', component: ReviewFormComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect to login by default
  { path: '**', redirectTo: '/login', pathMatch: 'full' } // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Ensure FormsModule is imported
  exports: [RouterModule]
})
export class AppRoutingModule { }