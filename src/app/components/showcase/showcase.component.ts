import { Component, Input } from '@angular/core';
import { JellyBeanComponent } from '../jelly-bean/jelly-bean.component';
import { CommonModule } from '@angular/common';
import { IJellyBeansList } from '../../../interfaces/sweets';

@Component({
  selector: 'app-showcase',
  standalone: true,
  imports: [JellyBeanComponent, CommonModule],
  templateUrl: './showcase.component.html',
  styleUrl: './showcase.component.scss'
})
export class ShowcaseComponent {
  @Input() jellyBeansList!: IJellyBeansList;
}
