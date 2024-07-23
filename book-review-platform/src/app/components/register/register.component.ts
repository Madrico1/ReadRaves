import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  username: string ='';
  password: string='';
  email: string='';

  constructor(private userService: UserService) { }

  register() {
    this.userService.register(this.username, this.password, this.email).subscribe(
      (response) => {
        console.log('User registered successfully', response);
      },
      (error) => {
        console.error('Error registering user', error);
      }
    );
  }
}