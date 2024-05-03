import { Component, Input } from '@angular/core';
import { JellyBeanComponent } from '../jelly-bean/jelly-bean.component';
import { CommonModule } from '@angular/common';
import { IJellyBean, IJellyBeansList } from '../../../interfaces/sweets';
import { SweetsService } from '../../services/sweets.service';

@Component({
  selector: 'app-showcase',
  standalone: true,
  imports: [JellyBeanComponent, CommonModule],
  templateUrl: './showcase.component.html',
  styleUrl: './showcase.component.scss'
})
export class ShowcaseComponent {
  @Input() jellyBeansList!: IJellyBeansList;
  
  constructor(private sweetService: SweetsService){
  }

  onJellyBeanOutput(jellyBean: IJellyBean){
    // I want to do something with jb
  }

  ngOnInit() {  
    // Mocking the data for now until I connect with AWS S3
    this.jellyBeansList = this.sweetService.getFakeJellyBeans();
  }
  //console.log(`service was called and response was: ${JSON.stringify(this.jellyBeansList.sweetsList)}`);

  // I need to connect with Amazon S3 with an Http Get
  // this.sweetsService.getJellyBeans(this.ulrPath, {page: 0, itemsPerPage: 10})
  // .subscribe((jellyBeans: IJellyBeansList) => {
  //   console.log(`service was called and response was: ${jellyBeans.sweetsList}`);
  // });
}
