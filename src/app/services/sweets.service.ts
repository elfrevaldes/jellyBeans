import { Injectable } from '@angular/core';
import { IJellyBean, IJellyBeansList } from '../../interfaces/sweets';


@Injectable({
  providedIn: 'root'
})
export class SweetsService {
  constructor() {  }

  getFakeJellyBeans = (): IJellyBean[] => (
      [
        { id: '', name: 'Blueberry Blast', description: 'Delicious blueberry flavor', quantity: 100, rating: 4.5, category: 'Sweet', isFeatured: true },
        { id: '', name: 'Strawberry Splash', description: 'Refreshing strawberry taste', quantity: 80, rating: 4.2, category: 'Sour', isFeatured: false },
        { id: '', name: 'Cherry Charm', description: 'Tangy cherry sensation', quantity: 90, rating: 2.3, category: 'boring', isFeatured: true },
        { id: '', name: 'Lemon Lime Twist', description: 'Zesty lemon-lime fusion', quantity: 85, rating: 4.3, category: 'Sugar Free', isFeatured: false },
        { id: '', name: 'Orange Burst', description: 'Vibrant orange burst of flavor', quantity: 95, rating: 4.1, category: 'Sweet', isFeatured: true },
        { id: '', name: 'Grape Delight', description: 'Rich grape flavor', quantity: 75, rating: 4.4, category: 'Sweet', isFeatured: false },
        { id: '', name: 'Watermelon Wave', description: 'Juicy watermelon sensation', quantity: 85, rating: 4.2, category: 'Sweet', isFeatured: false },
        { id: '', name: 'Peach Paradise', description: 'Sweet peach indulgence', quantity: 80, rating: 2.3, category: 'Sweet', isFeatured: true },
        { id: '', name: 'Apple Avalanche', description: 'Crisp apple delight', quantity: 88, rating: 4.0, category: 'Sweet', isFeatured: false },
        { id: '', name: 'Banana Blast', description: 'Creamy banana goodness', quantity: 92, rating: 4.2, category: 'Sweet', isFeatured: false },
        { id: '', name: 'Raspberry Rave', description: 'Tart raspberry explosion', quantity: 78, rating: 4.1, category: 'Sweet', isFeatured: false },
        { id: '', name: 'Mango Madness', description: 'Exotic mango sensation', quantity: 82, rating: 4.4, category: 'Sweet', isFeatured: false },
        { id: '', name: 'Coconut Craze', description: 'Tropical coconut delight', quantity: 86, rating: 4.3, category: 'Sweet', isFeatured: true },
        { id: '', name: 'Pineapple Punch', description: 'Tangy pineapple burst', quantity: 79, rating: 4.2, category: 'Sweet', isFeatured: false },
        { id: '', name: 'Cranberry Crush', description: 'Tart cranberry sensation', quantity: 83, rating: 4.1, category: 'Sweet', isFeatured: false },
        { id: '', name: 'Blackberry Bliss', description: 'Bold blackberry flavor', quantity: 76, rating: 4.5, category: 'Sweet', isFeatured: false },
        { id: '', name: 'Kiwi Kick', description: 'Zesty kiwi burst', quantity: 87, rating: 4.3, category: 'Sweet', isFeatured: false },
        { id: '', name: 'Mint Marvel', description: 'Cool mint sensation', quantity: 81, rating: 4.2, category: 'Sweet', isFeatured: false },
        { id: '', name: 'Grapefruit Glee', description: 'Citrusy grapefruit delight', quantity: 84, rating: 4.0, category: 'Sweet', isFeatured: false },
        { id: '', name: 'Passionfruit Paradise', description: 'Exotic passionfruit sensation', quantity: 88, rating: 4.4, category: 'Sweet', isFeatured: true },
        { id: '', name: 'Cotton Candy Bliss', description: 'Sweet and fluffy cotton candy flavor', quantity: 110, rating: 4.6, category: 'Sweet', isFeatured: true },
        { id: '', name: 'Lemon Zest', description: 'Tangy lemon burst', quantity: 95, rating: 4.3, category: 'Sweet', isFeatured: false },
        { id: '', name: 'Watermelon Splash', description: 'Juicy watermelon goodness', quantity: 120, rating: 4.8, category: 'Sweet', isFeatured: true },
        { id: '', name: 'Peachy', description: 'Ripe peach flavor', quantity: 85, rating: 4.1, category: 'Sweet', isFeatured: false },
        { id: '', name: 'Grape Delight', description: 'Intensely grape-flavored', quantity: 100, rating: 4.4, category: 'Sweet', isFeatured: true },
        { id: '', name: 'Mango Tango', description: 'Exotic mango twist', quantity: 75, rating: 4.0, category: 'Sweet', isFeatured: false },
        { id: '', name: 'Raspberry Fizz', description: 'Bubbly raspberry sensation', quantity: 105, rating: 4.5, category: 'Sweet', isFeatured: true },
      ]);
}
