import { Component, Input } from '@angular/core';
import { IJellyBean } from '../../../interfaces/sweets';

@Component({
  selector: 'jelly-bean',
  standalone: true,
  imports: [],
  templateUrl: './jelly-bean.component.html',
  styleUrl: './jelly-bean.component.scss'
})
export class JellyBeanComponent {
  @Input() jellyBean!: IJellyBean;
}
