import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { IPaginationParams } from '../../interfaces/http';
import { IJellyBeansList } from '../../interfaces/sweets';

@Injectable({
  providedIn: 'root'
})
export class SweetsService {

  constructor(private apiService: ApiService) { }

  // Observable is a promise/async from RxJS
  getJellyBeans = (url: string, params: IPaginationParams): Observable<IJellyBeansList> => {
    return this.apiService.get(url, {
      params,
      responseType: 'json',
    });
  }

  getFakeJellyBeans = (): IJellyBeansList => {
    return {
      sortBy: 'name',
      filterByCategory: 'Jelly Beans',
      limit: 10,
      page: 0,
      sweetsList: [
        { id: 1,  name: 'Blueberry Blast', description: 'Delicious blueberry flavor', quantity: 100, rating: 4.5, category: 'Jelly Beans', isFeatured: true },
        { id: 2,  name: 'Strawberry Splash', description: 'Refreshing strawberry taste', quantity: 80, rating: 4.2, category: 'Jelly Beans', isFeatured: false },
        { id: 3,  name: 'Cherry Charm', description: 'Tangy cherry sensation', quantity: 90, rating: 2.3, category: 'Jelly Beans', isFeatured: true },
        { id: 4,  name: 'Lemon Lime Twist', description: 'Zesty lemon-lime fusion', quantity: 85, rating: 4.3, category: 'Jelly Beans', isFeatured: false },
        { id: 5,  name: 'Orange Burst', description: 'Vibrant orange burst of flavor', quantity: 95, rating: 4.1, category: 'Jelly Beans', isFeatured: true },
        { id: 6,  name: 'Grape Delight', description: 'Rich grape flavor', quantity: 75, rating: 4.4, category: 'Jelly Beans', isFeatured: false },
        { id: 7,  name: 'Watermelon Wave', description: 'Juicy watermelon sensation', quantity: 85, rating: 4.2, category: 'Jelly Beans', isFeatured: false },
        { id: 8,  name: 'Peach Paradise', description: 'Sweet peach indulgence', quantity: 80, rating: 2.3, category: 'Jelly Beans', isFeatured: true },
        { id: 9,  name: 'Apple Avalanche', description: 'Crisp apple delight', quantity: 88, rating: 4.0, category: 'Jelly Beans', isFeatured: false },
        { id: 10, name: 'Banana Blast', description: 'Creamy banana goodness', quantity: 92, rating: 4.2, category: 'Jelly Beans', isFeatured: true },
        { id: 11, name: 'Raspberry Rave', description: 'Tart raspberry explosion', quantity: 78, rating: 4.1, category: 'Jelly Beans', isFeatured: false },
        { id: 12, name: 'Mango Madness', description: 'Exotic mango sensation', quantity: 82, rating: 4.4, category: 'Jelly Beans', isFeatured: false },
        { id: 13, name: 'Coconut Craze', description: 'Tropical coconut delight', quantity: 86, rating: 4.3, category: 'Jelly Beans', isFeatured: true },
        { id: 14, name: 'Pineapple Punch', description: 'Tangy pineapple burst', quantity: 79, rating: 4.2, category: 'Jelly Beans', isFeatured: false },
        { id: 15, name: 'Cranberry Crush', description: 'Tart cranberry sensation', quantity: 83, rating: 4.1, category: 'Jelly Beans', isFeatured: true },
        { id: 16, name: 'Blackberry Bliss', description: 'Bold blackberry flavor', quantity: 76, rating: 4.5, category: 'Jelly Beans', isFeatured: false },
        { id: 17, name: 'Kiwi Kick', description: 'Zesty kiwi burst', quantity: 87, rating: 4.3, category: 'Jelly Beans', isFeatured: true },
        { id: 18, name: 'Mint Marvel', description: 'Cool mint sensation', quantity: 81, rating: 4.2, category: 'Jelly Beans', isFeatured: false },
        { id: 19, name: 'Grapefruit Glee', description: 'Citrusy grapefruit delight', quantity: 84, rating: 4.0, category: 'Jelly Beans', isFeatured: false },
        { id: 20, name: 'Passionfruit Paradise', description: 'Exotic passionfruit sensation', quantity: 88, rating: 4.4, category: 'Jelly Beans', isFeatured: true },
        { id: 21, name: 'Cotton Candy Bliss', description: 'Sweet and fluffy cotton candy flavor', quantity: 110, rating: 4.6, category: 'Jelly Beans', isFeatured: true },
        { id: 22, name: 'Lemon Zest', description: 'Tangy lemon burst', quantity: 95, rating: 4.3, category: 'Jelly Beans', isFeatured: false },
        { id: 23, name: 'Watermelon Splash', description: 'Juicy watermelon goodness', quantity: 120, rating: 4.8, category: 'Jelly Beans', isFeatured: true },
        { id: 24, name: 'Peachy Keen', description: 'Ripe peach flavor', quantity: 85, rating: 4.1, category: 'Jelly Beans', isFeatured: false },
        { id: 25, name: 'Grape Delight', description: 'Intensely grape-flavored', quantity: 100, rating: 4.4, category: 'Jelly Beans', isFeatured: true },
        { id: 26, name: 'Mango Tango', description: 'Exotic mango twist', quantity: 75, rating: 4.0, category: 'Jelly Beans', isFeatured: false },
        { id: 27, name: 'Raspberry Fizz', description: 'Bubbly raspberry sensation', quantity: 105, rating: 4.5, category: 'Jelly Beans', isFeatured: true },
      ]
    };
  }
}
