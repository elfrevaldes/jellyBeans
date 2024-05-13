import { Component, Input, OnInit } from '@angular/core';
import { JellyBeanComponent } from '../jelly-bean/jelly-bean.component';
import { CommonModule } from '@angular/common';
import { IJellyBean, IJellyBeansList } from '../../../interfaces/sweets';
import { CarouselModule } from 'primeng/carousel';
import { ApiService } from '../../services/api.service';
import { Subscription, catchError, of, tap } from 'rxjs';
import { JellyBeanService } from '../../services/jellybean.service';
import { SweetsService } from '../../services/sweets.service';

@Component({
  selector: 'app-showcase',
  standalone: true,
  imports: [JellyBeanComponent, CommonModule, CarouselModule],
  templateUrl: './showcase.component.html',
  styleUrl: './showcase.component.scss'
})
export class ShowcaseComponent implements OnInit {
  @Input() jellyBeansList: IJellyBean[] = [];
  responsiveOptions: any[] = [];
  private jellyBeanUpdateSubscription: Subscription | undefined;
  
  constructor(private jellyBeansApi: ApiService, private jellyBeanService: JellyBeanService, private fakeData: SweetsService){
  }

  ngOnInit(): void {
    this.loadJellyBeans();
    this.jellyBeanUpdateSubscription = this.jellyBeanService.jellyBeanUpdated$.subscribe(() => {
      this.loadJellyBeans();
    });
    
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

  loadJellyBeans(): void {
    // this.jellyBeansList =  this.fakeData.getFakeJellyBeans();
    this.jellyBeansApi.getFeaturedJellyBeans().pipe(
      tap((jellyBeans: IJellyBean[]) => this.jellyBeansList = jellyBeans),
      catchError((error) => {
        console.error('Error fetching jelly beans:', error);
        return of([]); // Return an empty array in case of error
      })
    ).subscribe();
  }

  ngOnDestroy(): void {
    if (this.jellyBeanUpdateSubscription) {
      this.jellyBeanUpdateSubscription.unsubscribe();
    }
  }
  
  onJellyBeanOutput(jellyBean: IJellyBean): void {
    // Handle jelly bean output here
  }
}
