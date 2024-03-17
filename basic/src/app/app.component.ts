import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from '../user/user.component';
import { JokeComponent } from '../joke/joke.component';
import { AComponent } from '../a/a.component';
import { B1Component } from '../b1/b1.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,UserComponent,JokeComponent,AComponent,B1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'basic';
}
