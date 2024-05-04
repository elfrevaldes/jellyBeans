import { Component, Input, OnInit } from '@angular/core';
import { JellyBeanComponent } from '../jelly-bean/jelly-bean.component';
import { CommonModule } from '@angular/common';
import { IJellyBean, IJellyBeansList } from '../../../interfaces/sweets';
import { SweetsService } from '../../services/sweets.service';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-showcase',
  standalone: true,
  imports: [JellyBeanComponent, CommonModule, CarouselModule],
  templateUrl: './showcase.component.html',
  styleUrl: './showcase.component.scss'
})
export class ShowcaseComponent implements OnInit {
  @Input() jellyBeansList!: IJellyBean[];
  responsiveOptions: any[] | undefined;
  
  constructor(private sweetService: SweetsService){
  }

  onJellyBeanOutput(jellyBean: IJellyBean){
    // I want to do something with jb
  }

  ngOnInit() {  
    // Mocking the data for now until I connect with AWS S3
    this.jellyBeansList = this.sweetService.getFakeJellyBeans();
    this.jellyBeansList = this.jellyBeansList.filter(jellyBean => jellyBean.isFeatured);
    this.responsiveOptions = [
            {
                breakpoint: '1199px',
                numVisible: 1,
                numScroll: 1
            },
            {
                breakpoint: '991px',
                numVisible: 2,
                numScroll: 1
            },
            {
                breakpoint: '767px',
                numVisible: 1,
                numScroll: 1
            }
        ];
  }

  getSeverity(status: string) {
        switch (status) {
            case 'INSTOCK':
                return 'success';
            case 'LOWSTOCK':
                return 'warning';
            case 'OUTOFSTOCK':
                return 'danger';
            default:
                return 'danger';
        }
    }
  //console.log(`service was called and response was: ${JSON.stringify(this.jellyBeansList.sweetsList)}`);

  // I need to connect with Amazon S3 with an Http Get
  // this.sweetsService.getJellyBeans(this.ulrPath, {page: 0, itemsPerPage: 10})
  // .subscribe((jellyBeans: IJellyBeansList) => {
  //   console.log(`service was called and response was: ${jellyBeans.sweetsList}`);
  // });
}
