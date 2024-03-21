import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
constructor(private authService:AuthService, private router :Router){}

register(regForm:NgForm){
console.log(regForm.value);
this.authService.registerUser(regForm.value.email,regForm.value.password)
// this.router.navigate(['/login']);
}
reset(regForm:NgForm){
  regForm.reset();
}
}
