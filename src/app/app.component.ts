import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Pass through component sets routing system
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet],
  template: '<router-outlet><router-outlet />',
})
export class AppComponent {
}
