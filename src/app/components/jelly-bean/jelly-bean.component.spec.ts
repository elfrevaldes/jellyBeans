import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'primeng/rating';
import { IJellyBean } from '../../../interfaces/sweets';
import { JellyBeanComponent } from './jelly-bean.component';
import { By } from '@angular/platform-browser';

describe('JellyBeanComponent', () => {
  let component: JellyBeanComponent;
  let fixture: ComponentFixture<JellyBeanComponent>;

  const mockJellyBean: IJellyBean = {
    id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
    name: 'Blueberry Blast',
    description: 'Delicious blueberry flavor',
    quantity: 100,
    rating: 4.5,
    category: 'Sweet',
    isFeatured: true,
    image: ''
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RatingModule, FormsModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JellyBeanComponent);
    component = fixture.componentInstance;
    component.jellyBean = mockJellyBean; // Provide the mock jellyBean object
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display jelly bean details', () => {
    const imgElement = fixture.debugElement.query(By.css('img')).nativeElement;
    const titleElement = fixture.debugElement.query(By.css('h2.title')).nativeElement;
    const quantityElement = fixture.debugElement.query(By.css('.quantity')).nativeElement;

    // Check if the image src ends with the expected path
    expect(imgElement.src).toMatch(/assets\/images\/jbIcon\.jpg$/);
    expect(titleElement.textContent).toBe(mockJellyBean.name);
    expect(quantityElement.textContent).toBe(mockJellyBean.quantity.toString());
  });

  it('should emit someOutput event on ngOnInit', () => {
    spyOn(component.someOutput, 'emit');

    component.ngOnInit();

    expect(component.someOutput.emit).toHaveBeenCalledWith(mockJellyBean);
  });
});
