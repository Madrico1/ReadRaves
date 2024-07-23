import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string ='';
  password: string ='';

  constructor(private userService: UserService, private router: Router) { }

  login() {
    this.userService.login(this.username, this.password).subscribe({
      next: (response) => {
        console.log('Login successful', response);
        this.router.navigate(['/reviews']);
      },
      error: (error) => {
        console.error('Invalid credentials', error);
      }
    });
  }
}