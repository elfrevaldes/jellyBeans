import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

// Pass through component sets routing system
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styles: `.wrapper { height: auto; padding: 10px; width: 100%; flex-grow: 1; box-sizing: border-box; }`,
})
export class AppComponent {
}
