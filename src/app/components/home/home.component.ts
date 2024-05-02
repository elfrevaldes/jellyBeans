import { Component } from '@angular/core';
import { ShowcaseComponent } from "../showcase/showcase.component";

@Component({
    selector: 'root-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [ShowcaseComponent]
})
export class HomeComponent {
  title = 'Jelly Beans';
}
