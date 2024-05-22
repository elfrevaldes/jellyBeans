import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApiService } from './api.service';

describe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService]
    });
    service = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve a jelly bean by ID', () => {
    const dummyJellyBean = { id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d', name: 'Blueberry Blast', description: 'Delicious blueberry flavor', quantity: 100, rating: 4.5, category: 'Sweet', isFeatured: true };
    
    service.getJellyBeanById('123').subscribe(jellyBean => {
      expect(jellyBean).toEqual(dummyJellyBean);
    });

    const req = httpMock.expectOne('https://tmc37y6fub.execute-api.us-east-2.amazonaws.com/beans/123');
    expect(req.request.method).toBe('GET');
    req.flush(dummyJellyBean);
  });

  it('should retrieve all jelly beans', () => {
    const dummyJellyBeans = [
      { id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d', name: 'Blueberry Blast', description: 'Delicious blueberry flavor', quantity: 100, rating: 4.5, category: 'Sweet', isFeatured: true },
      { id: '12aaws1s-4d1s-7s8q-2ssw-7s2q1s4gf55w', name: 'Lemon Lime Twist', description: 'Zesty lemon-lime fusion', quantity: 85, rating: 4.3, category: 'Sugar Free', isFeatured: false },
    ];

    service.getAllJellyBeans().subscribe(jellyBeans => {
      expect(jellyBeans.length).toBe(2);
      expect(jellyBeans).toEqual(dummyJellyBeans);
    });

    const req = httpMock.expectOne('https://tmc37y6fub.execute-api.us-east-2.amazonaws.com/beans');
    expect(req.request.method).toBe('GET');
    req.flush(dummyJellyBeans);
  });
});
