import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IJellyBean } from '../../../interfaces/sweets';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'jelly-bean',
  standalone: true,
  imports: [RatingModule, FormsModule],
  templateUrl: './jelly-bean.component.html',
  styleUrl: './jelly-bean.component.scss'
})
export class JellyBeanComponent {
  @Input() jellyBean!: IJellyBean;
  @Output() someOutput: EventEmitter<IJellyBean> = new EventEmitter<IJellyBean>();

  ngOnInit(){
    this.someOutput.emit(this.jellyBean);
  }
}

