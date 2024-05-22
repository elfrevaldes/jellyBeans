import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ShowcaseComponent } from './showcase.component';
import { ApiService } from '../../services/api.service';
import { of } from 'rxjs';

describe('ShowcaseComponent', () => {
  let component: ShowcaseComponent;
  let fixture: ComponentFixture<ShowcaseComponent>;
  let apiService: ApiService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService] // Provide ApiService here
    }).compileComponents();

    fixture = TestBed.createComponent(ShowcaseComponent);
    apiService = TestBed.inject(ApiService);

    // Spy on the getFeaturedJellyBeans method and return a mocked observable
    spyOn(apiService, 'getFeaturedJellyBeans').and.returnValue(of([
      { id: '1', name: 'Jelly Bean 1', description: 'Description 1', quantity: 10, rating: 4.5, category: 'Category 1', isFeatured: true },
      { id: '2', name: 'Jelly Bean 2', description: 'Description 2', quantity: 20, rating: 4.3, category: 'Category 2', isFeatured: true }
    ]));

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load jelly beans on initialization', fakeAsync(() => {
    // Call ngOnInit manually to trigger the loading of jelly beans
    component.ngOnInit();
    tick(); // Simulate the passage of time to allow the asynchronous operation to complete

    // Check that the jellyBeansList property is updated with the mocked data
    expect(component.jellyBeansList).toEqual([
      { id: '1', name: 'Jelly Bean 1', description: 'Description 1', quantity: 10, rating: 4.5, category: 'Category 1', isFeatured: true },
      { id: '2', name: 'Jelly Bean 2', description: 'Description 2', quantity: 20, rating: 4.3, category: 'Category 2', isFeatured: true }
    ]);
  }));
});
